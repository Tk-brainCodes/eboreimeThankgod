import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className='footer'>
      <Link
        to='home'
        offset={-110}
        spy={true}
        smooth={true}
        duration={500}
        activeClass='active'
      >
        <div className='name' style={{ color: `${dark ? "white" : "black"}` }}>
          Eboreime ThankGod.
        </div>
      </Link>
      <div className='designer'>designed by shaqur</div>
    </div>
  );
};

export default Footer;
