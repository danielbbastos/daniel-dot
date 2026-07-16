import type { Metadata } from "next";

export const metadata: Metadata = { title: "say hi" };

export default function Contact() {
  return (
    <section className="section contact">
      <div className="deco confetti c1" aria-hidden="true" />
      <div className="deco confetti c2" aria-hidden="true" />
      <div className="deco confetti c3" aria-hidden="true" />
      <div className="deco confetti c4" aria-hidden="true" />
      <div className="deco ring ring-contact" aria-hidden="true" />

      <h1 className="sec-title hl-coral tilt-l reveal">say hi ✌️</h1>
      <p className="contact-line reveal">
        The best way to reach me is by email — I read everything, even if
        I&apos;m slow sometimes.
      </p>
      <a className="cta big reveal" href="mailto:danielbastos.work@gmail.com">
        danielbastos.work@gmail.com
      </a>
      <p className="socials reveal">
        <a href="https://github.com/danielbbastos">GitHub</a>
        <a href="https://www.linkedin.com/in/daniel-bbastos/">LinkedIn</a>
      </p>
    </section>
  );
}
