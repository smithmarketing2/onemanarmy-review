"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-950 text-slate-400 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="mb-4 text-sm">
          © 2026 [Your Name]. All rights reserved.
        </p>
        <p className="text-xs mb-6">
          This is an independent review and is not officially affiliated with OneManArmy.
        </p>
        <div className="bg-slate-900 rounded-xl p-6 text-xs">
          <p className="mb-2 font-semibold text-slate-300">Affiliate Disclosure</p>
          <p>
            This review contains affiliate links. If you purchase through my link, I may earn a commission at no extra cost to you. I only recommend products I've personally tested or thoroughly researched.
          </p>
        </div>
      </div>
    </footer>
  );
}
