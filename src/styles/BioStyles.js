import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 30px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const BioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  grid-gap: 2rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BioColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: left;
  /* background: #f3f3f3; */
  padding: 50px;
  /* box-shadow: 0 20px 30px rgb(0, 0, 0, 0.15); */
  border-radius: 20px;
`;

// export const BioImageWrapper = styled.div`
//   margin-bottom: 1rem;
//   /* border-radius: 50%; */
//   /* border: 1px solid #000; */
//   padding: 30px;
// `;
export const BioName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;

export const BioTextBis = styled.p`
  margin: 0.4rem 0 auto;
  text-align: left;
  font-size: 1rem;
  color: black;
  font-weight: 400;
  letter-spacing: 0.5px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const BioText = styled.p`
  margin: 0.4rem 0 auto;
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end";
  max-height: 500px;
  justify-content: center;
  position: relative;
  background-color: blue;
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
  z-index: -1;
`;

export const BioSocialIcon = styled.a`
  color: black;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
