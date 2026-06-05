"use client";

import { AlertTriangle } from "lucide-react";

export default function WarningBox() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-500 mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">
                ⚠️ IMPORTANT: This Offer is Time-Sensitive
              </h3>
              <p className="text-amber-700">
                OneManArmy is currently available at launch pricing. The special 
                one-time payment locks in your rate forever. This is a limited 
                launch window — once it closes, the price increases. Plus, my 
                exclusive $682 bonus package is only available for a limited 
                number of buyers through my link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
