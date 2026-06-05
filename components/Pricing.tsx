"use client";

import { ArrowRight, Lock } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Get Instant Access Today
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          Everything you need to deploy your AI army and start scaling your solo business
        </p>

        <div className="bg-slate-900 rounded-3xl p-10 text-white">
          <p className="text-slate-400 line-through text-xl mb-2">Regular Price: $297</p>
          <p className="text-5xl md:text-6xl font-extrabold text-white mb-2">$297</p>
          <p className="text-slate-400 mb-8">One-time payment. No monthly fees.</p>

          <a
            href="https://www.onemanarmy.net/special?aid=688027"
            target="_blank"
            rel="noopener sponsored"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg w-full justify-center"
          >
            Get OneManArmy Now
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Lock className="w-4 h-4" />
            Secure checkout powered by Stripe
          </div>
        </div>
      </div>
    </section>
  );
}
