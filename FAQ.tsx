import { useState } from "react";
import { faqs } from "../data";
import { IconChevron } from "./Icons";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`glass overflow-hidden rounded-2xl transition ${
              isOpen ? "border-violet-500/30 shadow-lg shadow-violet-500/5" : ""
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-white">{item.q}</span>
              <IconChevron
                className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform ${
                  isOpen ? "rotate-180 text-violet-400" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
