import Link from "next/link";
import WaveSep from "@/components/WaveSep";

export default function Home() {
  return (
    <>
      <div className="deco-container" aria-hidden="true">
        <div className="deco blob blob-a" aria-hidden="true" />
        <div className="deco blob blob-b" aria-hidden="true" />
        <div className="deco ring ring-hero" aria-hidden="true" />
        <div className="deco circle circle-hero" aria-hidden="true" />
        <div className="deco pill-shape" aria-hidden="true" />
      </div>
      
      <section className="hero">
        <p className="sticker reveal">✦ open to remote work</p>
        <h1 className="reveal">
          I build interfaces where{" "}
          <span className="squiggly">code and design meet</span> — and where
          people feel at home.
        </h1>
        <p className="hero-sub reveal">
          Product engineer from Portugal 🇵🇹, somewhere between engineering,
          design and product. Currently looking for a small remote team with
          good energy — and taking a lot of inspiration from nature along the
          way.
        </p>
        <Link className="cta reveal" href="/work">
          see what I&apos;ve been up to →
        </Link>

        <svg className="hero-squiggle" viewBox="0 0 220 24" aria-hidden="true">
          <path
            d="M4 12 C 22 2, 40 22, 58 12 S 94 2, 112 12 148 22, 166 12 202 2, 216 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </section>

      <WaveSep />

      <section className="section skills-section">
        <div className="clouds" aria-hidden="true">
          <div className="clouds-inner">
            <span className="cloud cloud-1" />
            <span className="cloud cloud-2" />
            <span className="cloud cloud-3" />
          </div>
        </div>

        <h2 className="sec-title hl-mint tilt-r reveal">what I do</h2>

        <div className="cards">
          <div className="card card-1 reveal">
            <span className="card-emoji">🧩</span>
            <h3>Frontend engineering</h3>
            <p>
              React, TypeScript and Next.js are home. I&apos;ve also done my
              share of backend with Node.js — and survived PL/SQL — so I&apos;m
              comfortable across the whole stack of a product.
            </p>
          </div>
          <div className="card card-2 reveal">
            <span className="card-emoji">🎨</span>
            <h3>Design that thinks of people</h3>
            <p>
              I design what I build: components, layouts, whole interfaces. I
              put myself in the user&apos;s shoes first and make things that
              feel effortless to navigate — and still look good.
            </p>
          </div>
          <div className="card card-3 reveal">
            <span className="card-emoji">🌀</span>
            <h3>Seeing problems sideways</h3>
            <p>
              My favourite part of the job: understanding <em>why</em> something
              breaks, looking at it from every perspective, and finding the
              non-obvious fix that actually holds.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
