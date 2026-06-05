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
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Why Most Solo Operators Never Scale
        </h2>
        <p className="text-lg text-slate-600 mb-12">
          You've seen the promises. You've bought the tools. But your results? Stuck.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">
            🛑 The Brutal Truth About Scaling Solo
          </h3>
          <ul className="space-y-4 text-left">
            {problems.map((problem, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <span className="text-red-500 font-bold mt-0.5">✗</span>
                {problem}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-slate-600 font-medium">
            Here's what nobody tells you: The problem isn't you. It's that you're doing everything the hard way.
          </p>
        </div>
      </div>
    </section>
  );
}
