'use client';

import Link from 'next/link';
import { ArrowUpRight, Loader2, MapPin, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus('');
    try {
      const response = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'Newsletter subscription', data: { email } }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setEmail('');
      setStatus('You are subscribed. Thank you!');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to subscribe right now.');
    } finally { setSending(false); }
  }

  return <footer className="bg-navy text-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_.7fr_.9fr_1.2fr] lg:px-8"><div><div className="mb-5 flex items-center gap-3"><img src="/images/logo.png" alt="Fordsbed Trust School logo" className="h-11 w-11 rounded-full object-contain" /><span className="font-display text-xl">Fordsbed Trust School</span></div><p className="max-w-xs text-sm leading-7 text-white/60">A warm, ambitious learning community preparing confident young people for a changing world.</p></div><div><h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-gold">Explore</h3><div className="space-y-3 text-sm text-white/70">{[['About us','/about'],['Services','/services'],['Admissions','/admissions'],['News & updates','/news'],['Contact','/contact']].map(([x,y])=><Link className="block transition hover:text-white" href={y} key={y}>{x}</Link>)}</div></div><div><h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-gold">Contact</h3><div className="space-y-4 text-sm text-white/70"><p className="flex gap-3"><Phone size={17} className="shrink-0 text-gold" />0779 809 913</p><p className="flex gap-3"><MapPin size={17} className="shrink-0 text-gold" />Lusaka, Zambia</p></div></div><div><h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-gold">Stay in the loop</h3><p className="mb-4 text-sm leading-6 text-white/60">Receive school updates and important parent notices.</p><form onSubmit={subscribe} className="flex rounded-full border border-white/20 p-1"><input aria-label="Email address" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/40" /><button type="submit" aria-label="Subscribe" disabled={sending} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-plum disabled:opacity-60">{sending ? <Loader2 size={17} className="animate-spin" /> : <ArrowUpRight size={17}/>}</button></form>{status && <p role="status" className="mt-3 text-xs text-white/75">{status}</p>}</div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2025 Fordsbed Trust School. All rights reserved.</span><span>Built for bright beginnings.</span></div></div></footer>;
}
