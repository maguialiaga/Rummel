import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 50px; */
`;

export const Image = styled.img`
  /* max-width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 30vh;
  height: auto;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;

  &:hover {
    color: #ccc;
  }
`;

export const PrevButton = styled(Button)`
  left: 0;
`;

export const NextButton = styled(Button)`
  right: 0;
`;

// import styled from "styled-components";
// import { Row } from "../globalStyles";
// import Slider from "react-slick";

// export const CarouselImage = styled.img`
//   width: 100%;
//   height: 300px;
//   border-radius: 10px 10px 0 0;
//   object-fit: cover;
//   vertical-align: middle;
// `;

// export const ImageWrapper = styled.div`
//   width: 90%;
//   display: flex !important;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 10px;
//   outline: none;
//   height: 430px;
//   @media screen and (min-width: 440px) {
//     border: 1px solid #bebebe;
//   }
// `;

// export const ButtonContainer = styled(Row)`
//   & svg {
//     margin: 0 1rem;
//     cursor: pointer;
//   }
//   & svg:hover {
//     opacity: 0.7;
//     transition: opacity 0.2s ease-in;
//   }
//   @media screen and (max-width: 960px) {
//     margin: 0 auto;
//   }
// `;

// export const ReviewSlider = styled(Slider)`
//   width: 100%;
//   .slick-track {
//     display: flex;
//     padding: 30px;
//     gap: 3rem;
//   }
//   .slick-slide {
//     display: flex;
//     justify-content: center;
//     margin-bottom: 1;
//     outline: none;
//   }
//   .slick-list {
//     overflow: hidden;
//   }
// `;

// export const CardButton = styled.button`
//   background-color: #1d609c;
//   font-size: 1.3rem;
//   padding: 5px 10px;
//   color: #fff;
//   cursor: pointer;
//   width: 100%;
//   font-weight: 600;
//   margin: auto 0 0 0;
//   border: none;
//   border-radius: 0 0 10px 10px;
//   &:hover {
//     background-color: #112f4a;
//     transition: background-color 0.2s ease-in;
//   }
// `;
