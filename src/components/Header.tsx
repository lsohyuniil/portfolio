import React, { useState, useEffect } from "react";

// 메뉴로 사용할 obj
const menus = [
  { key: "about", label: "ABOUT" },
  { key: "skill", label: "SKILL" },
  { key: "portfolio", label: "PORTFOLIO" },
  // { key: "todolist", label: "TODO" },
  { key: "contact", label: "CONTACT" },
];

const sections = ["main", ...menus.map((menu) => menu.key)];

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("main");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = activeSection;
      for (const key of sections) {
        const section = document.getElementById(key);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = key;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <header>
      <div className="content-inner">
        <div className="header-left">
          <h1 className="logo">
            <a href="#main">
              <img src="/logo.png" width={50} alt="sohyun 로고" />
              sohyun
            </a>
          </h1>
          <nav>
            <ul>
              {menus.map((menu) => (
                <li key={menu.key}>
                  <a
                    href={`#${menu.key}`}
                    className={activeSection === menu.key ? "active" : ""}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-right"></div>
      </div>
    </header>
  );
};

export default Nav;
