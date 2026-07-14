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
          <line
            x1="100"
            y1="0"
            x2="0"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="3 2.4"
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
          nature does it first, and better — a reminder from the Azores
        </figcaption>
      </figure>
    </section>
  );
}
