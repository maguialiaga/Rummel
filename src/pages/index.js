import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Soundcloud from "../components/Soundcloud";
import image1 from "../assets/soundcloud.png";
import image2 from "../assets/sinestesia.png";
import image3 from "../assets/kater.png";
import Spotify from "../components/Spotify";

const images = [image1, image2, image3];
const links = [
  "https://on.soundcloud.com/TV7kv73uhaZzG7eL8",
  "https://soundcloud.com/gespona/gespona-sinestesia-mastered",
  "https://soundcloud.com/gespona/gespona-katerblau-kiosk-id-06082022",
];

export default function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Hero2 />

        {/* <Carousel images={images} links={links} /> */}
        {/* <Soundcloud /> */}
        <Spotify />
      </>
    </Layout>
  );
}
