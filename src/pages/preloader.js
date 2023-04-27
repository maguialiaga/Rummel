import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/logo-rummel-blanco.png";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* z-index: 55; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 280px;
  overflow: hidden;
`;
const Img = styled.img`
  color: white;
  width: 9rem;
  z-index: -1;
`;

const PreLoader = () => {
  return (
    <Container>
      <ImgContainer src={logo} />
    </Container>
  );
};

export default PreLoader;
