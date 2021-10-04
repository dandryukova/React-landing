import styled from "styled-components";
import logoImage from "../../assets/images/logoImage.png";

export const Logo = () => {
  return <StyledLogo></StyledLogo>;
};

const StyledLogo = styled.div`
  background-image: url(${logoImage});
  width: 109px;
  height: 37px;
  position: absolute;
  top: 76px;
  left: 137px;
`;
