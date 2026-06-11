import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { projectsData } from "../data";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  return (
    <div className="min-h-screen bg-(--bg-primary) px-8 py-24 text-(--text-primary) lg:px-20">
      <div className="mb-16 max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-(--accent-primary)">
          //1 Crafted with code
        </p>

        <h1 className="mb-6 text-(--text-primary) text-5xl font-bold leading-tight lg:text-6xl">
          Featured
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
            Projects
          </span>
        </h1>

        <p
          className="
      max-w-2xl
      text-lg
      leading-relaxed
      text-(--text-secondary)
    "
        >
          Building responsive, accessible, and performant web experiences with
          modern technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((d) => {
          return (
            <div
              key={d.id}
              className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border border-(--text-primary)/10
            bg-(--bg-primary)/70
            backdrop-blur-sm
            transition-all
            duration-300
            overflow-hidden
            hover:-translate-y-1
            hover:border-(--text-primary)/8
            hover:shadow-[0_0_20px_rgba(0,255,157,0.04)]
          "
            >
              <div className="overflow-hidden border-b border-(--text-primary)/5">
                <img
                  src={d.image}
                  alt={d.title}
                  className="
                h-45
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-[1.03]
              "
                />
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-(--text-primary)">
                    {d.title}
                  </h2>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-(--text-secondary)">
                  {d.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {d.techStack.map((stack) => {
                    const Icon = FaIcons[stack] || SiIcons[stack];

                    return Icon ? (
                      <div
                        key={stack}
                        className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border border-(--text-primary)/5
                      bg-(--bg-primary)
                      text-(--text-secondary)
                      transition-all
                      duration-200
                      hover:border-(--accent-primary)/20
                      hover:text-(--accent-primary)
                    "
                      >
                        <Icon className="text-base" />
                      </div>
                    ) : null;
                  })}
                </div>

                <div
                  className="
                flex
                items-center
                gap-5
                border-t
                border-(--text-primary)/5
                pt-4
              "
                >
                  <NavLink
                    to={d.liveUrl}
                    target="_blank"
                    className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-(--accent-primary)
                  transition-opacity
                  hover:opacity-80
                "
                  >
                    Live Demo
                    <MdArrowOutward className="text-(--accent-primary)" />
                  </NavLink>

                  <NavLink
                    to={d.githubUrl}
                    target="_blank"
                    className="
                  text-sm
                  text-(--text-primary)
                  transition-colors
                  hover:text-(--text-primary)
                "
                  >
                    GitHub
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
