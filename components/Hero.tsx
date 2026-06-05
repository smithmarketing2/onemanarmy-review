"use client";

export default function Hero() {
  return (
    <section className="py-20 px-6 text-center max-w-4xl mx-auto">
      {/* Eyebrow */}
      <span className="inline-block bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
        🤖 AI-Powered Business Automation
      </span>

      {/* Headline with 3-part structure */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
        The AI Army Platform That Turns Solo Operators Into{" "}
        <span className="highlight">One-Person Powerhouses</span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal">
        Deploy three best-in-class AI bots from one dashboard. No Docker. No terminal. No API keys. Live in 5 minutes.
      </p>

      {/* Video Container */}
      <div className="max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 bg-black aspect-video flex items-center justify-center">
        <span className="text-slate-500 text-lg">🎬 VSL Video Loading...</span>
      </div>

      {/* CTA */}
      <a
        href="https://www.onemanarmy.net/special?aid=688027"
        target="_blank"
        rel="noopener sponsored"
        className="inline-block bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-12 py-5 rounded-xl font-extrabold text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/50"
      >
        Get OneManArmy + $682 Bonus Pack
      </a>
      <p className="mt-4 text-sm text-slate-500">
        ✓ Instant access ✓ 14-day guarantee ✓ One-time payment
      </p>
    </section>
  );
}
