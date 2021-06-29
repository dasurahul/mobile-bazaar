import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 80px);
  width: 90%;
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Signup = () => {
  return (
    <Container>
      <h1
        style={{ textAlign: "center", fontWeight: "400", marginBottom: "40px" }}
      >
        Sign Up
      </h1>
      <form>
        <TextField
          variant="outlined"
          style={{ marginBottom: "20px" }}
          label="Email"
          type="email"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          style={{ marginBottom: "20px" }}
          label="Password"
          type="password"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          style={{ marginBottom: "20px" }}
        >
          Sign Up
        </Button>
      </form>
      <p style={{ textAlign: "center", color: "#555" }}>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#303F9F" }}>
          Log In
        </Link>
      </p>
    </Container>
  );
};

export default Signup;
