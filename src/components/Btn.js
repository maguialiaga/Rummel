import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Link } from "gatsby";
import { ContainerBtn, NavBarBtn } from "../globalStyles";
import { ButtonWrapper, HeroSection3 } from "../styles/HeroStyles";
import { MainHeadingThree } from "../globalStyles";

const Btn = () => {
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
    <HeroSection3 ref={ref}>
      <ContainerBtn>
        <MainHeadingThree
          initial={initial}
          transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
        >
          Start Now
        </MainHeadingThree>

        <ButtonWrapper>
          <Link to="/mix&master">
            <NavBarBtn
              initial={initial}
              transition={{ delay: 0.6, duration: 0.6 }}
              animate={animation}
            >
              Mix & Mastering
            </NavBarBtn>
          </Link>
          <Link to="/courses">
            <NavBarBtn
              initial={initial}
              transition={{ delay: 0.6, duration: 0.6 }}
              animate={animation}
            >
              Production Lessons
            </NavBarBtn>
          </Link>
        </ButtonWrapper>
      </ContainerBtn>
    </HeroSection3>
  );
};

export default Btn;
