import React from "react";
import {
  FaInstagram,
  // FaEnvelope,
  // FaFacebook,
  // FaYoutube,
  // FaTwitter,
  // FaLinkedin,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Email",
    icon: iconStyle(MdOutlineEmail),
    src: "mailto:rummelaudio@gmail.com",
  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
    src: "https://www.instagram.com/rummel_audio/",
  },
  // {
  //   name: "YouTube",
  //   icon: iconStyle(FaYoutube),
  // },
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
  // {
  //   title: "Fill your ",
  //   links: ["Blog", "FAQs", "Support", "About us"],
  // },
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
