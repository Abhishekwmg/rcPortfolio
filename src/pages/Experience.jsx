import * as Icons from "lucide-react";
import { experienceData } from "../data";

function Experience() {
  return (
    <section
      className="
      min-h-screen
      bg-(--bg-primary)
      text-(--text-primary)
      px-8
      lg:px-20
      py-24
    "
    >
      <div className="max-w-3xl mb-24">
        <p
          className="
          uppercase
          tracking-[0.25em]
          text-(--accent-primary)
          text-sm
          mb-4
        "
        >
          //3 Career
        </p>

        <h1
          className="
          text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          mb-6
        "
        >
          Work
          <span
            className="
            bg-linear-to-r
            from-(--accent-primary)
            via-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
          "
          >
            {" "}
            Experience
          </span>
        </h1>

        <p
          className="
          text-(--text-secondary)
          text-lg
          leading-relaxed
        "
        >
          Professional experience, engineering work, frontend architecture and
          product development.
        </p>
      </div>

      <div className="relative">
        <div
          className="
          hidden
          lg:block
          absolute
          left-[22px]
          top-0
          bottom-0
          w-px
          bg-(--text-primary)/[0.08]
        "
        />

        <div className="space-y-20">
          {experienceData.map((exp) => {
            const Icon = Icons[exp.icon];

            return (
              <div
                key={exp.id}
                className="
                grid
                grid-cols-1
                lg:grid-cols-[50px_1fr_260px]
                gap-8
                items-start
              "
              >
                <div
                  className="
                  hidden
                  lg:flex
                  items-start
                  justify-center
                  relative
                "
                >
                  <div
                    className="
                    w-11
                    h-11
                    rounded-full
                    bg-(--bg-primary)
                    border border-(--accent-primary)/20
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_20px_rgba(0,255,157,0.08)]
                    z-10
                  "
                  >
                    {Icon && (
                      <Icon size={18} className="text-(--accent-primary)" />
                    )}
                  </div>
                </div>

                <div
                  className="
                  rounded-3xl
                  border border-(--text-primary)/[0.06]
                  bg-(--bg-primary)/70
                  backdrop-blur-sm
                  p-8
                  transition-all duration-300
                  hover:border-(--accent-primary)/15
                  hover:-translate-y-1
                "
                >
                  <div
                    className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-6
                    mb-8
                  "
                  >
                    <div>
                      <h2
                        className="
                        text-2xl
                        font-semibold
                        mb-2
                      "
                      >
                        {exp.role}
                      </h2>

                      <p
                        className="
                        text-(--accent-primary)
                        font-medium
                      "
                      >
                        {exp.company}
                      </p>
                    </div>

                    <div
                      className="
                      px-4
                      py-2
                      rounded-xl
                      border border-(--text-primary)/5
                      bg-(--bg-primary)
                      text-sm
                      text-(--text-secondary)
                      w-fit
                    "
                    >
                      {exp.employmentType}
                    </div>
                  </div>

                  <p
                    className="
                    text-(--text-secondary)
                    leading-relaxed
                    mb-8
                  "
                  >
                    {exp.description}
                  </p>

                  <div
                    className="
                    space-y-4
                    mb-8
                  "
                  >
                    {exp.achievements.map((item) => (
                      <div
                        key={item}
                        className="
                        flex
                        items-start
                        gap-4
                      "
                      >
                        <div
                          className="
                          mt-2
                          w-2
                          h-2
                          rounded-full
                          bg-(--accent-primary)
                          shrink-0
                        "
                        />

                        <p
                          className="
                          text-(--text-secondary)
                          leading-relaxed
                        "
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-3
                  "
                  >
                    {exp.tech?.map((tech) => (
                      <div
                        key={tech}
                        className="
                        px-4
                        py-2
                        rounded-xl
                        bg-(--bg-primary)
                        border border-(--text-primary)/5
                        text-sm
                        text-(--text-secondary)
                      "
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="
                  text-(--text-secondary)
                  lg:pt-8
                  space-y-3
                "
                >
                  <p className="font-medium text-(--text-primary)">
                    {exp.duration}
                  </p>

                  <p>{exp.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
