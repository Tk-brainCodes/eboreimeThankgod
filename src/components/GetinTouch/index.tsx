import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import "./index.css";
import Arrow from "../../assets/icons/arrow.svg";
import { Element } from "react-scroll";

const GetIntouch = () => {
  const { dark } = useContext(ThemeContext);
  const recipientEmail = "ikhuohohoneboreimethankgod@gmail.com";

  const handleComposeEmail = () => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };
  return (
    <Element name='contact' className='base-container'>
      <div className='get-in-touch'>Interested in working together?</div>
      <div
        className='container-link'
        style={{ color: `${dark ? "white" : "black"}`, cursor: "pointer" }}
        onClick={handleComposeEmail}
      >
        Get in touch <img src={Arrow} alt='open-link' />
      </div>
    </Element>
  );
};

export default GetIntouch;
