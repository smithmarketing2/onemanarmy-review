"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-24 px-4">
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

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
          I Replaced 20 Hours of Manual Work With{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            2 Hours of Direction
          </span>{" "}
          Using OneManArmy
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          The world&apos;s first hosted AI army platform puts three best-in-class
          bots behind one solo operator.
        </p>
        <p className="text-lg text-slate-400 mb-12 italic">
          No Docker. No terminal. No API key hunting. Here&apos;s my unfiltered take.
        </p>

        {/* CTA */}
        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-amber-500/25"
        >
          Get OneManArmy + My $682 Bonus Pack
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Trust */}
        <p className="mt-8 text-sm text-slate-500">
          I&apos;ve been running AI tools in my business for over a year. I know
          what works, what breaks, and what&apos;s hype.
        </p>
      </div>
    </section>
  );
}
