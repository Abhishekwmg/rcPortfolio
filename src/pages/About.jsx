import * as Icons from "lucide-react";
import { aboutData } from "../data";

function About() {
  return (
    <section className="min-h-screen bg-(--bg-primary) px-8 py-24 text-white lg:px-20">
      <div>
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-(--accent-primary)">
            //4 {aboutData.badge}
          </p>

          <h1 className="mb-6 text-(--text-primary) text-5xl font-bold leading-tight lg:text-6xl">
            About
            <span className="bg-linear-to-r from-(--accent-primary) via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Me
            </span>
          </h1>

          <p className="mb-10 max-w-3xl text-2xl leading-relaxed text-(--text-secondary)">
            {aboutData.intro}
          </p>

          <div className="flex flex-wrap gap-10">
            {aboutData.stats.map((stat) => (
              <div key={stat.id}>
                <h2 className="mb-2 text-4xl font-bold text-(--accent-primary)">
                  {stat.value}
                </h2>

                <p className="text-(--text-muted)">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 mb-16 grid gap-6 md:grid-cols-3">
            {aboutData.highlights.map((item) => {
              const Icon = Icons[item.icon];

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-(--text-primary)/5 bg-(--bg-primary)/60 p-6"
                >
                  {Icon && <Icon className="mb-5 text-(--accent-primary)" />}

                  <h3 className="mb-3 text-lg text-(--text-primary) font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-(--text-secondary)">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mb-16 space-y-8">
            {aboutData.description.map((para) => (
              <p
                key={para}
                className="text-lg leading-loose text-(--text-secondary)"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
