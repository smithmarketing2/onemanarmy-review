"use client";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-indigo-500/20 backdrop-blur-xl bg-[#0f0f1a]/95">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 no-underline">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-black text-lg">
            O
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm tracking-wide leading-tight">ONEMANARMY</span>
            <span className="text-indigo-300 text-[0.65rem] font-semibold tracking-widest uppercase">AI Business Automation</span>
          </div>
        </a>
        <a
          href="https://www.onemanarmy.net/special?aid=688027"
          target="_blank"
          rel="noopener sponsored"
          className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40"
        >
          Get Instant Access
        </a>
      </div>
    </nav>
  );
}
