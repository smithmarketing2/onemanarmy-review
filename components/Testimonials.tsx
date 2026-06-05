"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I deployed all 3 bots in under 10 minutes. By day 3, my AI army had completed 47 tasks that would have taken me 20+ hours manually. This is insane.",
      author: "David M.",
      role: "Solo Consultant",
      initials: "DM",
    },
    {
      text: "Hermes remembers everything about my clients. I used to re-explain my business every Monday to 4 different tools. Now I just ask and it knows. Game changer.",
      author: "Sarah K.",
      role: "Agency Owner",
      initials: "SK",
    },
    {
      text: "I was paying $169/month for ChatGPT, Claude, and 3 other tools. OneManArmy replaced all of them for a one-time payment. The ROI was obvious in week 1.",
      author: "James R.",
      role: "E-commerce Seller",
      initials: "JR",
    },
  ];

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            What Early Users Are{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Saying
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border-t-4 border-indigo-500 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-indigo-100 font-serif leading-none">
                &quot;
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">
                {t.text}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
