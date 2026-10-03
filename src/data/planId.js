// Package / plan ids travel in ?plan= links and the contact form's hidden
// "plan" field. One rule, shared by scripts/sync-catalog.mjs (which refuses
// longer package names), the contact page, and functions/api/contact.ts.
export const PLAN_ID_MAX = 80;
export const PLAN_ID_RE = new RegExp(`^[a-z0-9-]{1,${PLAN_ID_MAX}}$`);
