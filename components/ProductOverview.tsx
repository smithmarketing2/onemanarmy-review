"use client";

import { Bot, Brain, Zap } from "lucide-react";

export default function ProductOverview() {
  const bots = [
    {
      icon: Brain,
      name: "Paperclip",
      role: "AI CEO",
      description: "Plans goals, designs roles, proposes hires. You approve every decision.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Zap,
      name: "OpenClaw",
      role: "Field Operator",
      description: "Executes skills, runs workflows, takes action via web, Telegram, or Discord.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Bot,
      name: "Hermes",
      role: "Intelligence Specialist",
      description: "Self-learning memory that writes its own skills and remembers your business.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            What Is{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              OneManArmy?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A hosted command dashboard that deploys three powerful AI bots from one cloud platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bots.map((bot) => (
            <div
              key={bot.name}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${bot.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className={`inline-flex rounded-2xl p-4 mb-6 bg-gradient-to-br ${bot.color}`}>
                <bot.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{bot.name}</h3>
              <p className={`text-sm font-bold mb-4 bg-gradient-to-r ${bot.color} bg-clip-text text-transparent`}>
                {bot.role}
              </p>
              <p className="text-slate-600 leading-relaxed">{bot.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-10 text-center border border-indigo-100">
          <p className="text-xl font-bold text-indigo-900 mb-3">
            The Promise
          </p>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Deploy your entire AI army in under 5 minutes with zero technical setup. No servers. No Docker. No weekend lost to configuration.
          </p>
        </div>
      </div>
    </section>
  );
}
