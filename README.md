# BinnaDevLab Website v0.1.0

## Summary

The official web portal and agent-facing interface for BinnaDevLab, an emerging engineering laboratory where "Reasoning precedes Coding." This system serves as the central hub for technical research, cohort registration, community onboarding, and provides extensive machine-readable capabilities (WebMCP, ARD, and Markdown for Agents) to support autonomous AI interactions.

### Key Features

- **Agent-Ready Architecture**
  - Full support for Agentic Resource Discovery (ARD), Agent Cards, and MCP Server Cards.
- **Markdown for Agents**
  - Next.js middleware implements content negotiation to serve `text/markdown` directly to LLM scrapers.
- **WebMCP Integration**
  - Exposes site capabilities directly to browser-based AI assistants via `navigator.modelContext`.
- **Server Actions for Security**
  - Form handling (inquiries, newsletters) is securely processed via server-side execution, hiding API keys from the client.
- **Progressive Web App (PWA)**
  - Offline support and caching powered by Serwist.

---

## System Architecture

### Core Components

- `src/middleware.ts`
  - Responsibility: Acts as an edge interceptor for content negotiation, serving markdown formats to agents and HTML to human browsers.
  - Key Functions: `middleware()`

- `src/app/layout.tsx`
  - Responsibility: Provides the global UI shell, font optimization, and injects the WebMCP script into the client context.
  - Key Functions: `RootLayout()`, `navigator.modelContext.provideContext()`

- `src/app/actions/submitInquiry.ts`
  - Responsibility: Secure RPC endpoint for processing user contact requests and dispatching emails.
  - Key Functions: `submitInquiry()`

---

## Component Interaction Flow

1. User/Agent -> `src/middleware.ts`
   - Calls `middleware()` with HTTP headers (e.g., `Accept: text/markdown`).

2. `src/middleware.ts` -> `public/llms.txt` (If Agent)
   - Bypasses React rendering to serve the highly-optimized LLM summary.

3. `src/app/layout.tsx` -> Browser Environment (If Human)
   - Renders the standard Next.js DOM and injects WebMCP context.

4. Client Form -> `src/app/actions/submitInquiry.ts`
   - User submits inquiry, invoking a secure Server Action.

5. Final State
   - Email is dispatched via external mail provider, and user receives a confirmation state in the UI.

---

## Example Execution

### submitInquiry

1. User calls:

   ```ts
   await submitInquiry({
     name: "Alice",
     email: "alice@example.com",
     message: "...",
   });
   ```

2. Next.js Server Action processes request:
   - Receives payload securely on the server.
   - Validates input fields.

3. Internal operations:
   - Constructs React Email template (`InquiryNotification`).
   - Authenticates with Resend API.
   - Dispatches transactional email.

4. Result:
   - Email delivered to BinnaDevLab inbox.
   - Returns `{ success: true }` to the client.

---

## State & Data Model

- `InquiryData`
  - Description: The payload schema submitted by users to contact the lab.
  - Fields: `name` (string), `email` (string), `message` (string)

- `NewsletterSubscriber`
  - Description: Payload for joining the BinnaDevLab community/newsletter.
  - Fields: `email` (string)

---

## Invariants & Security Model

- **No Client-Side Secrets**
  - Resend API keys and internal routing logic must never be exposed to the client bundle.
- **Agent Discovery Integrity**
  - AI endpoints (`/.well-known/*`) must always return valid, schema-compliant JSON/Markdown without 404ing on false APIs.

### Failure Conditions

- Reverts when:
  - Missing environment variables (`RESEND_API_KEY`).
  - Network timeout from the external email provider.

---

## External Dependencies

- `Resend`
  - Purpose: Transactional email delivery for cohorts and inquiries.

- `Serwist`
  - Purpose: Service worker generation for PWA capabilities.

---

## Configuration

- `RESEND_API_KEY`
  - Description: Authentication token for the Resend email API.
  - Default: None (Required)

- `SENDER_EMAIL`
  - Description: Default outbound email address.
  - Default: None (Required)

---

## Getting Started

### Requirements

- Node.js (v18+)
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/BinnaDevLab/binnadev-lab-website.git
cd binnadev-lab-website
npm install
```

### Environment Setup

Create `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key_here
SENDER_EMAIL=hello@binnadev.com
```

---

## Build

```bash
npm run build
```

---

## Test

```bash
npm run lint
```

---

## Deployment (Optional)

```bash
npm run build && npm run start
# Or deploy directly via Vercel
```

---

## Notes & Variants

- For AI agents requesting site context, use `Accept: text/markdown` or fetch `/llms.txt`.
- For autonomous agent interactions, consult the `/.well-known/ai-catalog.json`.

---

## Roadmap (Optional)

- [x] Implement Markdown for Agents
- [x] Configure Agentic Resource Discovery (ARD)
- [x] Launch First Engineering Cohort

---

## License

Copyright (c) 2026 BinnaDevLab
