import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  const { dark } = useContext(ThemeContext);


  return (
    <div className={`w-full px-6 md:px-20 py-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 ${dark ? "bg-black" : "bg-white"}`}>
      <div className="flex flex-col gap-4 md:gap-0">
        <Link
          to="home"
          offset={-110}
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className="cursor-pointer"
        >
          <div className={`text-2xl font-bold leading-tight ${dark ? "text-white" : "text-black"}`}>
            Eboreime<br />ThankGod.
          </div>
        </Link>
        <div className={`text-sm mt-4 md:hidden ${dark ? "text-gray-500" : "text-gray-400"}`}>
          © 2025 Eboreime ThankGod
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end gap-6">
        {/* Social Links */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {[
              { name: "Resume", link: "https://drive.google.com/file/d/1dEYa0ynrWga8hRoI7D5YLHw2TMEthwJV/view?usp=sharing" },
              { name: "GitHub", link: "https://github.com/Tk-brainCodes" },
              { name: "LinkedIn", link: "https://www.linkedin.com/in/thankgod-eboreime-34864a1b1/" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm uppercase tracking-widest hover:underline underline-offset-4 ${
                  dark ? "text-white" : "text-black"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

        {/* Copyright Desktop */}
        <div className={`hidden md:block text-sm ${dark ? "text-gray-500" : "text-gray-400"}`}>
          © 2025 Eboreime ThankGod
        </div>
      </div>
    </div>
  );
};

export default Footer;
