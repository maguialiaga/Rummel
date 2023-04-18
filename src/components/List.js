import React, { useEffect } from "react";
import {
  ContentColumn,
  ContentRow,
  TextWrapper,
  TopLine,
} from "../styles/ContentStyles";
import { Container, Section2, Heading2 } from "../globalStyles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// import { list } from "../data/ListData";

export default function List({ inverse }) {
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
    <Section2 ref={ref}>
      <Container>
        <ContentRow>
          <ContentColumn>
            <TextWrapper>
              <Heading2
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                Mixdown
                {}
              </Heading2>
              <br></br>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                Up to 15 stems -------- 70 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                15 to 30 stems -------- 85 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                31 to 45 stems -------- 105 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                + than 45 stems -------- 135 EUR
              </TopLine>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <TextWrapper>
              <Heading2
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                Mixdown & Digital Master
              </Heading2>
              <br></br>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                Up to 15 stems -------- 85 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                16 to 30 stems -------- 100 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                31 to 45 stems -------- 120 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                + than 45 stems -------- 150 EUR
              </TopLine>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <TextWrapper>
              <Heading2
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                Mixing and Analog Master
              </Heading2>
              <br></br>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                Up to 15 stems -------- 125 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                16 to 30 stems -------- 140 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                30 to 45 stems -------- 160 EUR
              </TopLine>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                + than 45 stems -------- 190 EUR
              </TopLine>
            </TextWrapper>
          </ContentColumn>
          {/* <ContentColumn>
            <TopLine
              initial={initial}
              transition={{ delay: 0.3, duration: 0.6 }}
              animate={animation}
            >
              Up to 15 stems -------- 70 EUR
            </TopLine>
          </ContentColumn> */}
        </ContentRow>
        <ContentRow></ContentRow>
      </Container>
    </Section2>
  );
}

//  {
//    list.map((el) => {
//      <Heading2
//        initial={initial}
//        transition={{ delay: 0.3, duration: 0.6 }}
//        animate={animation}
//      >
//        {el.heading}
//      </Heading2>;
//  {
//    el.description.map((text) => (
//  <TopLine
//    initial={initial}
//    transition={{ delay: 0.3, duration: 0.6 }}
//    animate={animation}
//  >
//    {text}
//  </TopLine>;
//    ));
//  }
//    });
//  }
