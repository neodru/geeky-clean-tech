// Client-side "find the right service" search for the pricing page.
// Matches plain-language queries ("my computer is slow", "hacked email",
// "scam callz") against catalog titles, areas, and descriptions using stemming,
// prefix/typo tolerance, and a synonym map, and ranks the closest services.

export interface SearchItem {
  kind: 'service' | 'package';
  title: string;
  description: string;
  area: string;
  duration: string;
  price: string;
  href: string;
}

export interface SearchResult {
  item: SearchItem;
  score: number;
}

const STOPWORDS = new Set(
  (
    'a an and are at be but by can could do does doing for from get getting got has have help how i im ' +
    'in into is it its keep keeps make me my need needs of on or our please so some that the their them ' +
    'this to too up us want wants was we what when why will with won wont you your'
  ).split(' ')
);

// Everyday words → the vocabulary used in the catalog.
const SYNONYMS: Record<string, string[]> = {
  slow: ['speed', 'startup', 'cleanup'],
  sluggish: ['speed', 'startup', 'cleanup'],
  freeze: ['speed', 'cleanup', 'malware'],
  hack: ['hacked', 'recovery', 'intruder', 'breach'],
  hacked: ['recovery', 'intruder', 'breach'],
  hacker: ['hacked', 'recovery', 'intruder'],
  compromise: ['hacked', 'recovery', 'breach'],
  virus: ['malware', 'virus'],
  malware: ['malware', 'virus'],
  popup: ['pop', 'malware', 'browser'],
  adware: ['malware', 'browser'],
  ransomware: ['malware', 'backup'],
  infect: ['malware', 'virus'],
  scam: ['scam', 'scammer', 'phishing', 'spam'],
  scammer: ['scam', 'phishing'],
  fraud: ['scam', 'phishing'],
  spam: ['spam', 'scam', 'filter'],
  robocall: ['scam', 'call', 'caller'],
  phishing: ['phishing', 'scam'],
  fake: ['scam', 'phishing'],
  password: ['password', 'passkey'],
  login: ['password', 'account', 'sign'],
  forgot: ['manager', 'recover', 'regain'],
  remember: ['password'],
  locked: ['recover', 'recovery', 'password'],
  photo: ['photo', 'picture', 'library'],
  picture: ['photo', 'library'],
  pic: ['photo', 'library'],
  storage: ['storage', 'full', 'plan'],
  space: ['storage', 'full'],
  backup: ['backup', 'backing', 'restore'],
  phone: ['phone', 'iphone', 'android'],
  cellphone: ['phone', 'iphone', 'android'],
  cell: ['phone', 'iphone', 'android'],
  smartphone: ['phone', 'iphone', 'android'],
  mobile: ['phone', 'mobile'],
  tablet: ['ipad', 'tablet'],
  samsung: ['android'],
  galaxy: ['android'],
  pixel: ['android'],
  ios: ['iphone', 'ipad'],
  macbook: ['mac', 'macos'],
  imac: ['mac', 'macos'],
  apple: ['mac', 'iphone', 'apple'],
  laptop: ['computer', 'pc', 'mac'],
  computer: ['computer', 'pc', 'mac'],
  desktop: ['computer', 'pc'],
  pc: ['pc', 'computer', 'windows'],
  transfer: ['transfer', 'migration', 'switch', 'move'],
  move: ['transfer', 'migration', 'move'],
  migrate: ['migration', 'transfer'],
  switch: ['switch', 'transfer'],
  copy: ['transfer'],
  email: ['email', 'inbox'],
  gmail: ['email', 'google', 'inbox'],
  outlook: ['email', 'microsoft', 'inbox'],
  yahoo: ['email', 'inbox'],
  mail: ['email', 'inbox'],
  print: ['printer'],
  scan: ['scanner'],
  kid: ['children', 'family', 'safety'],
  child: ['children', 'family', 'safety'],
  grandkid: ['children', 'family', 'safety'],
  parental: ['children', 'family', 'safety'],
  learn: ['training', 'basics'],
  teach: ['training', 'basics'],
  lesson: ['training', 'basics'],
  class: ['training', 'basics'],
  tutorial: ['training', 'basics'],
  senior: ['senior', 'accessible', 'larger'],
  elderly: ['senior', 'accessible', 'larger'],
  hearing: ['hearing', 'accessible'],
  vision: ['larger', 'text', 'accessible'],
  read: ['larger', 'text'],
  font: ['larger', 'text'],
  big: ['larger'],
  bigger: ['larger'],
  lost: ['lost', 'find', 'erase'],
  stolen: ['lost', 'find', 'erase', 'encryption'],
  find: ['find', 'lost'],
  locate: ['find', 'lost'],
  icloud: ['icloud', 'cloud'],
  onedrive: ['onedrive', 'cloud'],
  dropbox: ['dropbox', 'cloud'],
  drive: ['drive', 'cloud'],
  privacy: ['privacy', 'permission'],
  track: ['privacy', 'tracker', 'find'],
  encrypt: ['encryption', 'bitlocker', 'filevault'],
  protect: ['security', 'protection', 'safe'],
  secure: ['security', 'secure', 'safe'],
  safe: ['safe', 'security', 'safety'],
  '2fa': ['two', 'step', 'verification', 'authenticator'],
  mfa: ['two', 'step', 'verification', 'authenticator'],
  authenticator: ['authenticator', 'verification'],
  code: ['verification', 'authenticator'],
  subscription: ['plan', 'subscription', 'cost'],
  cost: ['cost', 'plan'],
  office: ['microsoft', '365'],
  word: ['microsoft', '365'],
  excel: ['microsoft', '365'],
  browser: ['browser'],
  chrome: ['browser'],
  safari: ['browser', 'safari'],
  internet: ['wifi', 'network', 'browser'],
  wifi: ['wifi', 'network', 'router'],
  wireless: ['wifi', 'network'],
  router: ['router', 'wifi', 'network'],
  modem: ['modem', 'router', 'network'],
  mesh: ['wifi', 'router', 'network'],
  signal: ['wifi', 'network'],
  deadzone: ['dead', 'zone', 'wifi'],
  connection: ['wifi', 'network', 'reconnect'],
  disconnect: ['wifi', 'dropout', 'network'],
  network: ['network', 'wifi'],
  online: ['wifi', 'network'],
  leak: ['breach', 'leak', 'exposed'],
  breach: ['breach', 'leak'],
  win10: ['10', 'upgrade'],
  win11: ['11', 'upgrade'],
  accessibility: ['accessible', 'senior', 'larger', 'assistive', 'simplified'],
};

const FIELD_WEIGHTS = { title: 3, area: 1.5, description: 1 } as const;
type Field = keyof typeof FIELD_WEIGHTS;
// A synonym hit adds to (never replaces) a literal hit, so "dropbox" ranks the
// service that names Dropbox above ones that only match the related word "cloud".
const SYNONYM_WEIGHT = 0.6;
// Below this a result is noise (e.g. a single typo-level match on a description).
const MIN_SCORE = 1;

export function stem(word: string): string {
  if (word.length > 4 && word.endsWith('ies')) return word.slice(0, -3) + 'y';
  if (word.length > 4 && word.endsWith('ing')) return word.slice(0, -3);
  if (word.length > 3 && word.endsWith('ed') && !word.endsWith('eed')) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
  return word;
}

function normalize(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/\bset\s+up\b/g, 'setup')
      .replace(/\bwi[\s-]?fi\b/g, 'wifi')
      .replace(/\bdead\s+zones?\b/g, 'deadzone')
      // "can't get online", "no internet", "internet is down" are connection problems, not accounts.
      .replace(
        /\b(get|go|stay|getting|going)\s+online\b|\bno\s+internet\b|\binternet\s+(is\s+)?down\b|\bcan\s*t\s+connect\b/g,
        'wifi'
      )
      .replace(/\b(log|sign)\s+in\b/g, 'login')
      .replace(/\bwindows\s*10\b/g, 'windows win10')
      .replace(/\bwindows\s*11\b/g, 'windows win11')
      .replace(
        /\b(bigger|larger|big|large)\s+(text|font|letters|print)\b|\b(text|font|letters|print)\s+(bigger|larger|size)\b|\bhard\s+to\s+(read|see|hear)\b|\bcan\s*t\s+(read|see|hear)\b/g,
        'accessibility'
      )
      .replace(/\bpop[\s-]?ups?\b/g, 'popup')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
  );
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(' ')
    .filter((w) => w && !STOPWORDS.has(w))
    .map(stem);
}

function editDistanceAtMost(a: string, b: string, max: number): boolean {
  if (Math.abs(a.length - b.length) > max) return false;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      rowMin = Math.min(rowMin, cur[j]);
    }
    if (rowMin > max) return false;
    prev = cur;
  }
  return prev[b.length] <= max;
}

// How well one query term matches one catalog word: exact, prefix, or typo.
function wordMatch(term: string, word: string): number {
  if (term === word) return 1;
  if (term.length >= 3 && word.startsWith(term)) return 0.75;
  // A longer query word may contain the catalog word ("passwords" vs "password"), but
  // not when it is mostly something else ("accessibility" vs "access").
  if (word.length >= 4 && word.length >= term.length * 0.7 && term.startsWith(word)) return 0.6;
  if (term.length >= 4) {
    const max = term.length >= 7 ? 2 : 1;
    if (editDistanceAtMost(term, word, max)) return 0.6;
  }
  return 0;
}

interface IndexedItem {
  item: SearchItem;
  fields: Record<Field, string[]>;
  titleText: string;
}

export interface SearchIndex {
  entries: IndexedItem[];
  // How distinctive each catalog word is (0–1]: "computer" appears in many
  // services and counts less than "slow" or "encryption".
  rarity: Map<string, number>;
}

export function buildIndex(items: SearchItem[]): SearchIndex {
  const entries = items.map((item) => ({
    item,
    fields: {
      title: tokenize(item.title),
      area: tokenize(item.area),
      description: tokenize(item.description),
    },
    titleText: normalize(item.title),
  }));

  const docFreq = new Map<string, number>();
  for (const e of entries) {
    for (const word of new Set([...e.fields.title, ...e.fields.area, ...e.fields.description])) {
      docFreq.set(word, (docFreq.get(word) ?? 0) + 1);
    }
  }
  const idf = (df: number) => 1 + Math.log(entries.length / (1 + df));
  const maxIdf = idf(1);
  const rarity = new Map([...docFreq].map(([word, df]) => [word, idf(df) / maxIdf]));
  return { entries, rarity };
}

function termScore(term: string, entry: IndexedItem, rarity: Map<string, number>): number {
  let best = 0;
  for (const field of Object.keys(FIELD_WEIGHTS) as Field[]) {
    for (const word of entry.fields[field]) {
      const m = wordMatch(term, word);
      if (m) best = Math.max(best, m * FIELD_WEIGHTS[field] * (rarity.get(word) ?? 1));
    }
  }
  return best;
}

// True when at least two query terms appear in the title in the same order as
// typed, so "android to iphone" prefers "Android-to-iPhone" over the reverse.
function sameOrder(terms: string[], title: string[]): boolean {
  const positions = terms.map((t) => title.indexOf(t)).filter((i) => i >= 0);
  return positions.length >= 2 && positions.every((p, i) => i === 0 || p > positions[i - 1]);
}

export function search({ entries, rarity }: SearchIndex, query: string, limit = 5): SearchResult[] {
  const raw = normalize(query).split(' ').filter(Boolean);
  const terms = [...new Set(raw.filter((w) => !STOPWORDS.has(w)).map(stem))];
  if (!terms.length) return [];

  const phrase = raw.length > 1 ? normalize(query) : '';
  const results: SearchResult[] = [];

  for (const entry of entries) {
    let total = 0;
    let matched = 0;
    for (const term of terms) {
      let synonym = 0;
      for (const alt of SYNONYMS[term] ?? []) {
        if (stem(alt) !== term) synonym = Math.max(synonym, termScore(stem(alt), entry, rarity));
      }
      const score = termScore(term, entry, rarity) + SYNONYM_WEIGHT * synonym;
      if (score > 0) matched++;
      total += score;
    }
    if (!matched) continue;
    // Favor results that match more of the query, not one word many times.
    total *= 0.4 + 0.6 * (matched / terms.length);
    if (phrase && entry.titleText.includes(phrase)) total += 3;
    if (sameOrder(terms, entry.fields.title)) total += 1;
    if (total >= MIN_SCORE) results.push({ item: entry.item, score: Math.round(total * 100) / 100 });
  }

  return results.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title)).slice(0, limit);
}
