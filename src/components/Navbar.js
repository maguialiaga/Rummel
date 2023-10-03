import React, { useEffect, useState } from "react";
// import { navigate } from "@reach/router";
// import { useLocation } from "react-router-dom";
import logo from "../assets/rummel-negro.png";
import data from "../data/NavBarData";
import { NavBarBtn } from "../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "../styles/NavBarStyles";
import { FiMenu, FiX } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#131313" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon src={logo} alt="logo" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FiX /> : <FiMenu />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {data.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks to={el.to}>{el.text}</NavLinks>
                </NavItem>
              ))}
              <NavItem key={"contact"}>
                <NavLinks to="/contact">
                  <NavBarBtn>Contact</NavBarBtn>
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
