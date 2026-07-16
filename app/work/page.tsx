import type { Metadata } from "next";

export const metadata: Metadata = { title: "work" };

export default function Work() {
  return (
    <section className="section work-section">
      <h1 className="sec-title hl-sky tilt-l reveal">where I&apos;ve been</h1>

      <div className="timeline">
        <article className="entry reveal">
          <p className="entry-when">Now</p>
          <h2>Building my own things</h2>
          <p>
            A soap-making app for iOS, this site, and an educational page
            about eucalyptus monoculture and the wildfires it fuels in
            Portugal — because nature belongs to everyone. More on all of
            them just below.
          </p>
        </article>
        <article className="entry reveal">
          <p className="entry-when">The reset</p>
          <h2>Permaculture &amp; grounding</h2>
          <p>
            After a mass layoff and some personal storms, I stepped back to
            rest and reconnect with nature. I took a permaculture design
            course, got certified, volunteered — and came back to code with
            fresh eyes and more energy than I&apos;d had in years.
          </p>
        </article>
        <article className="entry reveal">
          <p className="entry-when">US company</p>
          <h2>Frontend developer</h2>
          <p>
            Built websites for the group&apos;s portfolio of brands with
            React, Shopify and server-side rendering. The best team
            I&apos;ve worked with — open-minded, proactive, funny people
            where everyone brought ideas to the table. It felt like home
            until the company went under.
          </p>
        </article>
        <article className="entry reveal">
          <p className="entry-when">PT startup</p>
          <h2>Frontend developer &amp; co-designer</h2>
          <p>
            Joined a small team, fell in love with React, and doubled as
            the designer — shaping components, layouts and the
            product&apos;s visual language. When we grew enough to hire a
            real designer, I kept working shoulder to shoulder with them on
            every design decision until the day I left.
          </p>
        </article>
        <article className="entry reveal">
          <p className="entry-when">Where it started</p>
          <h2>Backend &amp; freelance roots</h2>
          <p>
            Freelance sites with Shopify and Ruby on Rails while still
            studying, then a first job doing PL/SQL and Java for an Oracle
            retail backend. It taught me exactly what I <em>didn&apos;t</em>{" "}
            want — which turned out to be one of the most useful lessons of
            all.
          </p>
        </article>
      </div>

      <h2 className="sec-title hl-mint tilt-r reveal projects-title">
        what I&apos;m building
      </h2>

      <div className="cards projects">
        <a
          className="card card-1 reveal"
          href="https://github.com/danielbbastos/soapwiz"
          target="_blank"
          rel="noreferrer"
        >
          <span className="card-emoji" aria-hidden="true">
            🧼
          </span>
          <h3>Soapwiz</h3>
          <p>
            A soap-making app for iOS. I surveyed the whole market, found
            every app lacking in interface and features, and built the one
            I wished existed. Publishing soon.
          </p>
          <span className="card-link">peek at the code →</span>
        </a>
        <a
          className="card card-2 reveal"
          href="https://floresta-autoctone.pt"
          target="_blank"
          rel="noreferrer"
        >
          <span className="card-emoji" aria-hidden="true">
            🌲
          </span>
          <h3>Autóctone</h3>
          <p>
            A scrollytelling site about Portugal&apos;s wildfire crisis:
            how native forests resist fire, how eucalyptus took over the
            landscape — and who profits.
          </p>
          <span className="card-link">floresta-autoctone.pt →</span>
        </a>
      </div>
    </section>
  );
}
