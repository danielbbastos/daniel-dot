import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "about" };

export default function About() {
  return (
    <section className="section about-section">
      <h2 className="sec-title hl-sun tilt-l reveal">who I am</h2>

      <div className="about-grid">
        <div className="portrait-wrap reveal">
          <div className="deco rect-tilt" aria-hidden="true" />
          <div className="portrait">
            <Image
              src="/images/daniel-portrait.jpg"
              alt="Daniel smiling above a valley of terraced rice fields"
              fill
              sizes="13rem"
              priority
            />
          </div>
          <div className="deco ring ring-portrait" aria-hidden="true" />
          <div className="deco circle circle-portrait" aria-hidden="true" />
        </div>
        <p className="reveal">
          I didn&apos;t start in frontend. My first job out of university
          was pure backend — PL/SQL in a warehouse, fixed hours, and a
          growing feeling that this wasn&apos;t it. So I quit, travelled
          for a while to figure out what actually drives me, and landed in
          a small Portuguese startup where everything clicked: React,
          interfaces, and — because the team was tiny — designing the very
          components I was building.{" "}
          <span className="squiggly">
            That mix of design and engineering became my signature.
            It&apos;s still how I work today.
          </span>
        </p>
      </div>

      <div className="deco ring ring-about" aria-hidden="true" />
      <div className="deco circle about-dot-a" aria-hidden="true" />
      <div className="deco circle about-dot-b" aria-hidden="true" />
      <div className="deco about-pill" aria-hidden="true" />

      <p className="about-b reveal">
        What I love most is turning a problem around and looking at it
        from angles nobody tried yet. When I walk through my city I catch myself studying gardens and
        public spaces, noticing how the beautiful paths are often the
        uncomfortable ones. I bring that same eye to software: interfaces
        should be fluid, practical and accessible for everyone — without
        giving up beauty.
      </p>

      <svg
        className="about-squiggle reveal"
        viewBox="0 0 200 20"
        aria-hidden="true"
      >
        <path
          d="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10 T125 10 T150 10 T175 10 T200 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <p className="about-c reveal">
        Away from the keyboard I&apos;m a certified permaculture designer
        with a garden of my own — right next to my granddad&apos;s
        traditional farm, so we watch each other&apos;s methods, compare
        harvests, and both get better. I play chess, make 80s-flavoured
        music on a synth, practice yoga, and run a tiny book club with my
        girlfriend and friends.{" "}
        <span className="squiggly">
          Nature figured most things out long before we did; I just try to
          borrow her patterns.
        </span>
      </p>

      <ul className="about-stickers reveal" aria-label="Things I love">
        <li className="sticker">🌱 permaculture</li>
        <li className="sticker">♟️ chess</li>
        <li className="sticker">🎹 80s synths</li>
        <li className="sticker">🧘 yoga</li>
        <li className="sticker">📚 book club</li>
      </ul>
    </section>
  );
}
