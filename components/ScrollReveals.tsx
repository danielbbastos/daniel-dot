"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Adds .visible to .reveal elements as they enter the viewport.
   Re-runs on every route change so new pages get their reveals too. */
export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
