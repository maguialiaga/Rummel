import React from "react";
import { Link } from "gatsby";
import { Container, MainHeadingBis, NavBarBtn } from "../globalStyles";
// import video from "../assets/hero2.mp4";
// import pic from "../assets/production.png";
import {
  ButtonWrapper,
  HeroTextBis,
  HeroSection2,
  // HeroVideo2,
} from "../styles/HeroStyles";

export default function Hero2() {
  return (
    <>
      <HeroSection2>
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
      </HeroSection2>
    </>
  );
}
