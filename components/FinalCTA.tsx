"use client";

import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready To Deploy Your AI Army?
        </h2>
        <p className="text-xl text-slate-300 mb-4">
          Join hundreds of solo operators who are using AI to scale without hiring
        </p>
        <p className="text-slate-400 mb-10">
          The only question is whether you're the one commanding it.
        </p>

        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg"
        >
          Get Started Now — $297
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="mt-6 text-sm text-slate-500">
          ⚡ Instant access delivered to your email
        </p>
      </div>
    </section>
  );
}
