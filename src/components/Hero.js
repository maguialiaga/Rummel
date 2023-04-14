import React from "react";
import { Link } from "gatsby";
import { Button, Container, MainHeading } from "../globalStyles";
import video from "../assets/hero.mp4";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "../styles/HeroStyles";

export default function Hero() {
  return (
    <>
      <HeroSection>
        <HeroVideo src={video} autoPlay muted />
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
