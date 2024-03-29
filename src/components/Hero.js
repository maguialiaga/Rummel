import React from "react";
import { Link } from "gatsby";
import { Container, MainHeading, Button } from "../globalStyles";

import video from "../assets/videos/hero.mp4";
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
          autoPlay
          loop
          muted
          // type={"video/mp4"}
          playsInline
          // formats={["AUTO", "WEBP", "AVIF"]}
        />
        <script>document.getElementById('vid').play();</script>
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
