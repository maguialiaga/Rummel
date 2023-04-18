import React from "react";
import {
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  FooterLogo,
  SocialIcon,
  // FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterAddress,
  FooterColumn,
  FooterGrid,
} from "../styles/FooterStyles";
import { footerSocialData } from "../data/FooterData";
import { Row, Section } from "../globalStyles";
import logo from "../assets/logo-rummel-blanco.png";
// import { NavIcon, Navlogo } from "../styles/NavBarStyles";

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo to="/">
              <SocialIcon src={logo} />
            </FooterLogo>
            <FooterAddress>Barcelona, Spain</FooterAddress>

            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href={social.src}
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          {/* {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))} */}
        </FooterGrid>
        {/* <FooterRights>Rummel Audio copyright</FooterRights> */}
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
