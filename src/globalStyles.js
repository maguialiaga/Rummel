import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    transition: 0.3s ease;
    background-color: #fff;
    color: black;
  }
`;

export default GlobalStyle;

// body{
//   /* background:${({ theme }) => theme.color.text}; */
//   color:${({ theme }) => theme.color.text};
//   font-family:${({ theme }) => theme.fonts.body}, sans-serif;
// }

// h1 h2 h3 {
//   font-family:${({ theme }) => theme.fonts.header}, sans-serif;
// }
