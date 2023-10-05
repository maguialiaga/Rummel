import styled from "styled-components";
import { Button } from "../globalStyles";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  height: 90vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroSection2 = styled.section`
  height: 70vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 10px;
  }
`;
export const HeroSection3 = styled.section`
  /* height: 70vh; */
  background-position: center;
  background-size: cover;
  padding-top: clamp(10px, 5vh);
  padding-bottom: 200px;
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 200px;
  }
`;

export const HeroVideo1 = styled.video`
  display: block;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)); */
  background: black;
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const HeroVideo2 = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  /* top: 0; */
  position: absolute;
  z-index: -1;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const HeroTextBis = styled(motion.p)`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: black;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 6rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const HeroButton = styled(Button)`
  color: black;
  &:before {
    background: #fff;
    height: 500%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
  }
`;
