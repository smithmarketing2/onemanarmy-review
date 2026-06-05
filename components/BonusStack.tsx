"use client";

import { Gift, BookOpen, Calendar, MessageSquare, Plug, BarChart3, Check } from "lucide-react";

export default function BonusStack() {
  const bonuses = [
    {
      icon: BookOpen,
      title: "AI Army Mastery Mini-Course",
      value: "$197",
      description: "5-module video training taking you from first login to first client. The complete masterclass.",
      features: ["5 video modules", "Worksheets per module", "90 minutes total"],
      featured: true,
    },
    {
      icon: Calendar,
      title: "30-Day AI Army Launch Roadmap",
      value: "$147",
      description: "Day-by-day plan from signup to first client. No guesswork. Just follow the schedule.",
      features: ["Daily action items", "Weekly reviews", "Milestone tracking"],
    },
    {
      icon: MessageSquare,
      title: "AI Agent Prompt Mastery Pack",
      value: "$97",
      description: "50+ copy-paste prompts for Paperclip, OpenClaw, and Hermes. Never wonder what to say.",
      features: ["50+ prompts", "Organized by bot", "Customization guide"],
    },
    {
      icon: Plug,
      title: "CRM & Tool Integration Blueprint",
      value: "$97",
      description: "Connect your AI army to Zapier, Make, HubSpot, email, and calendar.",
      features: ["5 integrations", "Step-by-step setup", "Video walkthroughs"],
    },
    {
      icon: BarChart3,
      title: "AI Worker ROI Tracker",
      value: "$67",
      description: "Track every task, every hour saved, every dollar earned. See your ROI in real time.",
      features: ["Task log", "Weekly summary", "Monthly dashboard"],
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-5 py-2.5 mb-8">
            <Gift className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">
              EXCLUSIVE BONUS PACKAGE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Join Through My Link And Get{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              The Solo Operator Accelerator Pack
            </span>
          </h2>
          <p className="text-2xl text-indigo-200 font-semibold">
            $682 in Real-World Implementation Bonuses, 100% Free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 border ${
                bonus.featured
                  ? "bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-400/40 md:col-span-2 lg:col-span-1"
                  : "bg-white/5 border-white/10 backdrop-blur-sm"
              } hover:scale-[1.02] transition-transform`}
            >
              {bonus.featured && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED BONUS
                </div>
              )}

              <div className={`rounded-xl p-3 w-fit mb-4 ${
                bonus.featured ? "bg-amber-500/30" : "bg-white/10"
              }`}>
                <bonus.icon className="w-6 h-6 text-amber-300" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">{bonus.title}</h3>
                <span className="bg-white/10 text-amber-300 text-sm font-bold px-2 py-1 rounded-full">
                  {bonus.value}
                </span>
              </div>

              <p className="text-slate-300 text-sm mb-4">{bonus.description}</p>

              <ul className="space-y-2">
                {bonus.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
