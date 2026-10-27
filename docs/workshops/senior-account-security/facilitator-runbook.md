# Senior Account Security & Simplification Workshop — Facilitator Runbook

**Format:** 1:1, in person, 120 minutes · **Devices:** client iPhone + Windows PC · **Delivered by:** Geeky Clean Technology

**Outcome:** One Gmail address becomes the client's primary identity for Apple, Google, and Microsoft. Each account has her mobile number as a trusted number, two-factor authentication (2FA), biometrics, and a passkey. She leaves with one password manager and a printed recovery card.

> Menu paths reflect iOS 26 / Windows 11 / Google & Microsoft web UIs as of Oct 2026. Vendors move menus often, so do a 10-minute dry run on a test device before the session.

---

## 0. Guardrails (read before the session)

| Rule                                                                        | Why                                                                                                                                                  |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Client's hands on the keyboard.** She types passwords and taps approvals. | Liability, consent, and muscle memory. The technician never learns or stores her secrets.                                                            |
| **Never make Geeky Clean's email or phone a recovery method.**              | This would create a permanent dependency and an insider-risk/liability exposure. Use a trusted family member if she needs a second recovery contact. |
| **Do not delete or close the Cox mailbox today.**                           | Banks, pharmacies, Medicare/SSA, and utilities still send mail there. Retire it only after the 90-day migration (Section 7).                         |
| **Do not enable Apple Recovery Key or Microsoft "remove password" today.**  | Both remove safety nets. For a senior, permanent lockout is a bigger risk than phishing of a strong, managed password.                               |
| **Get signed service authorization** (scope, no credential retention).      | Standard MSP practice; protects both parties.                                                                                                        |

---

## 1. Pre-Workshop Checklist (phone call 2–3 days before, ~15 min)

Ask the client to have these ready. **If any item in bold is missing, reschedule.** Account recovery on the day eats the whole session.

- [ ] **iPhone passcode** and **Apple Account password**
- [ ] **Cox email password** (test login at cox.com before the session)
- [ ] **Microsoft account password** (or confirm the PC uses a local account)
- [ ] **iPhone in hand with the active mobile number.** It must be able to receive SMS.
- [ ] Chosen Gmail username, plus 2 alternatives (e.g., `firstname.lastname`, `firstname.lastname.sd`)
- [ ] Name and phone number of one trusted family member (recovery contact)
- [ ] Which browser she uses on the PC (Chrome / Edge / other)
- [ ] Mobile carrier name (for the SIM-swap lock in Section 6)

**Technician pre-flight (on arrival, before the clock starts):**

- [ ] iPhone updated to current iOS (Settings → General → Software Update). Starting an update mid-session can take 30+ minutes, so do it during pre-work if possible.
- [ ] Windows 11 with current updates. **If the PC is on Windows 10** (end of support Oct 2025), flag it. Passkeys still work, but quote an upgrade or replacement separately.
- [ ] Check the PC for biometric hardware: Settings → Accounts → Sign-in options. Look for "Facial recognition (Windows Hello)" or "Fingerprint recognition".
- [ ] Wi-Fi works on both devices. Print 1 blank **Recovery Card** (template in the client handout).

---

## 2. Architecture (engineering layer)

### 2.1 Target identity model

```
                 ┌───────────────────────────────┐
                 │   Gmail (Google Account)      │  ← primary identity / recovery anchor
                 │   2SV: passkey + Google prompt│
                 │   recovery: mobile + family   │
                 └──────┬───────────────┬────────┘
       sign-in email    │               │   sign-in email / alias
          ┌─────────────▼───┐     ┌─────▼──────────────────┐
          │ Apple Account   │     │ Microsoft Account      │
          │ 2FA: trusted #  │     │ 2FA: passkey + SMS     │
          │ Face ID, SDP on │     │ Windows Hello on PC    │
          └─────────────────┘     └────────────────────────┘
   Cox.net → kept as forwarding + secondary recovery for 90 days, then retired
```

### 2.2 Sequencing rationale (order is load-bearing)

1. **Google first.** It becomes the recovery anchor, so it must be hardened (2SV, passkey, recovery phone) _before_ Apple and Microsoft send verification codes to it.
2. **Apple second.** Changing the Apple Account email sends a code to the new Gmail. Gmail must already be signed in on the iPhone.
3. **Microsoft third.** Same dependency on Gmail. Windows Hello is set up in the same block because the PC is already open.
4. **Password manager and passkeys last.** These depend on all three identities being stable.

### 2.3 Password manager decision (make this call during pre-work)

**Recommendation: Google Password Manager (GPM)** as the single source of truth.

| Factor                        | Google Password Manager                                                              | Apple Passwords                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| PC experience                 | Native in Chrome. No extra software.                                                 | Needs iCloud for Windows plus a browser extension; more fragile. |
| iPhone experience             | Works via AutoFill (Settings → General → AutoFill & Passwords → Chrome) with Face ID | Native and slightly smoother                                     |
| Aligns with "Gmail = primary" | Yes                                                                                  | Partially                                                        |
| Passkey sync                  | Yes (Chrome / GPM)                                                                   | Yes (iCloud Keychain)                                            |

**Steelman for Apple Passwords:** if she lives on the iPhone and barely uses the PC, Apple's built-in Passwords app is the lowest-friction choice, with nothing to configure.
**Kill criterion:** if she does not use Chrome on the PC and refuses to switch, choose **Apple Passwords** with iCloud for Windows. **Never run both as active managers.** Two stores drift apart, and she will lose trust in both.

### 2.4 Threat model (what this does and does not stop)

| Threat                                        | Mitigation in this workshop                                             | Residual risk                                    |
| --------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------ |
| Password phishing / reuse                     | Passkeys are phishing-resistant; the manager generates unique passwords | Accounts that don't support passkeys yet         |
| Account takeover via SMS (SIM swap)           | Carrier port-out PIN; passkey / Google prompt preferred over SMS        | Carrier social engineering                       |
| Stolen iPhone + shoulder-surfed passcode      | Stolen Device Protection (biometric + delay for sensitive changes)      | Weak passcode. Enforce 6+ digits                 |
| ISP email loss (moves, cancels Cox)           | Migration to Gmail                                                      | Long-tail accounts still on cox.net (Section 7)  |
| Lockout (forgotten credentials)               | Recovery phone + family recovery contact + printed backup codes         | Recovery card lost or exposed. Store it securely |
| Tech-support / "your account is hacked" scams | Scam rules in teach-back (Section 5)                                    | Social engineering remains the #1 senior risk    |

---

## 3. Run of Show (120 minutes)

| Time      | Block                                            | Min |
| --------- | ------------------------------------------------ | --- |
| 0:00–0:10 | A. Welcome, goals, consent, pre-flight confirm   | 10  |
| 0:10–0:35 | B. Create and harden Gmail (Google Account)      | 25  |
| 0:35–0:55 | C. Apple Account: switch to Gmail, harden iPhone | 20  |
| 0:55–1:00 | _Break_                                          | 5   |
| 1:00–1:25 | D. Microsoft Account + Windows Hello on PC       | 25  |
| 1:25–1:45 | E. Password manager + passkeys + Cox forwarding  | 20  |
| 1:45–2:00 | F. Recovery Card, teach-back, next steps         | 15  |

**Buffer strategy:** if Block B or C runs more than 10 minutes over, **defer Block E's import step and the Cox forwarding to Session 2**. Never cut Block F. A secured account she can't recover or use is a failure.

---

### Block A — Welcome & Consent (10 min)

1. Explain the "why" in one sentence: _"Your Cox email belongs to your internet company. Gmail belongs to you. We're making it the one key that opens everything, and adding locks only you can open with your face."_
2. Client signs the authorization (scope: Google/Apple/Microsoft setup; no credentials retained).
3. Confirm the pre-flight checklist items. **Go/No-Go:** if she can't sign in to Apple or Cox, switch the session to account recovery and reschedule the rest.

### Block B — Gmail / Google Account (25 min)

**On the PC in Chrome** (bigger screen, easier typing):

1. accounts.google.com → **Create account** → **For my personal use**.
2. Name, birthday, Gmail username. Have her create a **passphrase** of 4 random words (e.g., `Harbor-Tulip-Seven-Lantern`). Write it on the Recovery Card.
3. **Phone:** add her mobile number and verify by SMS. When prompted, allow it for recovery and 2SV.
4. **Recovery email:** use the **cox.net** address for now. Swap it to the family member's email in Session 2, or once Cox is retired.
5. myaccount.google.com → **Security**:
   - **2-Step Verification** → Turn on. Methods:
     - **Google prompts** (via the Gmail/Google app on the iPhone): primary
     - **Text message** to her mobile: backup
     - **Backup codes** → Get codes → **print** → staple to the Recovery Card
   - **Passkeys and security keys** → **Create a passkey**:
     - On the PC: creates a passkey stored in Windows Hello / GPM (Windows Hello is configured in Block D. If not ready yet, create this one after D.)
     - On the iPhone (step 6): creates a passkey in her iCloud Keychain/GPM, unlocked with Face ID
   - Turn on **"Skip password when possible"**
6. **On the iPhone:** install **Gmail** (and optionally the **Google** app). Sign in. Confirm that a Google prompt arrives and she approves it with a tap.
7. **Checkpoint:** sign out of Gmail on the PC, then sign back in using the **passkey** only. She sees: _"Use your face/fingerprint/PIN"_. ✅

### Block C — Apple Account → Gmail + iPhone Hardening (20 min)

**Pre-check:** the Gmail address must not already be used by another Apple Account. If it is, stop and resolve that first.

1. **Change the Apple Account email:** Settings → _[Her Name]_ → **Sign-In & Security** → **Email & Phone Numbers** → **Edit** → remove the `@cox.net` address → **Continue** → enter the new Gmail → enter the verification code from Gmail (open the Gmail app).
   - Then sign out and back in to iCloud on **other Apple devices** (iPad, Mac, Apple TV) if she has them. Note them for Session 2 if not present.
   - Add the cox.net address back as an **additional "reachable at" email** for 90 days (optional).
2. **Trusted phone number:** Sign-In & Security → **Two-Factor Authentication** → confirm her mobile is listed under **Trusted Phone Numbers**. Add a family member's number as a second trusted number only if she consents.
   - 2FA should already be on (it is mandatory for modern Apple Accounts). Verify it.
3. **Face ID:** Settings → **Face ID & Passcode** → set up Face ID (plus an alternate appearance if she wears glasses intermittently). Enable it for **iPhone Unlock**, **Apple Pay**, **iTunes & App Store**, and **Password AutoFill**.
   - **Passcode:** if it's 4 digits, change it to 6 digits (Passcode Options). Use something she will remember. Avoid her birth year.
4. **Stolen Device Protection:** Face ID & Passcode → **Stolen Device Protection → On**. Explain: _"If a thief learns your passcode, they still can't change your Apple password without your face."_
5. **Account Recovery Contact:** Sign-In & Security → **Account Recovery** → add the trusted family member (they need an Apple device). Optionally add a **Legacy Contact** as well.
6. **Checkpoint:** Settings → _[Name]_ shows the Gmail address. Face ID unlocks the phone. ✅

### Break (5 min)

### Block D — Microsoft Account + Windows Hello (25 min)

**Branch first:** Settings → Accounts → **Your info**.

- **If she uses a Microsoft account:** continue with step 1.
- **If she uses a local account:** convert it via "Sign in with a Microsoft account instead" using the **Gmail** address. This creates a new Microsoft account on Gmail. Skip to step 3.
- **If her existing Microsoft account is @outlook/@hotmail with years of email in it:** keep it as the account, but **add Gmail as the primary alias** (step 1). Don't abandon a mailbox with data in it.

1. **Make Gmail the Microsoft sign-in:** account.microsoft.com → **Your info** → **Edit account info** (Manage how you sign in to Microsoft) → **Add email** → Gmail → verify the code → **Make primary**.
   - Remove the cox.net alias only after 90 days.
2. **Trusted number + 2FA:** account.microsoft.com → **Security** → **Manage how I sign in** →
   - Confirm or **add a phone number** (her mobile, SMS)
   - **Turn on two-step verification**
   - **Add a way to sign in or verify** → **Face, fingerprint, PIN, or security key** → create a **passkey** (Windows Hello on the PC)
   - Optionally add a second passkey from the iPhone via QR code ("Use another device" → iPhone camera → saves to iCloud Keychain/GPM)
   - **Recovery code** → generate → **print** → Recovery Card
   - ⚠️ **Do not** turn on "Passwordless account" today (see Guardrails).
3. **Windows Hello:** Settings → Accounts → **Sign-in options**:
   - **Facial recognition** or **Fingerprint** if the hardware supports it. Otherwise set a **PIN** of 6+ digits.
   - **Fallback:** if there's no biometric hardware, a USB fingerprint reader or Windows Hello camera costs about $25–60. Quote it as optional. **Kill criterion:** don't buy hardware if she unlocks the PC fewer than ~3×/week. The PIN plus the iPhone-as-passkey (QR) is enough.
4. **Checkpoint:** lock the PC (Win + L), then unlock with her face, fingerprint, or PIN. Sign out of account.microsoft.com and sign back in with the passkey. ✅

### Block E — Password Manager, Passkeys, Cox Forwarding (20 min)

_(Assumes Google Password Manager. For the Apple Passwords path, see the alternate steps below.)_

1. **PC (Chrome):** sign in to Chrome with Gmail → turn on **Sync**. Then go to Settings → **Autofill and passwords** → Google Password Manager:
   - **Import** saved passwords from Edge or another browser if any exist (Edge: export to CSV, import into GPM, then **securely delete the CSV** and empty the Recycle Bin).
   - Run **Password Checkup**. Note compromised or reused passwords for Session 2. Don't fix them all today.
   - **Turn off** Edge's password saving so it stops offering a second store.
2. **iPhone:** Settings → **General → AutoFill & Passwords** → turn on **Chrome** (install Chrome first and sign in with Gmail) → turn **off Passwords (Apple)**. Alternatively, keep Apple on _only_ for her existing iCloud items until they're migrated.
   - **Demo:** open a site she uses, tap the password field, then Face ID → it fills. This is the "aha" moment. Let her repeat it twice.
3. **Passkeys on one high-value account:** pick the one she uses most that supports passkeys (Amazon, PayPal, her bank if supported). Account settings → Security → **Create a passkey**. She approves with Face ID.
4. **Cox forwarding:** sign in to Cox webmail → Settings → **Forwarding** → forward all mail to Gmail (keep a copy in Cox).
   - Note: Gmail retired "Check mail from other accounts" (POP fetch / Gmailify) in early 2026. **Forwarding from the Cox side** is the supported path. Verify Cox's current webmail settings during the dry run.
   - Set up a **Cox auto-reply** only after Session 2, once she's comfortable with Gmail.

**Alternate (Apple Passwords path):** iPhone: Settings → General → AutoFill & Passwords → **Passwords** on. PC: install **iCloud for Windows** (Microsoft Store) → sign in → enable **Passwords** → install the iCloud Passwords extension in Chrome/Edge → approve with the 6-digit code.

### Block F — Recovery Card, Teach-Back, Close (15 min)

1. **Fill in the Recovery Card** (handout) together. Include account emails, the Gmail passphrase, printed backup codes, and the recovery contact's name.
   - **Storage:** a sealed envelope in a home safe or locked file drawer. Tell the family member _where_ it is, not what's in it. **Never** keep it in a wallet, as a photo on the phone, or by the PC.
2. **Teach-back (she performs, you watch). Pass = she completes 4 of 5 unaided:**
   1. Unlock the iPhone with Face ID
   2. Open Gmail and read a message
   3. Sign in to a website using AutoFill with Face ID
   4. Unlock the PC with Windows Hello
   5. Answer: _"Someone calls saying they're from Microsoft/Apple/your bank and asks for a code. What do you do?"_ → **"Hang up. Never share a code. Call Dru or my family."**
3. **The 3 Scam Rules** (on the handout):
   - Real companies **never** call asking for a code, password, or remote access.
   - A code you didn't ask for means someone else is trying to get in. **Don't approve it.**
   - Pop-ups with phone numbers are fake. Close the browser and call us.
4. **Book Session 2** (60 min, 2–4 weeks out). See Section 7.

---

## 4. Contingency Playbook

| Failure                                             | Response                                                                                         | Time cap           |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------ |
| Can't remember Apple Account password               | iforgot.apple.com from the trusted iPhone (passcode reset path)                                  | 15 min, then defer |
| Gmail username taken                                | Use a pre-chosen alternative. Avoid birth years and numbers that leak personal info.             | 2 min              |
| Gmail already tied to an Apple Account / MS account | Stop. Resolve the conflict in Session 2. Don't merge accounts under time pressure.               | —                  |
| No SMS reception                                    | Wi-Fi Calling on, or move to a window. Otherwise use Google prompt / voice-call codes.           | 5 min              |
| PC on Windows 10 / no TPM                           | Skip Windows Hello biometrics. Use the iPhone as passkey authenticator via QR. Quote an upgrade. | —                  |
| Client fatigued or overwhelmed                      | Stop after Block C. Apple + Google hardened is a win. Reschedule D–E.                            | —                  |

---

## 5. Success Criteria (Definition of Done)

| #   | Criterion                                                  | Verified by                    |
| --- | ---------------------------------------------------------- | ------------------------------ |
| 1   | Gmail created; 2SV on; passkey works; backup codes printed | Passkey-only sign-in on the PC |
| 2   | Apple Account email = Gmail; trusted # = her mobile        | Settings → Name                |
| 3   | Face ID + Stolen Device Protection on                      | Settings → Face ID & Passcode  |
| 4   | Microsoft primary alias = Gmail; 2SV on; passkey works     | Passkey sign-in                |
| 5   | Windows Hello (biometric or PIN) unlocks the PC            | Win + L, then unlock           |
| 6   | One password manager active; AutoFill works with Face ID   | Teach-back #3                  |
| 7   | Cox → Gmail forwarding live                                | Send test mail to cox.net      |
| 8   | Recovery Card complete and stored                          | Visual confirm                 |
| 9   | Teach-back 4/5 passed                                      | Section 3, Block F             |

---

## 6. Optional Add-On (if time allows, else Session 2): Carrier SIM-Swap Lock

The mobile number is now a recovery path for all three accounts, so harden it at the carrier:

- **T-Mobile:** T-Mobile app → Account → Profile → Privacy → **SIM Protection** / Number Lock
- **Verizon:** My Verizon → Account → Security → **Number Lock** + SIM Protection
- **AT&T:** myAT&T → Profile → **Wireless Account Lock**

Record the carrier account PIN on the Recovery Card.

---

## 7. Session 2 (60 min, +2–4 weeks): The Long-Tail Migration

**Second-order reality:** changing three platform accounts takes 2 hours. Changing the email on **every account that knows cox.net** is the real project. Expect 20–60 accounts.

1. Search the Cox inbox (and forwarded Gmail) for "account", "statement", and "password" to inventory senders.
2. Prioritize: **Tier 1** = bank, credit cards, Medicare/SSA, pharmacy, insurance, doctors' portals; **Tier 2** = shopping, utilities; **Tier 3** = newsletters (unsubscribe instead).
3. Update the email on Tier 1 together. Hand her a printed checklist for Tier 2.
4. Fix compromised passwords flagged by Password Checkup.
5. Swap the Google recovery email from cox.net to the family member.
6. **Day 90 retirement criteria for Cox:** fewer than 3 legitimate emails per week still arriving at cox.net → set the Cox auto-reply ("I've moved to …"), keep forwarding on, and stop checking Cox. **Never delete** while the Cox internet subscription exists. Re-check if she ever changes ISPs.

---

## 8. Billing / Tech Log Template

| Field        | Value                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| Service      | Senior Account Security & Simplification Workshop (Session 1 of 2)                                     |
| Duration     | 2.0 hrs on-site + 0.25 hr pre-call                                                                     |
| Deliverables | Gmail identity; Apple/Microsoft migrated; 2FA + passkeys + biometrics; password manager; Recovery Card |
| Follow-up    | Session 2 (1.0 hr): long-tail migration, Cox retirement plan                                           |
| Optional     | Windows Hello hardware; Windows 11 upgrade; carrier SIM lock                                           |
