import React from "react";
import { Container, Section, Heading2 } from "../globalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureWrapper2,
  FeatureColumn,
  FeatureColumn2,
  FeatureName,
  FeatureTextWrapper,
} from "../styles/FeaturesStyles";
import { featuresData } from "../data/FeaturesData";

const Features = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>Mix & Mastering</FeatureTitle>
          <Heading2></Heading2>
          <Heading2>Pricing</Heading2>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.7 + index * 0.1 }}
              key={index}
            >
              {/* <FeatureImageWrapper className={el.imgClass}>
                {el.icon}
              </FeatureImageWrapper> */}

              <FeatureName>{el.name}</FeatureName>
              {el.description?.map((des) => (
                <FeatureText>{des}</FeatureText>
              ))}
            </FeatureColumn>
          ))}
        </FeatureWrapper>
        <FeatureWrapper2>
          <FeatureColumn2
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7 + 3 * 0.1 }}
            key={3}
          >
            <FeatureName> Mastering </FeatureName>
            <FeatureText>"Stereo Mastering ---- 40 EUR"</FeatureText>
          </FeatureColumn2>
        </FeatureWrapper2>
      </Container>
    </Section>
  );
};

export default Features;
