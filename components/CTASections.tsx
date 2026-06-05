"use client";

import { ArrowRight } from "lucide-react";

export default function CTASections() {
  const ctas = [
    {
      headline: "Ready to deploy your AI army?",
      text: "Get OneManArmy plus my complete Solo Operator Accelerator Pack. 5 bonuses. $682 value. Yours free.",
      button: "Claim Your Bonus Pack",
    },
    {
      headline: "Don't leave this page empty-handed.",
      text: "OneManArmy + 5 implementation bonuses. One-time payment. 14-day guarantee.",
      button: "Get Started Now",
    },
    {
      headline: "Your AI army is waiting.",
      text: "The only question is whether you're the one commanding it.",
      button: "Deploy My AI Army",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-16">
        {ctas.map((cta, i) => (
          <div key={i} className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {cta.headline}
            </h3>
            <p className="text-lg text-slate-600 mb-8">{cta.text}</p>
            <a
              href="https://www.onemanarmy.net/special?aid=688027"
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
            >
              {cta.button}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
