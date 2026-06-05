"use client";

import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-5 py-2.5 mb-8 text-sm font-semibold">
          <Zap className="w-4 h-4" />
          AI-Powered Business Automation
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          The AI Army Platform That Turns Solo Operators Into{" "}
          <span className="text-indigo-600">One-Person Powerhouses</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
          Deploy three best-in-class AI bots from one dashboard. No Docker. No terminal. No API keys. Live in 5 minutes.
        </p>

        <p className="text-lg text-slate-500 mb-10 italic">
          The complete toolkit that eliminates the hard parts of scaling a solo business.
        </p>

        {/* CTA */}
        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg"
        >
          Get OneManArmy + $682 Bonus Pack
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="mt-6 text-sm text-slate-400">
          ✓ Instant access ✓ 14-day guarantee ✓ One-time payment
        </p>
      </div>
    </section>
  );
}
