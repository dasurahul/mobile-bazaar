import React, { useContext } from "react";
import Items from "../components/Items";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ProductContext from "../store/products-context";

const carouselData = [
  {
    id: 1,
    img: "https://i02.appmifile.com/174_operator_in/28/06/2021/d12f90e3838f2cecc6a01e1b5df7d372.jpg",
    name: "Mi 11 Lite",
  },
  {
    id: 2,
    img: "https://i02.appmifile.com/735_operator_in/25/06/2021/a98bfe57b5ef5506e3d79d44c62874ac.jpg",
    name: "Mi 11X Pro 5G",
  },
  {
    id: 3,
    img: "https://i02.appmifile.com/604_operator_in/28/06/2021/a0b16f5f1781f96783e5019ec75c82b2.jpg",
    name: "Mi 11X 5G",
  },
  {
    id: 4,
    img: "https://i02.appmifile.com/118_operator_in/23/06/2021/38e9e0b3c1c76ba2913349206854e78b.jpg",
    name: "Redmi Note 10S",
  },
  {
    id: 5,
    img: "https://i02.appmifile.com/34_operator_in/23/06/2021/22f2aa99654f9a648e67597a2f814ba5.jpg",
    name: "Redmi Note 10 Pro Max",
  },
  {
    id: 6,
    img: "https://i02.appmifile.com/25_operator_in/25/06/2021/d7921c033314a79aa2ac17f4624b7160.jpg",
    name: "Redmi 9 Power",
  },
];

const Home = () => {
  const productContent = useContext(ProductContext);
  const laptopData = productContent.laptopData;
  const televisionData = productContent.televisionData;
  const phoneData = productContent.phoneData;
  return (
    <React.Fragment>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {carouselData.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.img} alt={data.name} />
            </div>
          );
        })}
      </Carousel>
      <Items
        data={phoneData.slice(0, 8)}
        title="Best Battery Phones"
        subTitle="More than 4000 mAh"
      />
      <Items
        data={laptopData.slice(0, 8)}
        title="Best RAM Laptops"
        subTitle="More than 4GB RAM"
      />
      <Items
        data={televisionData.slice(0, 8)}
        title="Best Android TVs"
        subTitle="One Year Warranty"
      />
    </React.Fragment>
  );
};

export default Home;
