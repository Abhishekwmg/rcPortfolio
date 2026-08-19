import { ChevronRight, Download } from "lucide-react";
import foreBg from "../assets/forebg.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 lg:px-20 overflow-hidden">
      <div className="flex flex-col max-w-2xl z-10 ">
        <p className="text-(--accent-primary) text-sm tracking-widest uppercase mb-3">
          Hello, I'm
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold text-(--text-primary) leading-tight">
          Abhishek Kumar
        </h1>

        <p className="text-sm text-(--accent-primary) mt-2 mb-6">
          // Software Engineer
        </p>

        <div className="mt-4 leading-tight">
          <h3 className="text-3xl text-(--text-secondary)">
            I build fast, accessible
          </h3>

          <h3 className="text-3xl text-(--text-secondary)">
            web apps that{" "}
            <span
              className="bg-linear-to-r from-(--accent-primary) via-cyan-400 to-blue-500
      bg-clip-text text-transparent"
            >
              scale.
            </span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          <a
            className="
flex items-center justify-center gap-3

w-full lg:w-auto

px-6 py-3
rounded-lg

bg-(--accent-primary)
text-(--bg-primary)
font-semibold

hover:scale-105
transition-all duration-300
"
            href="./Abhishek_Kumar_Senior_Frontend_Engineer.pdf"
            target="_blank"
          >
            <Download className="inline" size={18} />
            Download Resume
          </a>

          <NavLink
            to={"/projects"}
            className="
group
flex items-center justify-center gap-3

w-full lg:w-auto

px-6 py-3
rounded-lg

border border-(--surface)
text-(--text-secondary)

hover:border-(--accent-primary)
hover:text-(--text-primary)

transition-all duration-300
"
          >
            View Projects
            <ChevronRight
              strokeWidth={1.75}
              className="group-hover:text-(--accent-primary)
              group-hover:translate-x-1
              transition-all duration-300"
            />
          </NavLink>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center relative">
        <div
          className="absolute w-125 h-125
          bg-(--accent-primary)/30 blur-[120px] rounded-full"
        />

        <img
          src={foreBg}
          alt="tech-stack visual"
          className="relative z-10 w-130
          hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}

export default Home;
