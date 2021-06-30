import React, { useContext } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Product from "../components/Product";
import ProductsContext from "../store/products-context";

import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: start;
  gap: 10px;
`;

const FiltersContainer = styled.div``;

const Underline = styled.div`
  height: 1px;
  background-color: #ddd;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
        <FiltersContainer>
          <h4 style={{ padding: "20px" }}>Filters</h4>
          <Underline />
          <h5 style={{ padding: "20px" }}>Categories</h5>
          <Underline />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              size="small"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              All
            </Button>
            <Button size="small" style={{ marginBottom: "20px" }}>
              Mobile
            </Button>
            <Button size="small" style={{ marginBottom: "20px" }}>
              Laptop
            </Button>
            <Button size="small" style={{ marginBottom: "20px" }}>
              TV
            </Button>
          </div>
          <Underline />
          <h5 style={{ padding: "20px" }}>Price</h5>
          <Underline />
          <p style={{ padding: "20px" }}>10000Rs</p>
          <Slider
            marks={true}
            min={0}
            max={100000}
            step={10000}
            style={{ marginBottom: "20px" }}
          />
          <Underline />
          <h5 style={{ padding: "20px" }}>RAM</h5>
          <Underline />
          <FormControlLabel
            value="4GB"
            control={<Radio size="small" color="primary" />}
            label="4GB"
            style={{ display: "block", marginTop: "20px" }}
          />
          <FormControlLabel
            value="8GB"
            control={<Radio size="small" color="primary" />}
            label="8GB"
            style={{ display: "block", marginBottom: "20px" }}
          />
          <Underline />
          <h5 style={{ padding: "20px" }}>Brand</h5>
          <Underline />
          <TextField
            type="text"
            placeholder="Search"
            style={{ margin: "20px 0" }}
          />
          <FormControl fullWidth style={{ marginBottom: "20px" }}>
            <InputLabel id="select">Select Brand</InputLabel>
            <Select label-Id="select">
              <MenuItem>Oppo</MenuItem>
              <MenuItem>Realme</MenuItem>
              <MenuItem>Redmi</MenuItem>
            </Select>
          </FormControl>
          <Underline />
        </FiltersContainer>
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
