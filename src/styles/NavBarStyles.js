import styled from "styled-components";
import { Container } from "../globalStyles";
import { Link } from "gatsby";

export const Nav = styled.nav`
  background-color: rgb(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  box-shadow: 0 20px 30px rgb(0, 0, 0, 0.15);
  /* width: 100%; */
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* position: fixed; */
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
  margin-left: 2rem;
`;

export const NavIcon = styled.img`
  margin-right: 0 0.5rem;
  width: 7rem;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ click }) => (click ? 1 : 0)};
    visibility: ${({ click }) => (click ? "visible" : "hidden")};
    transform: translateY(${({ click }) => (click ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: rgb(0, 0, 0, 0.6);
  }
  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #fff;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

//  nav ul {
//     /* width: 100%;
//     margin: 0rem;
//     padding: 0;
//     list-style-type: none;
//     display: grid;
//     grid-template-columns: repeat(4, auto);
//     align-items: center;
//     justify-content: space-between;
//     @media (min-width: 768px) {
//       grid-template-columns: 1fr repeat(3, auto);
//     } */
//     width: 100%;
//     margin: 0rem;
//     padding: 0;
//     align-items: center;
//     top: 0;
//     justify-content: space-between;
//     list-style-type: none;
//     position: fixed;
//     background-color: rgb(0, 0, 0, 0.6);
//     backdrop-filter: blur(8px);
//     box-shadow: 0 20px 30px rgb(0, 0, 0, 0.15);
//     display: grid;
//     grid-template-columns: repeat(4, auto);
//     @media (min-width: 768px) {
//       grid-template-columns: 1fr repeat(3, auto);
//     }
//   }
//   nav ul li a {
//     display: inline-block;
//     padding: 1rem;
//     text-decoration: none;
//     font-family: ${({ theme }) => theme.fonts.body}, sans-serif;
//     position: relative;
//     color: white;
//     ::after {
//       content: "";
//       position: absolute;
//       width: 100%;
//       transform: scaleX(0);
//       height: 2px;
//       bottom: 0;
//       left: 0;
//       background-color: white;
//       transform-origin: bottom right;
//       transition: transform 0.25s ease-out;
//     }
//     :hover::after {
//       transform: scaleX(1);
//       transform-origin: bottom left;
//     }
//   }
