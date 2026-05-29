const tiers = [
  ["Starter", "10%", "For first partners and micro creators."],
  ["Research", "15%", "For repeat referrers with consistent monthly orders."],
  ["Elite", "20%", "For top affiliates after manual compliance review."],
];

export default function AffiliatePage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section-shell">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
          Affiliate program
        </p>
        <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight text-slate-950">
          A tiered partner program built for compliant referral growth
        </h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tiers.map(([name, rate, copy]) => (
            <article key={name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-black text-slate-950">{name}</p>
              <p className="mt-5 text-5xl font-black text-cyan-600">{rate}</p>
              <p className="mt-4 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg bg-slate-950 p-6 text-white">
          <p className="text-xl font-black">Program notes</p>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Affiliate language should be reviewed before launch. Partners should avoid medical
            claims, dosage advice, treatment claims, or human-use positioning.
          </p>
        </div>
      </div>
    </section>
  );
}
