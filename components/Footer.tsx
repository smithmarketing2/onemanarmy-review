"use client";

export default function Footer() {
  return (
    <footer className="text-center py-10 px-6 border-t border-white/10 text-slate-500 text-sm">
      <p className="mb-2">© 2026 [Your Name]. All rights reserved.</p>
      <p className="mb-4 text-xs">
        This is an independent review and is not officially affiliated with OneManArmy.
      </p>
      <div className="bg-white/5 rounded-xl p-6 max-w-2xl mx-auto text-xs text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Affiliate Disclosure</p>
        <p>
          This review contains affiliate links. If you purchase through my link, I may earn a commission at no extra cost to you. I only recommend products I've personally tested or thoroughly researched.
        </p>
      </div>
    </footer>
  );
}
