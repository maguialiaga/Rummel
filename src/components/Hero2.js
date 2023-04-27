import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Link } from "gatsby";
import { Container, MainHeadingBis, NavBarBtn } from "../globalStyles";

import { ButtonWrapper, HeroTextBis, HeroSection2 } from "../styles/HeroStyles";

export default function Hero2() {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
  return (
    <>
      <HeroSection2 ref={ref}>
        <Container>
          <MainHeadingBis
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            1:1 Production Lessons
          </MainHeadingBis>
          <HeroTextBis
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            Personalized programm to improve your skills for electronic music
            production
          </HeroTextBis>
          <ButtonWrapper>
            <Link to="/courses">
              <NavBarBtn
                initial={initial}
                transition={{ delay: 0.6, duration: 0.6 }}
                animate={animation}
              >
                Learn More
              </NavBarBtn>
            </Link>
          </ButtonWrapper>
        </Container>
      </HeroSection2>
    </>
  );
}
