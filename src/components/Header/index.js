import { Navbar } from "../../components/Navbar";
import { Title } from "../../components/Title";
import { Logo } from "../../components/Logo";
import styled from "styled-components";
import bannerImage from "../../assets/images/banner-img.png";

export const Header = () => {
  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        <Logo />
        <Title />
        <StyledLeftBlock></StyledLeftBlock>
        <StyledBannerImage></StyledBannerImage>
        <StyledHeaderMenu>
          <Navbar/>
        </StyledHeaderMenu>
      </StyledHeaderWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 1440px;
  background-color: #f2f2f2;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 768px;
  width: 100%;
  margin-bottom: 87px;
`;

const StyledLeftBlock = styled.div`
  display: flex;
  min-width: 385px;
`;

const StyledBannerImage = styled.div`
  background: url(${bannerImage}) no-repeat;
  height: 768px;
  width: 688px;
  background-position: center;
  z-index: 1;
`;

const StyledHeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #415167;
  position: relative;
`;
