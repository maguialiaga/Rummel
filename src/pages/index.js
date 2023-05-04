import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Spotify from "../components/Spotify";
import { useState, useEffect } from "react";
import PreLoader from "../components/preloader";

// import { motion } from "framer-motion";

// import Soundcloud from "../components/Soundcloud";
// import image1 from "../assets/soundcloud.png";
// import image2 from "../assets/sinestesia.png";
// import image3 from "../assets/kater.png";

// const images = [image1, image2, image3];
// const links = [
//   "https://on.soundcloud.com/TV7kv73uhaZzG7eL8",
//   "https://soundcloud.com/gespona/gespona-sinestesia-mastered",
//   "https://soundcloud.com/gespona/gespona-katerblau-kiosk-id-06082022",
// ];

// const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Layout>
          <Hero />
          <Hero2 />

          {/* <Carousel images={images} links={links} /> */}
          {/* <Soundcloud /> */}
          <Spotify />
        </Layout>
      )}
    </>
  );
}
