import styled from "styled-components";
import { lighten } from "polished";

export const Button = (props) => {
  return (
    <StyledButton primary={props.primary} isAbout={true}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(props) =>
    props.primary
      ? `background: #C7A17A;
  border: none;
  border-radius: 19px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #f9fbff;
  text-transform: uppercase;
  padding: 0 25px;
  align-items: center;
  cursor: pointer;
  max-width: 134px;
  transition: background 0.5s ease-in-out;
  &:hover {
    background: ${lighten(0.1, "#C7A17A")};
  }`
      : `color: #415167;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  background: none;
  text-transform: uppercase;
  transition: color 0.5s ease-in-out;
  &:hover {
    color: ${lighten(0.4, "#415167")};
  }`}
`;

// color: #415167;
//                         font-family: "Nunito";
//                         font-style: normal;
//                         font-weight: 300;
//                         font-size: 16px;
//                         line-height: 24px;
//                         text-transform: uppercase;
//                         transition: color 0.5s ease-in-out;

//                         &:hover {
//                             color: lighten($color: #415167, $amount: 40);
//                         }
