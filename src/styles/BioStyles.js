import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  height: 100vh;
  padding-top: clamp(70px, 25vh, 220px);
  background-color: white;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: clamp(70px, 25vh, 220px);
`;

export const ContentRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end";
  max-height: 700px;
  justify-content: center;
  position: relative;
`;

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  /* object-fit: cover; */
  /* max-height: 700px; */
  max-height: 1000px;
  z-index: 1;
`;
