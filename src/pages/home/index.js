import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { Features } from "../../components/Features";
import { Giftset } from "../../components/GiftSet";
import styled from "styled-components";
import React from "react";

export const Home = () => {
  return (
    <StyledWrapper>
      <Header />
      <Features />
      <Products />
      <Giftset />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  background-color: #f2f2f2;
`;
