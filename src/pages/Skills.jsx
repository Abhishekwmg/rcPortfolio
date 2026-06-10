import * as Icons from "lucide-react";
import { skillsData } from "../data";

function Skills() {
  return (
    <section className="min-h-screen bg-(--bg-primary) px-8 py-24 text-(--text-primary) lg:px-20">
      <div className="mb-16 max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-(--accent-primary)">
          //2 Expertise
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
          Skills &
          <span className="bg-linear-to-r from-(--accent-primary) via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Stack
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-(--text-secondary)">
          Technologies, tooling and workflows I use to build modern, scalable
          frontend applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillsData.map((section) => {
          const Icon = Icons[section.icon];

          return (
            <div
              key={section.id}
              className="
            group
            rounded-2xl
            border border-(--text-primary)/30
            bg-(--bg-primary)/70
            p-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-(--bg-primary)/10
            hover:shadow-[0_0_20px_rgba(0,255,157,0.03)]
          "
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-(--text-primary)/5 bg-(--bg-primary)">
                {Icon && (
                  <Icon
                    size={22}
                    style={{
                      color: section.accent,
                    }}
                  />
                )}
              </div>

              <h2 className="mb-3 text-xl font-semibold">{section.heading}</h2>

              <p className="mb-5 text-sm leading-relaxed text-(--text-secondary)">
                {section.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                  rounded-lg
                  border border-(--text-primary)/5
                  bg-(--bg-primary)
                  px-3 py-2
                  text-sm
                  text-(--text-secondary)
                  transition-all
                  duration-200
                  hover:border-(--accent-primary)/20
                  hover:text-(--text-primary)
                "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
