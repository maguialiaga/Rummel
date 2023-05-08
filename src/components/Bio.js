// import React from "react";
// import { Section } from "../globalStyles";
// import {
//   Container,
//   BioWrapper,
//   BioColumn,
//   BioName,
//   BioText,
// } from "../styles/BioStyles";

// import { StaticImage } from "gatsby-plugin-image";

// const Bio = () => {
//   const initial = {
//     y: 40,
//     opacity: 0,
//   };
//   const animate = {
//     y: 0,
//     opacity: 1,
//   };
//   return (
//     <>
//       <Section smPadding="50px 10px" position="relative" inverse id="about">
//         <Container>
//           <BioWrapper>
//             <BioColumn
//               initial={initial}
//               animate={animate}
//               transition={{ duration: 0.7 + 0 * 0.1 }}
//               key={0}
//             >
//               <StaticImage
//                 src={"../assets/images/gespona.jpg"}
//                 width={300}
//                 alt="photos"
//               />
//               <br></br>
//               <br></br>
//               <BioName>{"Gespona"}</BioName>
//               <BioText>{"Description"}</BioText>
//             </BioColumn>

//             <BioColumn
//               initial={initial}
//               animate={animate}
//               transition={{ duration: 0.7 + 1 * 0.1 }}
//               key={1}
//             >
//               <StaticImage
//                 src={"../assets/images/djolee.jpg"}
//                 width={300}
//                 alt="photos"
//               />
//               <br></br>
//               <br></br>
//               <BioName>{"Djolee"}</BioName>
//               <BioText>{"Description"}</BioText>
//             </BioColumn>
//           </BioWrapper>
//         </Container>
//       </Section>
//     </>
//   );
// };

// export default Bio;
