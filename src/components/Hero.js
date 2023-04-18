import React from "react";
import { Link } from "gatsby";
import { Container, MainHeading, Button } from "../globalStyles";
import video from "../assets/hero.mp4";
import {
  HeroVideo1,
  HeroSection,
  HeroText,
  ButtonWrapper,
} from "../styles/HeroStyles";

export default function Hero() {
  return (
    <>
      <HeroSection>
        <HeroVideo1 src={video} autoPlay loop muted />
        <Container>
          <MainHeading>Mix & Mastering</MainHeading>
          <HeroText>
            We take care of your music to make it sound at a professional level
          </HeroText>
          <ButtonWrapper>
            <Link to="/mix&master">
              <Button>Get Started</Button>
            </Link>
          </ButtonWrapper>
        </Container>
      </HeroSection>
    </>
  );
}
