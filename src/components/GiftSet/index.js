import { Subtitle } from "../../components/Subtitle";
import { Button } from "../Button";
import styled from "styled-components";
import CoffeeImage from "../../assets/images/giftset-image.png";

export const Giftset = () => {
  return (
    <StyledWrapper>
      <Subtitle primary>Best gift for best friend</Subtitle>
      <Subtitle>giftset</Subtitle>
      <StyledImage></StyledImage>
      <StyledContent>
        <StyledPrice></StyledPrice>
        <StyledProductTitle></StyledProductTitle>
        <StyledDescribtion></StyledDescribtion>
        <StyledParametres></StyledParametres>
        <StyledClicks>
          <Button primary>buy now</Button>
          <Button>details</Button>
        </StyledClicks>
      </StyledContent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled.div`
  background: url(${CoffeeImage});
  position: absolute;
  position: absolute;
  top: 216px;
  left: 130px;
  width: 490px;
  height: 460px;
  z-index: 1;
`;

const StyledContent = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding-left: 300px;
  background-color: #fff;
  width: 794px;
  height: 460px;
  margin-left: 386px;
`;

const StyledPrice = styled.div``;

const StyledProductTitle = styled.div``;

const StyledParametres = styled.div``;

const StyledClicks = styled.div``;

const StyledDescribtion = styled.div``;
