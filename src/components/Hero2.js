import React from "react";
import { Link } from "gatsby";
import {
  Container,
  MainHeading,
  Button,
  MainHeadingBis,
  NavBarBtn,
} from "../globalStyles";
import video from "../assets/hero.mp4";
// import pic from "../assets/production.png";
import {
  HeroVideo1,
  HeroVideo2,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroTextBis,
} from "../styles/HeroStyles";
import { FiPlayCircle } from "react-icons/fi";

export default function Hero2() {
  return (
    <>
      <HeroSection>
        {/* <HeroVideo2 src={video} autoPlay muted /> */}
        <Container>
          <MainHeadingBis>1:1 Production Lessons</MainHeadingBis>
          <HeroTextBis>
            Personalized programm to improve your skills for electronic music
            production
          </HeroTextBis>
          <ButtonWrapper>
            <Link to="/courses">
              <NavBarBtn>Learn More</NavBarBtn>
            </Link>
          </ButtonWrapper>
        </Container>
      </HeroSection>
    </>
  );
}
