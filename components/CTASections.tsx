"use client";

import { ArrowRight, Zap } from "lucide-react";

export default function CTASections() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-5 py-2.5 mb-8">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-amber-300">
            Limited Time Launch Pricing
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Your AI Army Is{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Waiting
          </span>
        </h2>

        <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
          The only question is whether you're the one commanding it.
        </p>

        <p className="text-slate-400 mb-12">
          Join 1,000+ solo operators who've already deployed their AI army.
        </p>

        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-amber-500/25"
        >
          Deploy My AI Army Now
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
          <span>✓ One-time payment</span>
          <span>✓ 14-day guarantee</span>
          <span>✓ $682 bonuses included</span>
        </div>
      </div>
    </section>
  );
}
