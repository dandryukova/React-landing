import styled from "styled-components";
import { darken } from "polished";

export const Navbar = (props) => {
  return (
      <StyledUl>
        <Styledli>
          <StyledA class="link--bold" href="/">
            Home page
          </StyledA>
        </Styledli>
        <Styledli>
          <StyledA href="/">Coffee</StyledA>
        </Styledli>
        <Styledli>
          <StyledA href="/">Color filter</StyledA>
        </Styledli>
        <Styledli>
          <StyledA href="/">Coffee combo</StyledA>
        </Styledli>
        <Styledli>
          <StyledA href="/">Giftset</StyledA>
        </Styledli>
        <Styledli>
          <StyledA href="/">Contact</StyledA>
        </Styledli>
      </StyledUl>
  );
};



const StyledUl = styled.ul`
  box-sizing: border-box;
  padding: 230px 0 0 57px;
  min-width: 375px;
`;

const Styledli = styled.li`
  list-style-type: none;
  padding-bottom: 20px;
  text-align: left;
`;

const StyledA = styled.a`
  color: #edf0f5;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  transition: color 0.5s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${darken(0.4, "#edf0f5")};
  }
  &:visited {
    color: #edf0f5;
    &:hover {
      color: ${darken(0.4, "#edf0f5")};
    }
  }
`;
