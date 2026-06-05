"use client";

export default function WhatsIncluded() {
  const modules = [
    {
      num: "1",
      title: "Command Dashboard",
      desc: "One view of all three bots with live status indicators",
    },
    {
      num: "2",
      title: "Paperclip AI Commander",
      desc: "Your AI CEO that plans goals and designs roles",
    },
    {
      num: "3",
      title: "OpenClaw AI Field Operator",
      desc: "The doer that executes skills and runs workflows",
    },
    {
      num: "4",
      title: "Hermes AI Intelligence",
      desc: "Self-learning memory that writes its own skills",
    },
    {
      num: "5",
      title: "AI Agent Library",
      desc: "One-click hire pre-built specialists for any task",
    },
    {
      num: "6",
      title: "Multi-Platform Access",
      desc: "Run from web, Telegram, or Discord — wherever you work",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Here's Everything You Get Inside OneManArmy
          </h2>
          <p className="text-lg text-slate-600">
            A complete system designed to take you from solo operator to one-person powerhouse
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod) => (
            <div key={mod.num} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                {mod.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{mod.title}</h3>
                <p className="text-slate-600 text-sm">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
