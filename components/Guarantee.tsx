"use client";

import { Shield, Check } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-10 border-2 border-green-400 text-center shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-extrabold text-green-800 mb-4">
            Our 14-Day "Love It or Leave It" Guarantee
          </h2>
          
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Try OneManArmy risk-free for 14 days. Deploy your AI army, test the bots, 
            run a campaign. If you're not completely satisfied, just email us for a full refund. 
            No questions asked. No hoops to jump through. 
            <span className="font-bold text-green-700"> We'll even let you keep the bonuses as our gift to you.</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-green-700 mb-8">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" /> Full refund
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" /> No questions
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" /> Keep bonuses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
