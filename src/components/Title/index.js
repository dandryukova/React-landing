import styled from "styled-components";

export const Title = () => {
  return (
    <StyledTitle>
      <div>Your</div>
      <StyledHighlightTitle isHighlight={true}>
        Personalizid
      </StyledHighlightTitle>
      <div>Coffee</div>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  text-align: left;
  position: absolute;
  top: 504px;
  left: 130px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 70px;
  color: #415167;
  text-transform: uppercase;
  z-index: 2;
`;

const StyledHighlightTitle = styled.div`
  ${(p) =>
    p.isHighlight && `color: white; background: #c7a17a; padding: 0px 15px;`}
`;
