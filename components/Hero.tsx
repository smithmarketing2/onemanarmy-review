"use client";

import { ArrowRight, Gift } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-2 mb-8">
          <Gift className="w-4 h-4 text-indigo-300" />
          <span className="text-sm font-medium text-indigo-200">
            EXCLUSIVE: $682 Bonus Pack — FREE
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          I Replaced 20 Hours of Manual Work With 2 Hours of Direction Using{" "}
          <span className="text-indigo-400">OneManArmy</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
          The world&apos;s first hosted AI army platform puts three best-in-class
          bots behind one solo operator. No Docker. No terminal. No API key
          hunting.
        </p>

        <p className="text-slate-400 mb-10 italic">
          But is it right for you? Here&apos;s my unfiltered take.
        </p>

        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
        >
          Get OneManArmy + My $682 Bonus Pack
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="mt-6 text-sm text-slate-400">
          I&apos;ve been running AI tools in my business for over a year. I know
          what works, what breaks, and what&apos;s hype.
        </p>
      </div>
    </section>
  );
}
