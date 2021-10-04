import { Subtitle } from "../../components/Subtitle";
import styled from "styled-components";
import IconFirst from "../../assets/images/features-ic-1.svg";
import IconSecond from "../../assets/images/features-ic-2.svg";
import IconThird from "../../assets/images/features-ic-3.svg";
import IconFourth from "../../assets/images/features-ic-4.svg";

export const Features = () => {
  return (
    <StyledWrapper>
      <Subtitle primary>Your Personalized Coffee</Subtitle>
      <Subtitle>COFFEE COMBO</Subtitle>
      <StyledCards>
        <StyledItem>
          <StyledIcon1></StyledIcon1>
          <StyledItemTitle>Source</StyledItemTitle>
          <StyledItemDescribtion>
            Arabica and Robusta coffee beans meet international standards.
          </StyledItemDescribtion>
        </StyledItem>
        <StyledItem>
          <StyledIcon2></StyledIcon2>
          <StyledItemTitle>Source</StyledItemTitle>
          <StyledItemDescribtion>
            Arabica and Robusta coffee beans meet international standards.
          </StyledItemDescribtion>
        </StyledItem>
        <StyledItem>
          <StyledIcon3></StyledIcon3>
          <StyledItemTitle>Source</StyledItemTitle>
          <StyledItemDescribtion>
            Arabica and Robusta coffee beans meet international standards.
          </StyledItemDescribtion>
        </StyledItem>
        <StyledItem>
          <StyledIcon4></StyledIcon4>
          <StyledItemTitle>Source</StyledItemTitle>
          <StyledItemDescribtion>
            Arabica and Robusta coffee beans meet international standards.
          </StyledItemDescribtion>
        </StyledItem>
      </StyledCards>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 68px;
  margin-bottom: 130px;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 226px;
`;

const StyledIcon1 = styled.img.attrs({
  src: `${IconFirst}`,
})`
  margin-bottom: 45px;
  width: 80px;
  height: 80px;
`;
const StyledIcon2 = styled.img.attrs({
  src: `${IconSecond}`,
})`
  margin-bottom: 45px;
  width: 78px;
  height: 80px;
`;
const StyledIcon3 = styled.img.attrs({
  src: `${IconThird}`,
})`
  margin-bottom: 45px;
  width: 80px;
  height: 80px;
`;
const StyledIcon4 = styled.img.attrs({
  src: `${IconFourth}`,
})`
  margin-bottom: 45px;
  width: 74px;
  height: 80px;
`;

const StyledItemTitle = styled.div`
  margin-bottom: 12px;
`;

const StyledItemDescribtion = styled.div``;
