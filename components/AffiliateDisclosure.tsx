"use client";

import { AlertTriangle } from "lucide-react";

export default function AffiliateDisclosure() {
  return (
    <section className="py-16 px-4 bg-amber-50 border-y border-amber-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-amber-900 mb-3">
              Affiliate Disclosure
            </h2>
            <p className="text-amber-800 leading-relaxed">
              This review contains affiliate links for OneManArmy. If you
              purchase through my link, I may earn a commission at no extra cost
              to you. I only recommend products I've personally tested or
              thoroughly researched. My bonus package is provided independently
              and is not officially affiliated with OneManArmy. Your support
              helps me create more in-depth reviews like this one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
