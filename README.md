  
# PING PAY Landing Page

A responsive landing page for PING PAY, a bank-linked payment wallet designed for fast, everyday payments in Germany.

## Features

- PING PAY brand-led hero section with QR payment visual
- Berlin beta waitlist call to action
- Consumer and merchant value propositions
- Security and bank-linking messaging
- Responsive desktop and mobile layouts
- Interactive beta signup confirmation

## Requirements

- Node.js 20 or newer
- pnpm 12 or npm

## Local development

Using pnpm:

```bash
pnpm install
pnpm dev
```

Using npm:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
pnpm build
pnpm start
```

Or with npm:

```bash
npm run build
npm run start
```

## Project structure

- `app/page.tsx` — landing page content and interactions
- `app/globals.css` — global styles and theme tokens
- `app/layout.tsx` — application metadata and root layout

