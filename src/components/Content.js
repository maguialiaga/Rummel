import React, { useEffect } from "react";
import { Container, Section } from "../globalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Subtitle2,
  ImgWrapper,
  ContentColumn,
  // ContentButton,
  // Img,
} from "../styles/ContentStyles";

import { StaticImage } from "gatsby-plugin-image";
// import img from "../assets/prod2.png";
// import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const topics = [
  {
    text: [
      "Abelton use",
      "Music Composition",
      "Sound Design",
      "Arrengment",
      "Mixdown and advanced processing",
      "How to go from a loop to a finished track",
      "Music Business and how to aproach Labels",
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
              >
                {/* {headline} */}
                Production Lessons
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
              >
                We offer personalized 1:1 presential / remote lessons that cover
                the whole process behind electronic music production. Some
                topics we cover:
              </Subtitle>
              {/* <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              ></Subtitle> */}
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
                src="../assets/images/prod.jpg"
                width={500}
                alt="Prod Lessons"
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

// export const pageQuery = graphql`
//   query {
//     file(relativePath: { eq: "prod.jpg" }) {
//       id
//       childImageSharp {
//         gatsbyImageData(
//           width: 100
//           quality: 50
//           webpOptions: { quality: 70 }
//           placeholder: BLURRED
//           aspectRatio: 0.7
//           blurredOptions: { width: 100 }
//           transformOptions: { cropFocus: CENTER }
//         )
//       }
//     }
//   }
// `;
