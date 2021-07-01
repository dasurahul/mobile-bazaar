import React from "react";

import styled from "styled-components";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const FiltersContainer = styled.div``;
const Underline = styled.div`
  height: 1px;
  background-color: #ddd;
`;
const Filters = () => {
  return (
    <FiltersContainer>
      <h4 style={{ padding: "20px" }}>Filters</h4>
      <Underline />
      <h5 style={{ padding: "20px" }}>Categories</h5>
      <Underline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 20px",
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
      <div style={{ padding: "0 20px" }}>
        <Slider
          marks={true}
          min={0}
          max={100000}
          step={10000}
          style={{ marginBottom: "20px" }}
        />
      </div>
      <Underline />
      <h5 style={{ padding: "20px" }}>RAM</h5>
      <Underline />
      <FormControlLabel
        value="4GB"
        control={<Radio size="small" color="primary" />}
        label="4GB"
        style={{ display: "block", marginTop: "20px", padding: "0 20px" }}
      />
      <FormControlLabel
        value="8GB"
        control={<Radio size="small" color="primary" />}
        label="8GB"
        style={{ display: "block", marginBottom: "20px", padding: "0 20px" }}
      />
      <Underline />
      <h5 style={{ padding: "20px" }}>Brand</h5>
      <Underline />
      <div style={{ padding: "20px" }}>
        <TextField
          type="text"
          placeholder="Search"
          fullWidth
          style={{ margin: "20px 0" }}
        />
      </div>
      <div style={{ padding: "20px", marginBottom: "20px" }}>
        <FormControl fullWidth>
          <InputLabel id="select">Select Brand</InputLabel>
          <Select label-Id="select">
            <MenuItem>Oppo</MenuItem>
            <MenuItem>Realme</MenuItem>
            <MenuItem>Redmi</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Underline />
    </FiltersContainer>
  );
};

export default Filters;
