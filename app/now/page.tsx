import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "now" };

export default function Now() {
  return (
    <section className="section now-section">
      <h2 className="sec-title hl-lilac tilt-r reveal">right now</h2>

      <div className="now-grid">
        <svg
          className="diag"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 100 C 10 90, 16 98, 26 88 S 38 72, 46 62 S 56 54, 64 44 S 74 28, 82 20 S 92 10, 99 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="3 2.4"
          />
        </svg>
        {/* arrowhead drawn separately so it doesn't stretch with the grid */}
        <svg className="diag-arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M10 5 H19 V14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="now-a reveal">
          I&apos;m looking for my next role:{" "}
          <strong>remote, at a small company with good energy</strong> —
          the kind of team where people have passions outside work and love
          sharing them, and where I can do a bit of everything across
          frontend, design and product. I love travelling and meeting
          people around the world, so I&apos;m happily looking beyond
          Portugal&apos;s borders.
        </p>
        <p className="now-b reveal">
          Meanwhile I&apos;m finishing the soap-making app, learning to
          synthesize music on my iPad, slowly getting better at chess,
          picking up a racket sport, and tending the garden. The long-term
          dream? A farm designed with permaculture, shared with good
          friends — a small community that inspires people to grow their
          own.
        </p>
      </div>

      <figure className="nature-photo reveal">
        <Image
          src="/images/coast-flower.jpg"
          alt="A red canna flower over a cliffside Atlantic coastline in the Azores"
          width={1186}
          height={1600}
        />
        <figcaption>
          Nature does it first, and better — a reminder from the Azores
        </figcaption>
      </figure>
    </section>
  );
}
