import styled from "styled-components";

export const Subtitle = (props) => {
  return (
    <StyledSubtitle primary={props.primary}>{props.children}</StyledSubtitle>
  );
};

const StyledSubtitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: ${(props) => (props.primary ? "300" : "bold")};
  font-size: ${(props) => (props.primary ? "16px" : "24px")};
  line-height: ${(props) => (props.primary ? "22px" : "28px")};
  color: #415167;
  padding: ${(props) => (props.primary ? "88px 0 10px 0" : "0 0 88px 0")};
  text-transform: ${(props) => (props.primary ? "capitalize" : "uppercase")};
`;
