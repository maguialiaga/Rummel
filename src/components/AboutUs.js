import React from "react";
import { Section, Row } from "../globalStyles";
import {
  Container,
  BioWrapper,
  BioColumn,
  BioName,
  BioText,
  BioTextBis,
  BioSocialIcon,
} from "../styles/BioStyles";
import {
  bioSocialDataNico,
  bioSocialDataGon,
  bioSocialDataLast,
} from "../data/AboutData";

import { FeatureTextWrapper, FeatureTitle } from "../styles/FeaturesStyles";

import { StaticImage } from "gatsby-plugin-image";

const AboutUs = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };
  return (
    <>
      <Section smPadding="80px 10px" position="relative" inverse id="about">
        <Container>
          <FeatureTextWrapper>
            <FeatureTitle>About Us</FeatureTitle>
            {/* <Heading2></Heading2>
            <Heading2>Budget</Heading2> */}
          </FeatureTextWrapper>
          <BioWrapper>
            <BioColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.7 + 0 * 0.1 }}
              key={0}
            >
              <StaticImage
                src="../assets/images/nico.jpg"
                width={800}
                height={1000}
                alt="photos"
              />
              <br></br>
              <br></br>
              <BioName>{"DJOLEE"}</BioName>
              <br></br>
              <BioTextBis>{"Released on:"}</BioTextBis>

              <BioText>
                {
                  "Stil Vor Talent, Rummel, Amancay, Sum Over Histories, Mo Black"
                }
              </BioText>
              <br></br>
              <BioTextBis>{"Supported by:"}</BioTextBis>

              <BioText>
                {
                  "Dixon, Ame, Trikk, Mind Against, Oliver Koletzki, Bedouin, Musumeci, Totto Chiavetta"
                }
              </BioText>
              <Row
                align-items="center"
                margin="20px  0 0 0"
                gap="1rem"
                justify-content={"center"}
              >
                {bioSocialDataNico.map((social, index) => (
                  <BioSocialIcon
                    key={index}
                    href={social.src}
                    color="black"
                    target="_blank"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </BioSocialIcon>
                ))}
              </Row>
            </BioColumn>

            <BioColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.7 + 1 * 0.1 }}
              key={1}
            >
              <StaticImage
                src="../assets/images/gon.jpg"
                width={800}
                height={1000}
                alt="photos"
              />
              <br></br>
              <br></br>
              <BioName>{"GESPONA"}</BioName>
              <br></br>
              <BioTextBis>{"Released on:"}</BioTextBis>
              <BioText>
                {"Stil Vor Talent, Rummel, Radikon, Multinotes"}
              </BioText>
              <br></br>
              <BioTextBis>{"Supported by"}</BioTextBis>
              <BioText>
                {
                  "Dixon, Mind Against, Echonomist, Hernan Cattaneo, Oliver Koletzki, Mano le tough, Massano, Trikk"
                }
              </BioText>
              <Row
                align-items="center"
                margin="20px  0 0 0"
                gap="1rem"
                justify-content={"center"}
              >
                {bioSocialDataGon.map((social, index) => (
                  <BioSocialIcon
                    key={index}
                    href={social.src}
                    color="black"
                    target="_blank"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </BioSocialIcon>
                ))}
              </Row>
            </BioColumn>
            <BioColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.7 + 1 * 0.1 }}
              key={1}
            >
              <StaticImage
                src="../assets/images/lastmen.jpg"
                width={800}
                height={1000}
                alt="photos"
              />
              <br></br>
              <br></br>
              <BioName>{"LAST MEN ON EARTH"}</BioName>
              <br></br>
              <BioTextBis>{"Released on:"}</BioTextBis>
              <BioText>{"Applied Magic, Sum Over Histories, Amancay"}</BioText>
              <br></br>
              <BioTextBis>{"Supported by:"}</BioTextBis>
              <BioText>
                {
                  "Dixon, Ame, John Digweed, Mind Against, Echonomist, Mano le tough, Trikk"
                }
              </BioText>
              <Row
                align-items="center"
                margin="20px  0 0 0"
                gap="1rem"
                justify-content={"center"}
              >
                {bioSocialDataLast.map((social, index) => (
                  <BioSocialIcon
                    key={index}
                    href={social.src}
                    color="black"
                    target="_blank"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </BioSocialIcon>
                ))}
              </Row>
            </BioColumn>
          </BioWrapper>
        </Container>
      </Section>
    </>
  );
};

export default AboutUs;
