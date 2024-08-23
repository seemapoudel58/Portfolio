import React, { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const menuItems = [
    { href: "#2", text: "SKILLS" },
    { href: "#3", text: "QUALIFICATION" },
    { href: "#4", text: "CONNECT" },
  ];

  const renderItems = (item, index) => (
    <a key={index} href={item.href} >
      {item.text}
    </a>
  );

  return (
    <section className="bg-black text-white fixed top-0 left-0 right-0 ">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-semibold text-white">Seema</h1>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>

        <div className="hidden md:flex space-x-9">
          {menuItems.map(renderItems)}
        </div>

        {menuOpened && (
          <nav className="fixed top-0 right-0 w-1/2 h-screen bg-white text-black flex flex-col p-4 shadow-sm rounded-lg md:hidden ">
            <div className="flex justify-end mb-4">
              <BiX className="cursor-pointer text-black" onClick={() => setMenuOpened(false)} size={30} />
            </div>
            <div className="flex flex-col space-y-9">
              {menuItems.map(renderItems)}
            </div>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Navbar;
