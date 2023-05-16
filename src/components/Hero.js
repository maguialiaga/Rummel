import React from "react";
import { Link } from "gatsby";
import { Container, MainHeading, Button } from "../globalStyles";

import video from "../assets/videos/heroWeb.mp4";
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
        <HeroVideo1
          src={video}
          muted
          autoPlay
          playsInLine
          loop
          type={"video/mp4"}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
        />
        <Container>
          <MainHeading>Mix & Mastering</MainHeading>
          <HeroText>Make your music sound professional</HeroText>
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
