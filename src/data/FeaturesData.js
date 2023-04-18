import React from "react";

import { FiMusic, FiPlay, FiRepeat, FiLink2 } from "react-icons/fi";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CgLoadbarSound } from "react-icons/cg";
import { BsSoundwave } from "react-icons/bs";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Ableton Use",
    // description:
    //   "We offer the best data security to our clients, which makes us stand out",
    icon: iconStyle(IoIosOptions),
    imgClass: "one",
  },
  {
    name: "Music Composition",
    description: "Our system is easy to use and integrate",
    icon: iconStyle(FiMusic),
    imgClass: "two",
  },
  {
    name: "Sound Design",
    description:
      "Our code is written in highest standards, which makes it highly sustainable",
    icon: iconStyle(BsSoundwave),
    imgClass: "three",
  },
  // {
  //   name: "Arrangment",
  //   description: "Our team is available at all times in case you need us",
  //   icon: iconStyle(BiSupport),
  //   imgClass: "four",
  // },
  {
    name: "Mixdown and advance processing",
    description: "We offer the highest value/cost ratio",
    icon: iconStyle(FiPlay),
    imgClass: "five",
  },
  {
    name: "How to go from a loop to a finish track",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    icon: iconStyle(FiRepeat),
    imgClass: "six",
  },
  {
    name: "Music buisness and how to aproach labels",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    icon: iconStyle(FiLink2),
    imgClass: "seven",
  },
];
