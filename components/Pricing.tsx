"use client";

export default function Pricing() {
  return (
    <section className="py-16 px-6 text-center" id="pricing">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        Get Instant Access Today
      </h2>
      <p className="text-slate-400 text-lg mb-10">
        Everything you need to deploy your AI army and start scaling
      </p>

      <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/15 border-2 border-indigo-500/40 rounded-3xl p-12 max-w-md mx-auto">
        <p className="text-slate-500 line-through text-xl mb-2">Regular Price: $497</p>
        <p className="text-6xl font-black highlight mb-2">$297</p>
        <p className="text-slate-400 mb-8">One-time payment. No monthly fees.</p>

        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="inline-block bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-12 py-5 rounded-xl font-extrabold text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/50"
        >
          Get OneManArmy Now
        </a>
        <p className="mt-4 text-sm text-slate-500 flex items-center justify-center gap-2">
          <span>🔒</span> Secure checkout powered by Stripe
        </p>
      </div>
    </section>
  );
}
