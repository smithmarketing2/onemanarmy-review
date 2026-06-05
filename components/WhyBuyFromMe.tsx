"use client";

import { Gift, Clock, Star, Shield, Zap, Heart } from "lucide-react";

export default function WhyBuyFromMe() {
  const reasons = [
    {
      icon: Gift,
      title: "$682 in Exclusive Bonuses",
      description: "You won't find these bonuses anywhere else. I built them specifically for OneManArmy users.",
    },
    {
      icon: Clock,
      title: "24-Hour Delivery",
      description: "Forward your receipt and I'll send your bonuses within 24 hours. No waiting, no hassle.",
    },
    {
      icon: Star,
      title: "Real User Experience",
      description: "I've actually used OneManArmy. This isn't a rehashed review — it's my honest experience.",
    },
    {
      icon: Shield,
      title: "Risk-Free Guarantee",
      description: "OneManArmy offers a 14-day money-back guarantee. Try it risk-free. Keep the bonuses either way.",
    },
    {
      icon: Zap,
      title: "Implementation Focused",
      description: "My bonuses aren't fluff — they're tools that help you deploy and profit faster.",
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description: "Questions after purchase? I'm here to help. Just reply to any of my emails.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why Buy From{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Me?
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            Here's what you get when you join through my link
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="bg-indigo-500/30 rounded-xl p-3 w-fit mb-4">
                <reason.icon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-slate-400 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
