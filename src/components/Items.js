import React from "react";
import Image from "material-ui-image";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  margin: 10px 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const Head = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  margin-bottom: 10px;
`;
const SubTitle = styled.h4`
  font-size: 14px;
  font-weight: 300;
  color: #444;
`;

const Underline = styled.div`
  height: 1px;
  background-color: #ccc;
`;

const Body = styled.div`
  padding: 20px;
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Item = styled.div`
  min-width: 150px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  &:hover {
    transform: scale(1.05);
  }
  transition: transform 300ms;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin: 10px 0;
`;
const Details = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
  color: green;
`;
const Price = styled.div`
  font-size: 13px;
  color: #444;
`;

const Items = ({ data, title, subTitle }) => {
  const history = useHistory();
  return (
    <Container>
      <Head>
        <div>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/products")}
        >
          View All
        </Button>
      </Head>
      <Underline></Underline>
      <Body>
        {data.map((item) => (
          <Item key={item.id}>
            <ImageContainer>
              <Image
                src={item.img}
                alt={item.name}
                style={{ objectFit: "contain" }}
                disableSpinner
              />
            </ImageContainer>
            <Name>
              {item.name.length > 20
                ? item.name.substring(0, 20).concat("...")
                : item.name}
            </Name>
            <Details>{item.details}</Details>
            <Price>Now &#8377;{item.price}</Price>
          </Item>
        ))}
      </Body>
    </Container>
  );
};

export default Items;
