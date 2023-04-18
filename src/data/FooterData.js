import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  // FaTwitter,
  // FaLinkedin,
} from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Facebook",
    icon: iconStyle(FaFacebook),
  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
    src: "https://www.instagram.com/rummel_audio/",
  },
  {
    name: "YouTube",
    icon: iconStyle(FaYoutube),
  },
  // {
  //   name: "Twitter",
  //   icon: iconStyle(FaTwitter),
  // },
  // {
  //   name: "LinkedIn",
  //   icon: iconStyle(FaLinkedin),
  // },
];

export const footerData = [
  {
    title: "Fill your ",
    links: ["Blog", "FAQs", "Support", "About us"],
  },
  // {
  //   title: "Product",
  //   links: ["Login", "Personal", "Business", "Team"],
  // },
  // {
  //   title: "Press",
  //   links: ["Logos", "Events", "Stories", "Office"],
  // },
  // {
  //   title: "Legal",
  //   links: ["GDPR", "Privacy Policy", "Terms of Service", "Disclaimer"],
  // },
];
