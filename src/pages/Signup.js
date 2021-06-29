import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 80px);
  width: 90%;
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 0;
`;
const Card = styled.div`
  padding: 20px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const Signup = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Card>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "400",
            marginBottom: "40px",
          }}
        >
          Sign Up
        </h1>
        <form>
          <TextField
            variant="outlined"
            style={{ marginBottom: "20px" }}
            label="Email"
            type="email"
            placeholder="Enter Email Address"
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
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  {!show && (
                    <VisibilityOutlinedIcon onClick={() => setShow(true)} />
                  )}
                  {show && (
                    <VisibilityOffOutlinedIcon onClick={() => setShow(false)} />
                  )}
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
      </Card>
    </Container>
  );
};

export default Signup;
