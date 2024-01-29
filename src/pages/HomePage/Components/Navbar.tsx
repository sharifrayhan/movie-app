import { useState, useEffect } from "react";
import { navlinks } from "../../../Constants/Constants";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkIfScrolled = () => {
      if (window.screenY > 20) {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", checkIfScrolled);
    return () => {
    window.removeEventListener("scroll", checkIfScrolled);
    };
  }, []);

  return (
    <div>
      <nav
        className={`flex gap-3 py-3 w-76 ${
          scrolled ? "bg-blue-400" : "bg-slate-400"
        } items-center justify-center`}
      >
        <AlignJustify />
        <ul className="flex items-center gap-3">
          {navlinks.map((l) => (
            <li>{l}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
