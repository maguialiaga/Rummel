import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import GlobalStyle from "../globalStyles"; // traigo los estilos globales que van a poder acceder todos

import styled, { ThemeProvider } from "styled-components";

const theme = {
  color: {
    text: "black",
    background: "white",
  },
  fonts: {
    header: "Montserrat",
    body: "Inter",
  },
}; //aca agrego fonts, colors, etc todo lo que va a usar la pag

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto; //esto significa que el navbar va a ocupar el espacio que yo le ponga y el footer lo mismo dentro de esos 100hv, el contenido siempre va a estar envuelto en estos dos y tambien va a tomar al menos 1 fraccion/hole para disponer de ese espacio del medio. El navbar y footer siempre van a estar pegados a los extremos de la pagina
`;
export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LayoutStyles>
          <Navbar />
          {children}
          {/* Content of each page, will inyect in children, todos van a tener NavBar y Footer*/}
          <Footer />
        </LayoutStyles>
      </ThemeProvider>
    </>
  );
}
