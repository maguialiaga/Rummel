import React from "react";

import { Container, PlayerWrapper, Url, Box } from "../styles/SoundcloudStyles";
import ReactPlayer from "react-player";
// import { BeSpotify } from "react-icons/bs";
// const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;
// iconStyle(BeSpotify);

const Soundcloud = () => {
  return (
    <>
      <>
        <Container>
          {/* <Url> */}
          <PlayerWrapper>
            <ReactPlayer
              autoplay
              width={"90%"}
              height={500}
              border={0}
              background={"black"}
              // url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/355337477&color=%23101e46&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              url="https://soundcloud.com/gespona/sets/sets?si=2d1adf1fdf494e2b985ae088c16c7492&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              config={{
                soundcloud: {
                  options: {
                    sharing: true,
                  },
                },
              }}
            />
          </PlayerWrapper>

          {/* </Url> */}
        </Container>
      </>
    </>
  );
};

export default Soundcloud;

// <>
//   {/* <Container>
//     <Url> */}

//     <ReactPlayer
//       autoplay
//       position={"absolute"}
//       top={0}
//       left={0}
//       // width="60 %"
//       // height="300"
//       url="https://soundcloud.com/gespona/sets/sets?si=2d1adf1fdf494e2b985ae088c16c7492&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
//       // config={{
//       //   soundcloud: {
//       //     options: {
//       //       sharing: true,
//       //     },
//       //   },
//       // }}
//     />

//   {/* </Url>
//   </Container> */}
// </>
{
  /* <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/355337477&color=%23101e46&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/gespona" title="GESPONA" target="_blank" style="color: #cccccc; text-decoration: none;">GESPONA</a> · <a href="https://soundcloud.com/gespona/sets/sets" title="DJ Sets" target="_blank" style="color: #cccccc; text-decoration: none;">DJ Sets</a></div> */
}
