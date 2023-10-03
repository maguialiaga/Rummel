import React, { useEffect } from "react";
import { Container, Section } from "../globalStyles";

import {
  ContentRow,
  TextWrapper,
  Heading,
  ContentButton,
  Subtitle,
  Subtitle2,
  ImgWrapper,
  ContentColumn,
} from "../styles/ContentStyles";

//import img from "../assets/production.jpg";
import { StaticImage } from "gatsby-plugin-image";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const topics = [
  {
    text: [
      "-Export your audio stems in WAV/AIFF files 24BITS/44.1KHz.",
      "-Keep every process you have applied to your stems ON (EQ, compression, FX, etc.) and your master bus clear of any process.",
      "-Check that there's no clipping.",
      "-Please send your Pre-mastered version, this may help as guide:",
    ],
  },
];

const Content = () => {
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
    <Section ref={ref}>
      <Container>
        <ContentRow>
          <ContentColumn>
            <TextWrapper>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
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
              {/* <Img
                src={img}
                alt={alt}
                // whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              /> */}
              <StaticImage
                src="../assets/images/mixmaster.jpg"
                width={500}
                alt="Mix and master"
                placeholder="blurred"
                // formats={["AUTO", "WEBP", "AVIF"]}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};

export default Content;
