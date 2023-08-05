import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import "./Footer.css";

const Footer = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className='footer'>
      <div className='name' style={{ color: `${dark ? "white" : "black"}` }}>
        Eboreime ThankGod.
      </div>
      <div className='designer'>designed by shaqur</div>
    </div>
  );
};

export default Footer;
