"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
  { href: "/now", label: "now" },
  { href: "/contact", label: "say hi" },
];

const THRESHOLD = 160;

type FanState = "top" | "open" | "closing";

export default function SiteNav() {
  const pathname = usePathname();
  const [fan, setFan] = useState<FanState>("top");
  const isOpen = useRef(false);
  const wasOpenOnce = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => {
      const shouldOpen = window.scrollY > THRESHOLD;
      if (shouldOpen === isOpen.current) return;
      isOpen.current = shouldOpen;
      clearTimeout(closeTimer.current);

      if (shouldOpen) {
        wasOpenOnce.current = true;
        setFan("open");
      } else if (wasOpenOnce.current) {
        // rise together and disappear behind the wordmark pill
        setFan("closing");
        closeTimer.current = setTimeout(() => setFan("top"), 400);
      } else {
        setFan("top");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const veiled = fan !== "top";
  const dockOpen = fan === "open";

  const linkClass = (href: string) => {
    const classes = [];
    if (href === "/contact") classes.push("nav-cta");
    if (pathname === href) classes.push("active");
    return classes.join(" ") || undefined;
  };

  return (
    <>
      {/* the bar itself scrolls away with the page; only the wordmark stays */}
      <header className={`site-header${veiled ? " veiled" : ""}`}>
        <Link className="wordmark" href="/">
          daniel<span className="dot">.</span>
        </Link>
        <nav className="top-nav">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* docked nav: fans down the left edge once you scroll */}
      <nav
        className={`dock-nav${dockOpen ? " open" : ""}${fan === "closing" ? " closing" : ""}`}
        aria-hidden={!dockOpen}
      >
        {LINKS.map(({ href, label }, i) => (
          <Link
            key={href}
            href={href}
            style={{ "--i": i } as CSSProperties}
            tabIndex={dockOpen ? undefined : -1}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
