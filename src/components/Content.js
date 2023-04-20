import React, { useEffect } from "react";
import { Container, Section } from "../globalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  // ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "../styles/ContentStyles";

// import video from "../assets/hero2.mp4";
import img from "../assets/production.jpg";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const topics = [
  {
    text: ["Abelton use"],
  },
];

const Content = ({
  primary,
  // topLine,
  // headline,
  // description,
  // buttonLabel,
  // img,
  alt,
  inverse,
  reverse,
}) => {
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
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {/* {topLine.text} */}
                {/* Lessons */}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {/* {headline} */}
                Production Lessons
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                We offer personalized 1:1 presential / remote lessons that cover
                the whole process behind electronic music production.
              </Subtitle>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                Some topics we cover:
              </Subtitle>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                // whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};

//  {
/* <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
                primary={primary}
              >
                {buttonLabel}
                button
              </ContentButton> */
//}

export default Content;
