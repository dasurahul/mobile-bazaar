import React from "react";
import Image from "material-ui-image";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

const ProductContainer = styled.div`
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-weight: 500;
  margin-bottom: 20px;
`;
const Price = styled.div`
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Product = ({ data }) => {
  let name = data.name;
  if (name.length > 20) {
    name = name.slice(0, 20).concat("...");
  }
  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={data.img}
          alt={data.name}
          style={{ objectFit: "contain" }}
          disableSpinner
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Price>Price: &#8377;{data.price}</Price>
      <Buttons>
        <Button variant="contained" color="primary" size="small">
          Add to Cart
        </Button>
        <Button variant="contained" color="primary" size="small">
          View Item
        </Button>
      </Buttons>
    </ProductContainer>
  );
};

export default Product;
