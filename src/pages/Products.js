import React, { useContext } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import ProductsContext from "../store/products-context";
import Filters from "../components/Filters";

import styled from "styled-components";
const Container = styled.div``;

const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: start;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 90%;
  margin: 0 auto;
`;

const Products = () => {
  const productsContext = useContext(ProductsContext);
  const laptopData = productsContext.laptopData;
  const televisionData = productsContext.televisionData;
  const phoneData = productsContext.phoneData;
  return (
    <Container>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        style={{ padding: "20px" }}
      >
        <Link to="/" style={{ color: "#222", textDecoration: "none" }}>
          Home
        </Link>
        <Typography color="textPrimary">Products</Typography>
      </Breadcrumbs>
      <MainContainer>
        <Filters />
        <ProductsContainer>
          {laptopData.map((data) => (
            <Product key={data.id} data={data} />
          ))}
          {phoneData.map((data) => (
            <Product key={data.id} data={data} />
          ))}
          {televisionData.map((data) => (
            <Product key={data.id} data={data} />
          ))}
        </ProductsContainer>
      </MainContainer>
    </Container>
  );
};

export default Products;
