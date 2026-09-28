import Link from 'next/link';
import { ArrowUpRight, BookOpen, GraduationCap, Phone, Sparkles } from 'lucide-react';

const schoolLevels = ['Day Care', 'Baby Class', 'Grade 1–7', 'Grade 8–12', 'Boarding Grade 5–12'];
const holidayServices = ['Reading and writing skills', 'GCE tuition', 'Night school', 'Answer exam questions', 'Outdoor adventures'];

export default function Services() {
  return <main>
    <section className="services-hero relative overflow-hidden px-5 pb-20 pt-52 text-white lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="eyebrow mb-6 text-amber-400">Our services</p>
        <h1 className="max-w-3xl font-display text-5xl leading-tight sm:text-6xl">Invest in your child’s <span className="text-amber-400">future.</span></h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/90">Fordsbed Trust School offers nurturing care, confident learning and practical support from early years through secondary education.</p>
      </div>
    </section>

    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow mb-5">Learning pathways</p>
          <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">A place to grow at every stage.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">Our school community welcomes learners from Day Care to Grade 12, with a boarding option available for learners in Grades 5–12.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {schoolLevels.map((level) => <div key={level} className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 font-semibold text-navy shadow-sm"><GraduationCap size={19} className="text-gold" />{level}</div>)}
          </div>
          <Link href="/admissions" className="mt-9 inline-flex items-center gap-2 rounded-full bg-plum px-6 py-4 font-bold text-white transition hover:bg-[#682943]">Enrol now <ArrowUpRight size={18} /></Link>
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm"><img src="/images/fordsbed.jpg" alt="Fordsbed Trust School services and learning levels" className="h-full w-full object-cover" /></div>
      </div>
    </section>

    <section className="bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-plum shadow-sm"><img src="/images/service1.jpg" alt="Fordsbed Trust School holiday tuition and learner activities" className="h-full w-full object-cover" /></div>
        <div>
          <p className="eyebrow mb-5 text-amber-400">Holiday tuition and enrichment</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Unlock your child’s full potential.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">Our holiday programme combines academic support with experiences that build confidence, creativity and practical skills.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {holidayServices.map((service) => <div key={service} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-4 font-semibold"><Sparkles size={17} className="shrink-0 text-amber-400" />{service}</div>)}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-5"><a href="tel:0779809913" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-4 font-bold text-navy"><Phone size={18} /> Register: 0779 809 913</a><span className="text-sm text-white/65">Farm 215A, Chambalumina, Lusaka West</span></div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-20 text-center"><div className="mx-auto max-w-3xl px-5 lg:px-8"><BookOpen className="mx-auto mb-5 text-gold" size={30} /><h2 className="font-display text-4xl text-navy">Ready to begin?</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">Contact our team to learn more about available places, tuition support and the right pathway for your child.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-2 font-bold text-navy">Talk to our team <ArrowUpRight size={17} className="text-gold" /></Link></div></section>
  </main>;
}
