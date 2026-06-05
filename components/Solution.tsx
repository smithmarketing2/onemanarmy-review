"use client";

import { Bot, Brain, Zap, Check } from "lucide-react";

export default function Solution() {
  const features = [
    {
      icon: Brain,
      title: "AI CEO (Paperclip)",
      description: "Plans your goals, designs roles, and proposes hires. You approve every decision.",
    },
    {
      icon: Zap,
      title: "AI Field Operator (OpenClaw)",
      description: "Executes skills, runs workflows, and takes action via web, Telegram, or Discord.",
    },
    {
      icon: Bot,
      title: "AI Intelligence (Hermes)",
      description: "Self-learning memory that writes its own skills and remembers your business.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          What If You Had an AI Army Do The Hard Work?
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Imagine deploying three specialized AI workers that handle planning, execution, and memory — all from one dashboard.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">The Promise</h3>
          <p className="text-indigo-700">
            Deploy your entire AI army in under 5 minutes with zero technical setup. No servers. No Docker. No weekend lost to configuration.
          </p>
        </div>
      </div>
    </section>
  );
}
