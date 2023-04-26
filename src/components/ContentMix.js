import React, { useEffect, useState } from "react";
import { Container, Section } from "../globalStyles";
import { Link } from "gatsby";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  Subtitle2,
  ImgWrapper,
  Img,
  ContentColumn,
} from "../styles/ContentStyles";

import img from "../assets/production.jpg";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const topics = [
  {
    text: [
      "-Export your audio stems in WAV/AIFF files 24BITS/44.1KHz.",
      "-Keep every process you have applied to your stems ON (EQ, compression, FX, etc.) and your master bus clear of any process.",
      "-Leave the maximum peak at -3dB and check that there is no clipping.",
      "-Please send your Pre-mastered version, this may help as guide:",
    ],
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

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth " });
  // };

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {/* {headline} */}
                How to prepare your stems:
              </Heading>
              {topics.map((list) =>
                list.text.map((t) => (
                  <Subtitle2
                    initial={initial}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    animate={animation}
                  >
                    {t}
                  </Subtitle2>
                ))
              )}
              <Subtitle></Subtitle>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
              >
                Upload your files to Google Drive, We transfer or Dropbox and
                send us the link
              </Subtitle>

              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                primary={primary}
                onClick={() =>
                  window.scrollTo({
                    top: 1900,
                    behavior: "smooth",
                  })
                }
                // onClick={handleClick}
              >
                Send your link here
              </ContentButton>
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

export default Content;
