"use client";

export default function BonusStack() {
  const bonuses = [
    { title: "AI Army Mastery Mini-Course", value: "$197", desc: "5-module video training from first login to first client" },
    { title: "30-Day AI Army Launch Roadmap", value: "$147", desc: "Day-by-day plan from signup to first client" },
    { title: "AI Agent Prompt Mastery Pack", value: "$97", desc: "50+ copy-paste prompts for all three bots" },
    { title: "CRM & Tool Integration Blueprint", value: "$97", desc: "Connect to Zapier, Make, HubSpot, email, calendar" },
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
        Plus, Get These <span className="highlight">Fast-Action Bonuses</span>
      </h2>
      <p className="text-center text-slate-400 text-lg mb-12">
        These bonuses alone are worth 10x your investment today
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {bonuses.map((bonus, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-purple-500/15 to-indigo-500/10 border border-purple-500/30 rounded-2xl p-7 relative overflow-hidden"
          >
            <div className="absolute top-3 -right-8 bg-purple-500 text-white text-[0.65rem] font-black uppercase tracking-wider px-8 py-1 rotate-45">
              BONUS
            </div>
            <h4 className="text-white font-bold text-lg mb-2 pr-8">{bonus.title}</h4>
            <p className="text-indigo-300 text-sm font-semibold mb-3">Value: {bonus.value}</p>
            <p className="text-slate-400 text-sm">{bonus.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
