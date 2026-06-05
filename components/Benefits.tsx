"use client";

import { Clock, Layers, Wallet, Brain, Globe } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Deploy AI Workers in 5 Minutes, Not 5 Hours",
      description:
        "Stop wrestling with installations. The 3-question wizard gets you from signup to running bots faster than making coffee.",
    },
    {
      icon: Layers,
      title: "Three Best-in-Class Bots, One Dashboard",
      description:
        "Paperclip for planning, OpenClaw for execution, Hermes for memory. No other platform offers all three. That's the moat.",
    },
    {
      icon: Wallet,
      title: "Stop Paying for 4+ Disconnected Tools",
      description:
        "ChatGPT Plus. Claude Pro. Writing tools. Workflow tools. OneManArmy replaces the stack — for a one-time payment, not monthly subscriptions.",
    },
    {
      icon: Brain,
      title: "Your AI Workers Actually Remember",
      description:
        "Hermes stores your business context, client details, and campaign history. No more re-explaining your business every Monday.",
    },
    {
      icon: Globe,
      title: "Run From Anywhere",
      description:
        "Web dashboard for deep work. Telegram/Discord for quick commands. Your army works where you work.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          What OneManArmy Actually Does For Your Business
        </h2>

        <div className="space-y-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-6 bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="bg-indigo-100 rounded-xl p-3 shrink-0">
                <benefit.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
