import styled from "styled-components";
import { Button } from "../Button";

export const ProductCard = ({ product }) => {
  return (
    <StyledWrapper>
      <StyledImage imageUrl={product.imageUrl} />
      <StyledText>
        <StyledPrice>{product.price}</StyledPrice>
        <StyledTitle>{product.title}</StyledTitle>
        <StyledDescription>{product.description}</StyledDescription>
        <StyledButtonWrap>
          <Button primary>Buy now</Button>
          <Button>Details</Button>
        </StyledButtonWrap>
      </StyledText>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 10;
  min-width: 560px;
  background-color: white;
`;

const StyledImage = styled.div`
  height: 256px;
  width: 235px;
  background: ${(p) => (p.imageUrl ? `url(${p.imageUrl})` : "gray")};
`;

const StyledText = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 25px;
  gap: 20px;
`;

const StyledPrice = styled.span`
  padding: 0;
  margin: 0;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #c7a17a;
`;

const StyledTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #232c38;
  text-transform: uppercase;
`;

const StyledDescription = styled.span`
  display: flex;
  text-align: left;
  max-width: 238px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;

  color: #151d28;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
`;
