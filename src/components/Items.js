import React from "react";
import Button from "@material-ui/core/Button";

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
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 600px) {
    justify-content: center;
    gap: 0px;
  }
`;

const Item = styled.div`
  width: 150px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    border: 1px solid #ccc;
  }
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  transition: transform 200ms;
  &:hover {
    transform: scale(1.05);
  }
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
  return (
    <Container>
      <Head>
        <div>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </div>
        <Button variant="contained" color="primary">
          View All
        </Button>
      </Head>
      <Underline></Underline>
      <Body>
        {data.map((item) => (
          <Item key={item.id}>
            <Image src={item.img} alt={item.name} />
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
