"use client";

import { Shield, ArrowRight } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-green-50 border-2 border-green-400 rounded-3xl p-10 text-center shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            14-Day "Love It or Leave It" Guarantee
          </h2>
          
          <p className="text-lg text-green-700 mb-6 leading-relaxed">
            Try OneManArmy risk-free for 14 days. Deploy your AI army, test the bots, 
            run a campaign. If you're not completely satisfied, get a full refund — 
            no questions asked. 
            <span className="font-bold">The bonuses are yours to keep either way.</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-green-600 mb-8">
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Full refund
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> No questions
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Keep bonuses
            </span>
          </div>
          
          <a
            href="https://www.onemanarmy.net/special?aid=688027"
            target="_blank"
            rel="noopener sponsored"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl"
          >
            Start Risk-Free Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
