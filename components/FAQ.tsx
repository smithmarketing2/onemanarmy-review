"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need technical skills to use OneManArmy?",
      answer: "No. The 3-question setup wizard deploys bots without terminal commands, Docker, or API key hunting. If you can use a web browser, you can use OneManArmy.",
    },
    {
      question: "What if I've never used AI bots before?",
      answer: "That's exactly why I built the AI Army Mastery Mini-Course. It walks you through mindset, setup, and first campaign step-by-step. You'll be comfortable within a week.",
    },
    {
      question: "How is this different from ChatGPT or Claude?",
      answer: "ChatGPT and Claude are general-purpose AI. OneManArmy deploys three specialized bots — a planner, an executor, and a memory system — that work together as a team. It's like the difference between a Swiss Army knife and a toolbox.",
    },
    {
      question: "Can I really deploy in 5 minutes?",
      answer: "Yes. The wizard asks 3 questions. Your bot is live immediately. First mission can run in the same session.",
    },
    {
      question: "What if the bots break?",
      answer: "Hermes is specifically designed for stability. But if anything goes wrong, the 14-day guarantee means you can get a full refund. Plus my bonuses include troubleshooting guides.",
    },
    {
      question: "How do I get the bonuses?",
      answer: "After you purchase OneManArmy through my link, forward your receipt to [YOUR_EMAIL]. I'll send you the bonus download links within 24 hours.",
    },
    {
      question: "Is this a monthly subscription?",
      answer: "No. OneManArmy is a one-time payment. My bonuses are also one-time deliverables with no recurring fees.",
    },
    {
      question: "What if it's not for me?",
      answer: "OneManArmy offers a 14-day money-back guarantee. Try it risk-free. If you don't love it, get a full refund. The bonuses are yours to keep either way.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-5 py-2.5 mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 ${
                openIndex === i
                  ? "border-indigo-300 shadow-lg shadow-indigo-100"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span className={`font-semibold text-lg pr-4 ${
                  openIndex === i ? "text-indigo-700" : "text-slate-900"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === i
                    ? "bg-indigo-600 text-white rotate-180"
                    : "bg-slate-100 text-slate-400"
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 text-slate-600 text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
