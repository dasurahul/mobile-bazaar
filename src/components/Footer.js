import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  color: #fff;
  background-color: #222;
`;

const Footer = () => {
  return (
    <Container>
      <h5 style={{ fontWeight: "300" }}>
        &copy; 2021 Mobile Bazaar All rights reserved
      </h5>
    </Container>
  );
};

export default Footer;
