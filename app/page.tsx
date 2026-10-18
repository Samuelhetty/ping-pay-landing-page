'use client'

import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  X,
  Zap,
} from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ping-logo%281%29-VyVw706Rusm3zbYemDaOAZjL5iJcOp.png'

const features = [
  { icon: ScanLine, number: '01', title: 'Scan to pay', text: 'Point your camera at a QR code, check the details, and confirm. That is it.' },
  { icon: Zap, number: '02', title: 'Settles in seconds', text: 'Powered by SEPA Instant, so money lands directly in the merchant’s account.' },
  { icon: Users, number: '03', title: 'Made for real life', text: 'Split a bill, request money, or send to a contact without entering an IBAN.' },
]

function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <img
      src={logoUrl}
      alt="PING PAY"
      className={`h-10 w-auto object-contain ${invert ? 'brightness-0 invert' : ''}`}
    />
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f5ef] text-[#0e2b22]">
      <nav className="mx-auto flex items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" aria-label="PING PAY home"><Logo /></a>
        <div className="hidden items-center gap-9 text-sm font-medium text-[#315248] md:flex">
          <a className="transition-colors hover:text-[#07865b]" href="#how-it-works">How it works</a>
          <a className="transition-colors hover:text-[#07865b]" href="#merchants">For merchants</a>
          <a className="transition-colors hover:text-[#07865b]" href="#security">Security</a>
        </div>
        <a href="#join" className="hidden items-center gap-2 rounded-full bg-[#0e2b22] px-5 py-3 text-sm font-semibold text-[#eef5e8] transition-transform hover:-translate-y-0.5 md:flex">
          Join the beta <ArrowUpRight data-icon="inline-end" />
        </a>
        <button className="rounded-full border border-[#0e2b22]/15 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {menuOpen && <div className="mx-6 flex flex-col gap-4 rounded-2xl border border-[#0e2b22]/10 bg-white p-5 text-sm font-medium md:hidden"><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#merchants" onClick={() => setMenuOpen(false)}>For merchants</a><a href="#security" onClick={() => setMenuOpen(false)}>Security</a><a href="#join" onClick={() => setMenuOpen(false)}>Join the beta <ArrowRight className="ml-1 inline" /></a></div>}

      <section id="top" className="mx-auto grid gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#65a98b]/40 bg-[#e2f2e3] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#167252]"><span className="size-1.5 rounded-full bg-[#0da36e]" />Launching in Berlin</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[.96] tracking-[-0.06em] text-[#0b2b21] sm:text-7xl lg:text-[6.7rem]">Money moves at the speed of <span className="text-[#0a9b68]">life.</span></h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-[#557168]">PING PAY is the bank-linked wallet for instant, everyday payments. Scan a QR code, split a bill, or send money — directly from your account.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#join" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0e2b22] px-6 py-4 font-semibold text-[#eef5e8] transition-transform hover:-translate-y-0.5">Get early access <ArrowRight data-icon="inline-end" /></a><a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0e2b22]/20 px-6 py-4 font-semibold text-[#0e2b22] hover:bg-white">See how it works <ChevronDown data-icon="inline-end" /></a></div>
          <div className="mt-12 flex items-center gap-8 border-t border-[#0e2b22]/10 pt-6"><div><p className="text-2xl font-semibold tracking-tight">€0</p><p className="text-xs uppercase tracking-wider text-[#6a8379]">P2P transfer fee</p></div><div className="h-8 w-px bg-[#0e2b22]/10" /><div><p className="text-2xl font-semibold tracking-tight">1–2 sec</p><p className="text-xs uppercase tracking-wider text-[#6a8379]">Settlement speed</p></div></div>
        </div>
        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -right-6 -top-8 size-28 rounded-full bg-[#b6e6c8] blur-2xl" /><div className="absolute -bottom-8 -left-8 size-36 rounded-full bg-[#dceaa1] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0e2b22] p-5 shadow-2xl shadow-[#0e2b22]/20 sm:p-8"><div className="mb-20 flex items-center justify-between text-[#d8f0dd]"><span className="text-xs font-medium uppercase tracking-[0.2em]">PING PAY / 01</span><span className="flex items-center gap-2 text-xs"><span className="size-2 rounded-full bg-[#65e3a5]" /> Secure</span></div><div className="relative mx-auto flex aspect-square max-w-[320px] items-center justify-center rounded-[2rem] bg-[#d8f0dd] p-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,#e9f7cf_0,transparent_45%)]" /><QrCode className="relative size-full max-h-56 text-[#0e2b22]" strokeWidth={1.1} /><div className="absolute flex size-14 items-center justify-center rounded-2xl bg-[#0e2b22] shadow-lg"><img src={logoUrl} alt="PING PAY mark" className="h-8 w-auto object-contain brightness-0 invert" /></div></div><div className="mt-6 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[0.15em] text-[#91b6a2]">Paying at</p><p className="mt-1 text-xl font-medium text-white">Kiez Kiosk</p></div><span className="rounded-full bg-[#b8edc1] px-3 py-1.5 text-xs font-bold text-[#0e2b22]">€ 8.50</span></div></div>
        </div>
      </section>

      <section className="border-y border-[#0e2b22]/10 bg-[#e8eee5]" id="how-it-works"><div className="mx-auto  px-6 py-20 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0a9b68]">The simple part</p><h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">Payments should feel like a <em className="font-serif font-normal">ping.</em></h2><p className="mt-6 max-w-sm leading-7 text-[#5d766d]">No cards. No cash. No waiting around for a transfer to clear.</p></div><div className="grid gap-4 sm:grid-cols-3">{features.map((item) => { const Icon = item.icon; return <div key={item.number} className="rounded-3xl border border-[#0e2b22]/10 bg-[#f7f9f4] p-6"><div className="flex items-center justify-between"><Icon className="text-[#0a9b68]" /><span className="text-xs text-[#7d958b]">{item.number}</span></div><h3 className="mt-14 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#688077]">{item.text}</p></div> })}</div></div></div></section>

      <section id="merchants" className="mx-auto px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div className="rounded-[2.5rem] bg-[#bde7c9] p-8 sm:p-12"><div className="flex items-start justify-between"><Store className="size-9 text-[#0e2b22]" /><span className="rounded-full bg-[#e9f4dd] px-3 py-1 text-xs font-bold text-[#0e2b22]">FOR BUSINESS</span></div><p className="mt-24 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em]">Give customers a better way to pay — and keep more of every sale.</p><div className="mt-10 border-t border-[#0e2b22]/15 pt-5 text-sm text-[#315248]">One transparent rate. Instant settlement. No terminal required.</div></div><div className="lg:pl-10"><p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0a9b68]">Built for the everyday economy</p><h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">The checkout your customers already <span className="text-[#0a9b68]">want.</span></h2><p className="mt-6 max-w-lg text-lg leading-8 text-[#5d766d]">From cafés and kiosks to pop-ups and online sellers, PING PAY makes small payments affordable, trackable, and effortless.</p><ul className="mt-8 grid gap-4 text-sm font-medium text-[#315248] sm:grid-cols-2">{['QR payments in-store', 'Free customer transfers', 'Sales analytics', 'No fixed terminal fees'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex size-6 items-center justify-center rounded-full bg-[#dcefa5]"><Check className="size-3.5" /></span>{item}</li>)}</ul><a href="#join" className="mt-10 inline-flex items-center gap-2 font-semibold text-[#0a8d60] underline decoration-[#9bd2a6] underline-offset-8">Talk to us about PING PAY for business <ArrowUpRight data-icon="inline-end" /></a></div></div></section>

      <section id="security" className="bg-[#0e2b22] text-[#eef5e8]"><div className="mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28"><div><ShieldCheck className="size-10 text-[#9ee1a9]" /><h2 className="mt-8 max-w-md text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">Your money, on your terms.</h2></div><div className="grid gap-8 sm:grid-cols-2"><div><h3 className="font-semibold text-[#bde7c9]">Bank-linked by design</h3><p className="mt-3 text-sm leading-6 text-[#a9c8ba]">Payments move directly from your German bank account using regulated PSD2 partners and SEPA Instant.</p></div><div><h3 className="font-semibold text-[#bde7c9]">Protected at every step</h3><p className="mt-3 text-sm leading-6 text-[#a9c8ba]">Biometrics, tokenised access, encryption, and real-time fraud monitoring are built into every flow.</p></div><div><h3 className="font-semibold text-[#bde7c9]">Privacy by default</h3><p className="mt-3 text-sm leading-6 text-[#a9c8ba]">GDPR-conscious data protection with only the information needed to make payments work.</p></div><div><h3 className="font-semibold text-[#bde7c9]">Designed for Germany</h3><p className="mt-3 text-sm leading-6 text-[#a9c8ba]">Starting in Berlin, built around the habits and needs of local businesses and communities.</p></div></div></div></section>

      <section id="join" className="mx-auto px-6 py-20 lg:px-10 lg:py-28"><div className="relative overflow-hidden rounded-[2.5rem] bg-[#dcefa5] px-6 py-14 text-center sm:px-12"><Sparkles className="mx-auto size-7 text-[#0a9b68]" /><h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">Be first in line for a better way to pay.</h2><p className="mx-auto mt-5 max-w-md text-[#48685b]">PING PAY is opening its Berlin beta soon. Leave your email and we’ll keep you posted.</p>{submitted ? <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-[#0e2b22] px-5 py-4 font-semibold text-[#eef5e8]"><Check data-icon="inline-start" /> You’re on the list.</div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="email">Email address</label><input required id="email" type="email" placeholder="you@example.com" className="min-h-14 flex-1 rounded-full border border-[#0e2b22]/15 bg-[#f7f9f4] px-5 text-[#0e2b22] outline-none placeholder:text-[#799084] focus:ring-2 focus:ring-[#0a9b68]" /><button className="min-h-14 rounded-full bg-[#0e2b22] px-6 font-semibold text-[#eef5e8] transition-transform hover:-translate-y-0.5" type="submit">Join the beta <ArrowRight className="ml-1 inline" /></button></form>}</div></section>

      <footer className="mx-auto flex flex-col gap-6 border-t border-[#0e2b22]/10 px-6 py-8 text-sm text-[#6a8379] sm:flex-row sm:items-center sm:justify-between lg:px-10"><Logo /><div className="flex flex-wrap gap-5"><span>Berlin, Germany</span><a href="mailto:khavelemarline@gmail.com" className="hover:text-[#0a9b68]">Contact</a><span>© 2026 PING PAY</span></div></footer>
    </main>
  )
}
