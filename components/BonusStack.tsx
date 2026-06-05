"use client";

import { Gift, BookOpen, Calendar, MessageSquare, Plug, BarChart3 } from "lucide-react";

export default function BonusStack() {
  const bonuses = [
    {
      icon: BookOpen,
      title: "AI Army Mastery Mini-Course",
      value: "$197",
      description:
        "5-module video training taking you from first login to first client. The complete 'how to drive your AI army' masterclass.",
      featured: true,
    },
    {
      icon: Calendar,
      title: "30-Day AI Army Launch Roadmap",
      value: "$147",
      description:
        "Day-by-day plan from signup to first client. No guesswork. No overwhelm. Just follow the schedule and check boxes.",
    },
    {
      icon: MessageSquare,
      title: "AI Agent Prompt Mastery Pack",
      value: "$97",
      description:
        "50+ copy-paste prompts for Paperclip, OpenClaw, and Hermes. Never wonder what to tell your AI workers.",
    },
    {
      icon: Plug,
      title: "CRM & Tool Integration Blueprint",
      value: "$97",
      description:
        "Connect your AI army to Zapier, Make, HubSpot, your email, your calendar. Step-by-step setup guides.",
    },
    {
      icon: BarChart3,
      title: "AI Worker ROI Tracker",
      value: "$67",
      description:
        "Track every task, every hour saved, every dollar earned. See your return on investment in real time.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4 text-indigo-300" />
            <span className="text-sm font-medium text-indigo-200">
              EXCLUSIVE BONUS PACKAGE
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Through My Link And Get The Solo Operator Accelerator Pack
          </h2>
          <p className="text-xl text-indigo-200">
            $682 in Real-World Implementation Bonuses, 100% Free
          </p>
        </div>

        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          I've been running AI tools in my business for over a year. I know
          exactly where the friction points are — and I've built these five
          bonuses specifically to eliminate them.
        </p>

        <div className="space-y-6">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border ${
                bonus.featured
                  ? "bg-indigo-600/20 border-indigo-400/40"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`rounded-xl p-3 shrink-0 ${
                    bonus.featured
                      ? "bg-indigo-500/30"
                      : "bg-white/10"
                  }`}
                >
                  <bonus.icon className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{bonus.title}</h3>
                    <span className="bg-indigo-500/30 text-indigo-200 text-sm font-semibold px-3 py-1 rounded-full">
                      {bonus.value} Value
                    </span>
                  </div>
                  <p className="text-slate-300">{bonus.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
