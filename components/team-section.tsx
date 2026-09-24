import { Users } from 'lucide-react';
import { team } from '../data/team';

export function TeamSection() {
  return <section className="bg-cream py-24 text-navy"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-12 max-w-2xl"><p className="eyebrow mb-5">The people behind the promise</p><h2 className="font-display text-4xl leading-tight sm:text-5xl">Meet the team caring for <span className="text-gold">every learner.</span></h2><p className="mt-5 text-sm leading-7 text-slate-600">Our leadership team brings together experience, care and a shared commitment to helping every child flourish.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{team.map((member) => <article key={member.role} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"><div className="relative aspect-square bg-slate-100"><img src={member.image} alt={member.name} className="h-full w-full object-cover" /></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-gold">{member.role}</p><h3 className="mt-2 font-display text-xl text-navy">{member.name}</h3></div></article>)}</div></div></section>;
}
