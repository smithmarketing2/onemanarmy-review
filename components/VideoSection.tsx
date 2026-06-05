"use client";

import { Play, ArrowRight } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-16 px-4 bg-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          📹 Watch OneManArmy in Action
        </h2>
        
        {/* Video Placeholder */}
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto aspect-video flex items-center justify-center group cursor-pointer hover:shadow-3xl transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-white ml-1" />
            </div>
            <p className="text-white font-semibold text-lg">Click to Watch Demo</p>
            <p className="text-slate-300 text-sm mt-2">See how 3 AI bots replace a team of 50</p>
          </div>
        </div>
        
        <p className="text-slate-600 mt-6 italic">
          See how OneManArmy deploys a complete AI army in under 5 minutes — 
          agencies charge $15,000/month for this level of automation!
        </p>
        
        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-amber-500/25 mt-8"
        >
          Get Started Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
