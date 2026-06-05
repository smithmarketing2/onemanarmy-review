"use client";

import { Bot, Brain, Zap } from "lucide-react";

export default function ProductOverview() {
  const bots = [
    {
      icon: Brain,
      name: "Paperclip",
      role: "AI CEO",
      description:
        "Plans goals, designs roles, proposes hires. You approve every decision.",
    },
    {
      icon: Zap,
      name: "OpenClaw",
      role: "Field Operator",
      description:
        "Executes skills, runs workflows, takes action via web, Telegram, or Discord.",
    },
    {
      icon: Bot,
      name: "Hermes",
      role: "Intelligence Specialist",
      description:
        "Self-learning memory that writes its own skills and remembers your business.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
          What Is OneManArmy?
        </h2>

        <p className="text-lg text-slate-600 mb-4 text-center max-w-2xl mx-auto">
          OneManArmy is a hosted command dashboard that deploys three powerful
          AI bots from one cloud platform:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {bots.map((bot) => (
            <div
              key={bot.name}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <bot.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {bot.name}
              </h3>
              <p className="text-sm font-medium text-indigo-600 mb-3">
                {bot.role}
              </p>
              <p className="text-slate-600">{bot.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
          <p className="text-lg font-semibold text-indigo-900 mb-2">
            The Promise
          </p>
          <p className="text-slate-700">
            Deploy your entire AI army in under 5 minutes with zero technical
            setup. No servers. No Docker. No weekend lost to configuration.
          </p>
          <p className="text-sm text-slate-500 mt-4 italic">
            The reality: I tested it. Here&apos;s what actually happened.
          </p>
        </div>
      </div>
    </section>
  );
}
