import React from "react";
import {
  Container,
  ContentColumn,
  ContentRow,
  ImgWrapper,
  Section,
  Img,
} from "../styles/BioStyles";

const Bio = () => {
  return (
    <>
      <Container>
        <Section>
          <ContentRow>
            <ContentColumn>
              <ImgWrapper>
                <Img
                // src={img}
                // alt={alt}
                // // whileHover={{ rotate: 2, scale: 1.02 }}
                // transition={{ duration: 0.5 }}
                ></Img>
              </ImgWrapper>
            </ContentColumn>
          </ContentRow>
        </Section>
      </Container>
    </>
  );
};

export default Bio;
