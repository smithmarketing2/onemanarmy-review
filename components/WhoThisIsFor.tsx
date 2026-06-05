"use client";

import { Check, X } from "lucide-react";

export default function WhoThisIsFor() {
  const forYou = [
    "You're a solo operator or small team trying to scale without hiring",
    "You've tried self-hosting AI bots and spent more time fixing than using them",
    "You're paying $100+/month for disconnected AI tools that don't talk to each other",
    "You want AI workers that remember your business, not generic chat responses",
    "You value your time more than your money (this saves both)",
  ];

  const notForYou = [
    "You love tinkering with Docker and terminal commands (you don't need this)",
    "You're looking for a magic button that runs your business without you (bots need direction)",
    "You expect perfection on day one (there's a learning curve, like any powerful tool)",
    "You're not willing to spend 30 minutes learning the system",
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Is OneManArmy Right For You?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              This IS for you if:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-red-200">
            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              This is NOT for you if:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
