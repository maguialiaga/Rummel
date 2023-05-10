import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Container, Url } from "../styles/SoundcloudStyles";
import { MainHeadingThree } from "../globalStyles";
import { useEffect } from "react";

const Spotify = () => {
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
    <>
      <Container ref={ref}>
        <MainHeadingThree
          initial={initial}
          transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
        >
          Recent works
        </MainHeadingThree>
        <Url
          initial={initial}
          transition={{ delay: 0.6, duration: 0.6 }}
          animate={animation}
          src="https://open.spotify.com/embed/playlist/1YA2MBpi7VM5mD7uWRU9HX?utm_source=generator"
          width="100%"
          height="500"
          frameBorder="0"
          // allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></Url>
      </Container>
    </>
  );
};

export default Spotify;

//SPOTIFY

/* <iframe
  style="border-radius:12px"
  src="https://open.spotify.com/embed/album/7lJ2Vt8Owu00RSEizBKS1X?utm_source=generator&theme=0"
  width="100%"
  height="352"
  frameBorder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>; */

/* <iframe
  style="border-radius:12px"
  src="https://open.spotify.com/embed/playlist/1YA2MBpi7VM5mD7uWRU9HX?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>; */
