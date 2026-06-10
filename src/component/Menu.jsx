import { Terminal, Menu, X } from "lucide-react";
import * as Icons from "lucide-react";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import { menuData, socialLinks } from "../data";
import ThemeToggle from "./ThemeToggle";

function SidebarContent({ expanded, closeMenu }) {
  return (
    <div className="h-full flex flex-col">
      <div
        className={`flex items-center p-4 border-b border-(--text-primary)/5
        ${expanded ? "justify-between" : "justify-center"}`}
      >
        <div className="gradient-border">
          <div className="box">
            <Terminal
              className="text-(--text-primary) bg-(--bg-primary)"
              size={30}
            />
          </div>
        </div>

        {expanded && (
          <button
            onClick={closeMenu}
            className="
            lg:hidden
      rounded-lg
      p-1.5
      text-(--text-secondary)
      hover:text-(--accent-primary)
      hover:bg-(--text-primary)/3
      transition-all
      "
          >
            <X size={18} />
          </button>
        )}
      </div>

      <ul className="px-3 py-6 flex-1">
        {menuData.map((menu) => {
          const Icon = Icons[menu.icon] ?? Icons.Circle;

          return (
            <NavLink key={menu.id} to={menu.path} onClick={closeMenu}>
              {({ isActive }) => (
                <li
                  className={`
                  relative
                  group
                  flex
                  items-center
                  rounded-xl
                  mb-1
                  transition-all
                  duration-300
                  cursor-pointer

                  ${expanded ? "gap-4 px-4 py-4" : "justify-center py-4"}

                  ${
                    isActive
                      ? "bg-(--text-primary)/4 border border-(--text-primary)/5"
                      : "text-(--text-secondary) hover:bg-(--text-primary)/3"
                  }
                `}
                >
                  {isActive && (
                    <div
                      className="
                      absolute left-0
                      h-8 w-0.5
                      rounded-full
                      bg-(--accent-primary)
                    "
                    />
                  )}

                  <Icon
                    size={20}
                    className={`
                    shrink-0 transition-colors

                    ${
                      isActive
                        ? "text-(--accent-primary)"
                        : "text-(--text-secondary) group-hover:text-(--accent-primary)"
                    }
                  `}
                  />

                  {!expanded && (
                    <div
                      className="
                      absolute left-16
                      px-3 py-2
                      rounded-lg
                      bg-(--bg-primary)
                      border border-(--text-primary)/5
                      backdrop-blur-md
                      text-sm
                      whitespace-nowrap
                      opacity-0
                      invisible
                      translate-x-2
                      transition-all
                      duration-200
                      pointer-events-none
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-x-0
                      z-[999]
                    "
                    >
                      {menu.name}
                    </div>
                  )}

                  <span
                    className={`
                    overflow-hidden
                    whitespace-nowrap
                    transition-all
                    duration-300

                    ${expanded ? "opacity-100" : "opacity-0 w-0"}
                  `}
                  >
                    {menu.name}
                  </span>
                </li>
              )}
            </NavLink>
          );
        })}
      </ul>

      <div
        className={`p-2 border-t border-(--text-primary)/5
        ${
          expanded ? "flex justify-around" : "flex flex-col items-center gap-6"
        }`}
      >
        <ThemeToggle />
      </div>

      {expanded && (
        <ul
          className="
    flex
    justify-center
    gap-4
    p-4
    border-t border-(--text-primary)/5
  "
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-(--text-primary)/5
            bg-(--bg-primary)
            text-(--text-secondary)
            transition-all
            duration-200
            hover:border-(--accent-primary)/20
            hover:text-(--accent-primary)
          "
                >
                  <Icon size={16} />
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function MenuBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <aside
        className={`
        hidden lg:flex
        fixed top-0 left-0 z-50
        h-screen
        flex-col
        
        overflow-visible
        bg-(--bg-primary)/90
        backdrop-blur-xl
        border-r border-(--text-primary)/5

        transition-all duration-300

        ${isExpanded ? "w-60" : "w-20"}
      `}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="
          absolute
          -right-4
          top-5
          flex
          items-center
          justify-center
          w-8 h-8
          rounded-full
          bg-(--bg-primary)
          border border-(--text-primary)/8
        "
        >
          {isExpanded ? <X size={16} /> : <Menu size={16} />}
        </button>

        <SidebarContent
          expanded={isExpanded}
          closeMenu={() => setIsExpanded(false)}
        />
      </aside>

      {/* MOBILE */}

      <button
        onClick={() => setIsExpanded(true)}
        className="
        lg:hidden
        fixed
        top-5
        left-5
        z-60
        p-3
        rounded-xl
        bg-(--bg-primary)/90
        border border-(--text-primary)/5
        backdrop-blur-xl
      "
      >
        <Menu size={20} />
      </button>

      {isExpanded && (
        <>
          <div
            className="
            lg:hidden
            fixed inset-0
            bg-(--bg-primary)/60
            backdrop-blur-sm
            z-70
          "
            onClick={() => setIsExpanded(false)}
          />

          <aside
            className="
            lg:hidden
            fixed
            left-0
            top-0
            z-80
            h-screen
            w-72

            bg-(--bg-primary)
            border-r border-(--text-primary)/5
          "
          >
            <SidebarContent
              expanded={true}
              closeMenu={() => setIsExpanded(false)}
            />
          </aside>
        </>
      )}
    </>
  );
}

export default MenuBar;
