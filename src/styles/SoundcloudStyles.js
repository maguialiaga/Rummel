import styled from "styled-components";
import { motion } from "framer-motion";
// import { Container } from "../globalStyles";
// import { Link } from "gatsby";

// export const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 64px;
//   width: 100%;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 0 50px;
// `;

export const PlayerWrapper = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 150px;
  /* flex-wrap: wrap; */
  border: 20px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;
/* border-radius: 20px; */
/* padding: 16px 18px; */
/* background: black; */

export const Url = styled(motion.iframe)`
  /* max-width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 450;
  width: 100%;
  height: auto; */
  margin-left: auto;
  margin-right: auto;
  padding: 0 100px;
  padding-bottom: 90px;
  border: 0;
  @media screen and (max-width: 768px) {
    padding: 40px;
  }
`;

export const Container = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    padding-bottom: 50px;
  }
`;
// export const Box = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

// export const Url = styled.iframe
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: auto;
//   max-width: 100%;
//   height: 450;
//   scroll-behavior: none;
//   border: 0;
//

// {
//   /* <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/355337477&color=%23101e46&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/gespona" title="GESPONA" target="_blank" style="color: #cccccc; text-decoration: none;">GESPONA</a> · <a href="https://soundcloud.com/gespona/sets/sets" title="DJ Sets" target="_blank" style="color: #cccccc; text-decoration: none;">DJ Sets</a></div> */
