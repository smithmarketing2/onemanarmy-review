"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-20 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-10">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-amber-300">
            EXCLUSIVE: $682 Bonus Pack — FREE
          </span>
        </div>

        {/* 3-PART HEADLINE — Chad Nicely Doctrine */}
        {/* PART 1: Pattern Interrupt — Short & Bold */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Humans Are the Bottleneck.
          </span>
        </h1>

        {/* PART 2: Mechanism Reveal — Clear & Specific */}
        <p className="text-2xl md:text-3xl text-white font-bold mb-4 max-w-3xl mx-auto leading-snug">
          OneManArmy deploys 3 AI bots that work 24/7 from one dashboard — no Docker, no terminal, no API keys.
        </p>

        {/* PART 3: Outcome + Identity Shift — Reader Focused */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          So you can run an operation that used to need a team of 50, alone, in under 5 minutes.
        </p>

        {/* Supporting Proof Line */}
        <p className="text-lg text-slate-400 mb-10 italic">
          Built. Deployed. Working while I sleep. Here&apos;s my unfiltered review.
        </p>

        {/* CTA Block */}
        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-amber-500/25"
        >
          Get OneManArmy + My $682 Bonus Pack
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Micro Reassurance */}
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
          <span>✓ One-time payment</span>
          <span>✓ 14-day guarantee</span>
          <span>✓ $682 bonuses included</span>
        </div>
      </div>
    </section>
  );
}
