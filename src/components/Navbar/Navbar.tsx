import { Fragment, useState, useContext } from "react";
import "./Navbar.css";
import Line from "../Line/Line";
import styled from "styled-components";
// import HamburgerMenu from '../../assets/icons/hamburger.svg'
// import Close from '../../assets/icons/close.svg'
import { motion } from "framer-motion";
import { ThemeContext } from "../../provider/theme.provider";
import { Link } from "react-scroll";
import Toggle from "./Toggle";

interface ULProps extends React.HTMLAttributes<HTMLUListElement> {
  dark?: boolean;
  openSidenav?: boolean;
}

const UL = styled.ul<ULProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  gap: 20px;
  font-family: 'PP Neue Montreal';
  color: rgb(17, 16, 16);
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 280px;
    height: 100vh;
    position: fixed;
    top: -15px;
    background: ${({ dark }) => (dark ? "black" : "lightgray")};
    z-index: 10;
    right: ${({ openSidenav }) => (openSidenav ? "0" : "-100%")};
    transition: 300ms;
  }
};
`;

const OPEN = styled.div`
  display: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: none;
  color: rgb(17, 16, 16);
  margin-right: 15px;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    right: 0;
    top: 0;
    margin-top: 23px;
    position: fixed;
    color: black;
  }
`;

const NAV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto !important;
  width: 100%;
  border-bottom: 1px solid #262626;
  position: fixed;
  z-index: 40;
`;

const Navbar = () => {
  const [openSidenav, setOpenSidenav] = useState(false);
  const { dark, toggleTheme } = useContext(ThemeContext);

  const listStyles = {
    color: dark ? "white" : "#36363c",
  };

  return (
    <Fragment>
      <>
        <NAV className='firefox:bg-opacity-90 bg-opacity-30 backdrop-filter backdrop-blur-lg bg-[#121212]'>
          <Link
            to='home'
            offset={-110}
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
          >
            <div className='logo ml-[14px]'>
              <h1 style={{ fontSize: "20px" }}>Eboreime ThankGod.</h1>
              <Line>
                <div
                  className='frontend-engineer'
                  style={{ color: `${dark ? "white" : "black"}` }}
                >
                  Software Developer
                </div>
              </Line>
            </div>
          </Link>
          <UL dark={dark} openSidenav={openSidenav}>
            {openSidenav ? (
              <OPEN onClick={() => setOpenSidenav(!openSidenav)}>
                <svg
                  width='25'
                  height='21'
                  viewBox='0 0 31 51'
                  fill='#6d8b74'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_2_4)'>
                    <path
                      d='M30.0894 35.9988C31.3003 37.2439 31.3003 39.261 30.0894 40.5061C29.4887 41.1287 28.6944 41.4375 27.9 41.4375C27.1056 41.4375 26.3132 41.1262 25.7087 40.5037L15.5 30.0123L5.29228 40.5012C4.68681 41.1287 3.89341 41.4375 3.1 41.4375C2.30659 41.4375 1.51416 41.1287 0.908203 40.5012C-0.302734 39.256 -0.302734 37.239 0.908203 35.9938L11.1188 25.495L0.908203 15.0012C-0.302734 13.7561 -0.302734 11.739 0.908203 10.4938C2.11914 9.24873 4.08086 9.24873 5.2918 10.4938L15.5 20.9977L25.7106 10.4988C26.9216 9.25371 28.8833 9.25371 30.0942 10.4988C31.3052 11.7439 31.3052 13.761 30.0942 15.0061L19.8836 25.505L30.0894 35.9988Z'
                      fill='#6d8b74'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_2_4'>
                      <rect width='31' height='51' fill='#6d8b74' />
                    </clipPath>
                  </defs>
                </svg>
              </OPEN>
            ) : (
              <OPEN onClick={() => setOpenSidenav(!openSidenav)}>
                <svg
                  width='25'
                  height='21'
                  viewBox='0 0 38 29'
                  fill='#6d8b74'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 2.41667C0 1.08221 1.06355 0 2.375 0H30.875C32.1887 0 33.25 1.08221 33.25 2.41667C33.25 3.75339 32.1887 4.83333 30.875 4.83333H2.375C1.06355 4.83333 0 3.75339 0 2.41667ZM4.75 14.5C4.75 13.1633 5.81355 12.0833 7.125 12.0833H35.625C36.9387 12.0833 38 13.1633 38 14.5C38 15.8367 36.9387 16.9167 35.625 16.9167H7.125C5.81355 16.9167 4.75 15.8367 4.75 14.5ZM30.875 29H2.375C1.06355 29 0 27.9201 0 26.5833C0 25.2466 1.06355 24.1667 2.375 24.1667H30.875C32.1887 24.1667 33.25 25.2466 33.25 26.5833C33.25 27.9201 32.1887 29 30.875 29Z'
                    fill='#6d8b74'
                  />
                </svg>
              </OPEN>
            )}
            <Link
              to='home'
              offset={-110}
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              <motion.li
                whileTap={{ scale: 1.1 }}
                style={listStyles}
                className='highlight-link'
              >
                Home
              </motion.li>
            </Link>
            <Link
              to='about'
              offset={-110}
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              <motion.li
                whileTap={{ scale: 1.1 }}
                style={listStyles}
                className='highlight-link'
              >
                About
              </motion.li>
            </Link>
            <Link
              to='projects'
              offset={-110}
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              <motion.li
                whileTap={{ scale: 1.1 }}
                style={listStyles}
                className='highlight-link'
              >
                projects
              </motion.li>
            </Link>
            <Link
              to='articles'
              offset={-110}
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              <motion.li
                whileTap={{ scale: 1.1 }}
                style={listStyles}
                className='highlight-link'
              >
                Articles
              </motion.li>
            </Link>
            <Link
              to='contact'
              offset={-110}
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              <motion.li
                whileTap={{ scale: 1.1 }}
                style={listStyles}
                className='highlight-link'
              >
                Contact
              </motion.li>
            </Link>
            <br />
            <Toggle dark={dark} toggleTheme={toggleTheme} />
          </UL>
        </NAV>
      </>
    </Fragment>
  );
};
export default Navbar;
