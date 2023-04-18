import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { IconContext } from "react-icons";
// import { data, sliderSettings } from "../data/CarouselData";
// import { Row, Heading, Section, TextWrapper } from "../globalStyles";
// import { Link } from "gatsby";
import { MainHeadingThree } from "../globalStyles";
import {
  Container,
  Image,
  // PrevButton,
  // NextButton,
  // ButtonContainer,
  // ReviewSlider,
  // ImageWrapper,
  // CarouselImage,
  // CardButton,
} from "../styles/CarouselStyles";
import { IconContext } from "react-icons";

const Carousel = ({ images, links }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
    setCurrentLinkIndex(
      currentLinkIndex === 0 ? links.length - 1 : currentLinkIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
    setCurrentLinkIndex(
      currentLinkIndex === links.length - 1 ? 0 : currentLinkIndex + 1
    );
  };

  return (
    <>
      <MainHeadingThree>Some of our work</MainHeadingThree>
      <Container>
        <IconContext.Provider value={{ size: "3rem", color: "black" }}>
          <FiChevronLeft onClick={handlePrevClick} />
          <a target="_blank" rel="noreferrer" href={links[currentLinkIndex]}>
            <Image
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
            />
          </a>
          <FiChevronRight onClick={handleNextClick} />
        </IconContext.Provider>
      </Container>
    </>
  );
};

// const Carousel = () => {
//   const [sliderRef, setSliderRef] = useState(null);

//   return (
//     <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
//       <Row justify="space-between" margin="1rem" wrap="wrap">
//         <Heading width="auto" inverse>
//           Recent Work
//         </Heading>
//         <ButtonContainer>
// <IconContext.Provider value={{ size: "3rem", color: "#1d609c" }}>
//   <FiChevronLeft onClick={sliderRef?.slickPrev} />
//   <FiChevronRight onClick={sliderRef?.slickNext} />
// </IconContext.Provider>
//         </ButtonContainer>
//       </Row>

//       <ReviewSlider {...sliderSettings} ref={setSliderRef}>
//         {data.map((el, index) => (
//           <ImageWrapper key={index}>
//             <CarouselImage src={el.image} />
//             <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
//               {el.title}
//             </TextWrapper>
//             <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
//               {el.description}
//             </TextWrapper>
//             <CardButton>Learn More</CardButton>
//           </ImageWrapper>
//         ))}
//       </ReviewSlider>
//     </Section>
//   );
// };

export default Carousel;
