"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900 text-slate-400">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4">
          © 2026 [Your Name]. All rights reserved.
        </p>
        <p className="text-sm mb-6">
          This is an independent review and is not officially affiliated with OneManArmy.
        </p>
        <div className="bg-slate-800 rounded-xl p-6 max-w-2xl mx-auto">
          <h4 className="font-semibold text-slate-300 mb-2">Disclaimer</h4>
          <p className="text-sm">
            The results discussed on this page are my own and are not typical.
            Your results will vary based on your effort, experience, and market
            conditions. The bonus values listed represent what I would charge if
            selling these products separately, not guaranteed market prices.
            Always do your own research before making purchasing decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
