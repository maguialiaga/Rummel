import styled from "styled-components";
import { motion } from "framer-motion";

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1rem, 10vw, 2.5rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0;
  /* margin-bottom: 1rem; */
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 3rem;
  grid-gap: 3rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 3rem;
  grid-gap: 3rem;
`;

export const FeatureColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  padding: 50px;
  /* box-shadow: 0 20px 30px rgb(0, 0, 0, 0.15); */
  border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 1px solid #000;
  padding: 30px;
`;
export const FeatureName = styled.h3`
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: 2px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
