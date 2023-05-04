import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/logo-rummel-blanco.png";
import "animate.css";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  color: white;
  width: 12rem;
  z-index: -1;
  animation: flash;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export default function PreLoader() {
  // useEffect(() => {
  //   preLoaderAnim
  // }, [])

  return (
    <Container>
      <ImgContainer>
        <Img src={logo} />
      </ImgContainer>
    </Container>
  );
}
