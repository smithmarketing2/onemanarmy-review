"use client";

import { BookOpen, Calendar, MessageSquare, Plug, BarChart3 } from "lucide-react";

export default function BonusStack() {
  const bonuses = [
    {
      icon: BookOpen,
      title: "AI Army Mastery Mini-Course",
      value: "$197",
      desc: "5-module video training from first login to first client",
    },
    {
      icon: Calendar,
      title: "30-Day AI Army Launch Roadmap",
      value: "$147",
      desc: "Day-by-day plan from signup to first client",
    },
    {
      icon: MessageSquare,
      title: "AI Agent Prompt Mastery Pack",
      value: "$97",
      desc: "50+ copy-paste prompts for all three bots",
    },
    {
      icon: Plug,
      title: "CRM & Tool Integration Blueprint",
      value: "$97",
      desc: "Connect to Zapier, Make, HubSpot, email, calendar",
    },
    {
      icon: BarChart3,
      title: "AI Worker ROI Tracker",
      value: "$67",
      desc: "Track tasks, time saved, and prove your ROI",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Plus, Get These Fast-Action Bonuses
          </h2>
          <p className="text-lg text-slate-600">
            These bonuses alone are worth 10x your investment today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <bonus.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{bonus.title}</h3>
              <p className="text-indigo-600 font-bold text-sm mb-2">Value: {bonus.value}</p>
              <p className="text-slate-600 text-sm">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
