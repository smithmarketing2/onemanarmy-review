"use client";

export default function Problem() {
  const problems = [
    "You spend hours on tasks that could be automated",
    "You try to scale but hiring costs eat your margins",
    "You buy AI tools but they break every other day",
    "You pay $100+/month for tools that don't talk to each other",
    "You re-explain your business to every new tool every week",
    "You're starting to think scaling solo is impossible",
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
        Why Most Solo Operators <span className="text-red-400">Never Scale</span>
      </h2>
      <p className="text-center text-slate-400 text-lg mb-12">
        You've seen the promises. You've bought the tools. But your results? Stuck.
      </p>

      <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-2xl p-10 mb-8">
        <h3 className="text-red-300 text-xl font-bold mb-4">🛑 The Brutal Truth About Scaling Solo</h3>
        <ul className="space-y-3">
          {problems.map((problem, i) => (
            <li key={i} className="text-slate-300 pl-8 relative">
              <span className="absolute left-0 text-red-500 font-bold">✗</span>
              {problem}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-lg text-slate-300">
        Here's what nobody tells you: <strong className="text-white">The problem isn't you. It's that you're doing everything the hard way.</strong>
      </p>
    </section>
  );
}
