import { Subtitle } from "../../components/Subtitle";
import { ProductCard } from "../ProductCard";
import styled from "styled-components";

const products = [
  {
    imageUrl: "",
    price: 99.35,
    title: "revo morning",
    description: "Bitter, sweet aftertaste, floral scent",
  },
  {
    imageUrl: "",
    price: 85.35,
    title: "revo origin",
    description: "balance, bitter aftertaste, chocolate taste",
  },
  {
    imageUrl: "",
    price: 139.35,
    title: "revo everyday",
    description: "Sweet aftertaste, less bitter, strawberry sour taste",
  },
  {
    imageUrl: "",
    price: 75.35,
    title: "bold revo",
    description: "bold, bitter, traditional",
  },
];

export const Products = () => {
  return (
    <StyledProdList>
      <StyledBlock></StyledBlock>
      <Subtitle primary>Choose your favourite</Subtitle>
      <Subtitle>standard guaran</Subtitle>
      <StyledProductCards>
        {products.map((item) => {
          return <ProductCard product={item} />;
        })}
      </StyledProductCards>
    </StyledProdList>
  );
};

const StyledProdList = styled.div`
  position: relative;
  top: 0;
  right: 0;
  margin-bottom: 128px;
`;

const StyledBlock = styled.div`
  height: 894px;
  width: 380px;
  background-color: #415167;
  position: absolute;
`;

const StyledProductCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`;
