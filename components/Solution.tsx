"use client";

export default function Solution() {
  const features = [
    {
      icon: "🧠",
      title: "AI CEO (Paperclip)",
      desc: "Plans your goals, designs roles, and proposes hires. You approve every decision.",
    },
    {
      icon: "⚡",
      title: "AI Field Operator (OpenClaw)",
      desc: "Executes skills, runs workflows, and takes action via web, Telegram, or Discord.",
    },
    {
      icon: "🤖",
      title: "AI Intelligence (Hermes)",
      desc: "Self-learning memory that writes its own skills and remembers your business.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
        What If You Had <span className="highlight">AI Do The Hard Work</span> For You?
      </h2>
      <p className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
        Imagine deploying three specialized AI workers that handle planning, execution, and memory — all from one dashboard.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h4 className="text-lg font-bold text-white mb-3">{f.title}</h4>
            <p className="text-slate-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
