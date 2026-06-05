"use client";

export default function WhatsIncluded() {
  const modules = [
    { num: "1", title: "Command Dashboard", desc: "One view of all three bots with live status indicators" },
    { num: "2", title: "Paperclip AI Commander", desc: "Your AI CEO that plans goals and designs roles" },
    { num: "3", title: "OpenClaw AI Field Operator", desc: "The doer that executes skills and runs workflows" },
    { num: "4", title: "Hermes AI Intelligence", desc: "Self-learning memory that writes its own skills" },
    { num: "5", title: "AI Agent Library", desc: "One-click hire pre-built specialists for any task" },
    { num: "6", title: "Multi-Platform Access", desc: "Run from web, Telegram, or Discord — wherever you work" },
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
        Here's Everything You Get Inside <span className="highlight">OneManArmy</span>
      </h2>
      <p className="text-center text-slate-400 text-lg mb-12">
        A complete system designed to take you from solo operator to one-person powerhouse
      </p>

      <div className="space-y-4">
        {modules.map((mod) => (
          <div
            key={mod.num}
            className="bg-white/5 border border-white/10 rounded-xl px-8 py-6 flex items-center gap-5 transition-all hover:bg-indigo-500/10 hover:border-indigo-500/30"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-black text-lg shrink-0">
              {mod.num}
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">{mod.title}</h4>
              <p className="text-slate-400 text-sm">{mod.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
