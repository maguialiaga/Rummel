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
import pic from "../assets/production.png";
import {
  HeroVideo1,
  HeroVideo2,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroTextBis,
} from "../styles/HeroStyles";
import { FiPlayCircle } from "react-icons/fi";

export default function Hero() {
  return (
    <>
      <HeroSection>
        <HeroVideo1 src={video} autoPlay muted />
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
