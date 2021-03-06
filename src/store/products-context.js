import React from "react";

const ProductsContext = React.createContext();

export const ProductsContextProvider = (props) => {
  const laptopData = [
    {
      id: 1,
      img: "https://rukminim1.flixcart.com/image/416/416/koixwnk0/computer/9/p/x/na-thin-and-light-laptop-mi-original-imag2ygskfu3zew5.jpeg?q=70",
      name: "Mi Notebook 14 Core i5 10th Gen - (8 GB/256 GB SSD/Windows 10 Home) JYU4298IN Thin and Light Laptop  (14 inch, Silver, 1.50 kg)",
      price: 43999,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 2,
      img: "https://rukminim1.flixcart.com/image/312/312/kcp4osw0/computer/t/f/z/asus-na-original-imaftrgwna6snfn8.jpeg?q=70",
      name: "ASUS ROG Strix G15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Ti/144 Hz) G512LI-HN094T Gaming Laptop  (15.6 inch, Black Plastic, 2.3 kg)",
      price: 71990,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 3,
      img: "https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/t/d/f/hp-original-imaftyzafphshjge.jpeg?q=70",
      name: "HP 14s Core i3 11th Gen - (8 GB/256 GB SSD/Windows 10 Home) 14s- DY2501TU Thin and Light Laptop  (14 inch, Natural Silver, 1.46 kg, With MS Office)",
      price: 41490,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 4,
      img: "https://rukminim1.flixcart.com/image/312/312/kcm9t3k0/computer/q/x/r/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg?q=70",
      name: "HP Pavilion Gaming Ryzen 5 Quad Core 3550H - (8 GB/1 TB HDD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) 15-ec0101AX Gaming Laptop  (15.6 inch, Black, 2.04 kg)",
      price: 49990,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 5,
      img: "https://rukminim1.flixcart.com/image/312/312/kjlrb0w0/computer/a/k/b/asus-original-imafz522ntfk9hwx.jpeg?q=70",
      name: "ASUS VivoBook 15 Core i3 10th Gen - (8 GB/1 TB HDD/Windows 10 Home) X515JA-EJ322TS Thin and Light Laptop  (15.6 inch, Transparent Silver, 1.80 kg, With MS Office)",
      price: 37990,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 6,
      img: "https://rukminim1.flixcart.com/image/312/312/khdqnbk0/computer/5/d/e/apple-original-imafxfyqkdfxqjab.jpeg?q=70",
      name: "APPLE MacBook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
      price: 92900,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 7,
      img: "https://rukminim1.flixcart.com/image/312/312/kcc9q4w0/computer/h/t/g/acer-na-gaming-laptop-original-imafthr8aa4rsjpn.jpeg?q=70",
      name: "acer Aspire 7 Ryzen 5 Quad Core 3550H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Ti) A715-41G-R7YZ Gaming Laptop  (15.6 inch, Charcoal Black, 2.15 kg)",
      price: 50990,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 8,
      img: "https://rukminim1.flixcart.com/image/312/312/kk2wl8w0/computer/f/k/b/na-gaming-laptop-lenovo-original-imafzgdkvx9guy8q.jpeg?q=70",
      name: "Lenovo Ideapad Gaming 3 Ryzen 5 Hexa Core 4600H - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/120 Hz) 15ARH05 Gaming Laptop  (15.6 inch, Onyx Black, 2.2 kg)",
      price: 62990,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 9,
      img: "https://rukminim1.flixcart.com/image/312/312/kex5ci80/computer/f/n/k/dell-na-gaming-laptop-original-imafvhkmrntmrfqz.jpeg?q=70",
      name: "DELL G5 15 SE Ryzen 7 Octa Core 4800H - (8 GB/512 GB SSD/Windows 10 Home/6 GB Graphics/AMD Radeon RX 5600M/120 Hz) G5 5505 Gaming Laptop  (15.6 inch, Silver, 2.5 kg)",
      price: 87990,
      details: "8 GB DDR4 RAM",
    },
    {
      id: 10,
      img: "https://rukminim1.flixcart.com/image/312/312/kpsnzww0/computer/h/r/l/dell-gaming-g5-5500-gaming-laptop-dell-original-imag3y4wycuk4tnn.jpeg?q=70",
      name: "DELL GAMING G5 SERIES Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10/4 GB Graphics/NVIDIA GeForce GTX 1650Ti/120 Hz) G5 5500 Gaming Laptop  (15.6 inch, Black, 2.3 kg, With MS Office)",
      price: 79990,
      details: "8 GB DDR4 RAM",
    },
  ];
  const televisionData = [
    {
      id: 1,
      img: "https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/television/r/b/m/kd-50x74-sony-original-imag2jyupyqmcctu.jpeg?q=70",
      name: "SONY X74 Bravia 125.7 cms (50 inch) Ultra HD (4K) LED Smart Android TV  (KD-50X74)",
      price: 70999,
      details: "Operating System: Android",
    },
    {
      id: 2,
      img: "https://rukminim1.flixcart.com/image/312/312/kq6yefk0/television/s/c/z/l43m4-4ain-mi-original-imag496eqghnqhpu.jpeg?q=70",
      name: "Mi 4X 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV",
      price: 28999,
      details: "Operating System: Android",
    },
    {
      id: 3,
      img: "https://rukminim1.flixcart.com/image/312/312/kosxzm80/television/a/7/8/rmv2004-realme-original-imag36hwea8zmnvy.jpeg?q=70",
      name: "realme 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Handsfree Voice Search and Dolby Vision & Atmos  (RMV2004)",
      price: 28999,
      details: "Operating System: Android",
    },
    {
      id: 4,
      img: "https://rukminim1.flixcart.com/image/312/312/kpmy8i80/television/q/u/v/u-series-50-u1s-50uc1a00-oneplus-original-imag3tpydevtfnd9.jpeg?q=70",
      name: "OnePlus U1S 126 cm (50 inch) Ultra HD (4K) LED Smart Android TV  (50UC1A00)",
      price: 39999,
      details: "Operating System: Android",
    },
    {
      id: 5,
      img: "https://rukminim1.flixcart.com/image/312/312/kingqkw0/television/w/b/y/motorola-43sauhdmq-original-imafydykpnw3hzgv.jpeg?q=70",
      name: "MOTOROLA ZX Pro 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Wireless Gamepad  (50SAUHDMQ)",
      price: 38999,
      details: "Operating System: Android",
    },
    {
      id: 6,
      img: "https://rukminim1.flixcart.com/image/312/312/kc54ivk0/television/y/c/u/mi-l50m5-5ain-original-imaftc5fzuhfdvzm.jpeg?q=70",
      name: "Mi 4X 125.7 cm (50 inch) Ultra HD (4K) LED Smart Android TV",
      price: 34999,
      details: "Operating System: Android",
    },
    {
      id: 7,
      img: "https://rukminim1.flixcart.com/image/312/312/kkoc70w0/television/o/x/j/l55m6-eqg-mi-original-imafzyrjdtba6bqf.jpeg?q=70",
      name: "Mi Q1 138.8 cm (55 inch) QLED Ultra HD (4K) Smart Android TV",
      price: 57999,
      details: "Operating System: Android",
    },
    {
      id: 8,
      img: "https://rukminim1.flixcart.com/image/312/312/kfzq8i80/television/c/s/h/motorola-43sauhdmg-original-imafwc56xph9zduu.jpeg?q=70",
      name: "MOTOROLA Revou 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Atmos and Dolby Vision  (43SAUHDMG)",
      price: 31999,
      details: "Operating System: Android",
    },
    {
      id: 9,
      img: "https://rukminim1.flixcart.com/image/312/312/kfwvcsw0/television/g/4/u/nokia-50tauhdn-original-imafw8xggpjge2hk.jpeg?q=70",
      name: "Nokia 126 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Sound by Onkyo  (50TAUHDN)",
      price: 37999,
      details: "Operating System: Android",
    },
    {
      id: 10,
      img: "https://rukminim1.flixcart.com/image/312/312/keuagsw0/television/y/e/y/panasonic-th-50hx450dx-th-50hx450dx-original-imafvf3sbzgzygu2.jpeg?q=70",
      name: "Panasonic 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV  (TH-50HX450DX)",
      price: 37999,
      details: "Operating System: Android",
    },
  ];
  const phoneData = [
    {
      id: 1,
      img: "https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/d/f/a/samsung-galaxy-m01-sm-m015gzbdins-original-imafscggmdqgt62q.jpeg?q=70",
      name: "SAMSUNG Galaxy M01 (Blue, 32 GB)  (3 GB RAM)",
      price: 8442,
      details: "4000 mAh Battery",
    },
    {
      id: 2,
      img: "https://rukminim1.flixcart.com/image/150/150/kbb49zk0/mobile/x/f/u/tecno-spark-power-2-lc8-original-imafszvfcwxdgngz.jpeg?q=70",
      name: "Tecno Spark Power 2",
      price: 9999,
      details: "6000 mAh Battery",
    },
    {
      id: 3,
      img: "https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70",
      name: "SAMSUNG Galaxy M11 (Black, 32 GB)  (3 GB RAM)",
      price: 9998,
      details: "5000 mAh Battery",
    },
    {
      id: 4,
      img: "https://rukminim1.flixcart.com/image/150/150/kcauaa80/mobile/2/p/u/poco-m2-pro-mzb9621in-original-imaftg9fkdpgbgxq.jpeg?q=70",
      name: "POCO M2 Pro (Two Shades of Black, 64 GB)  (6 GB RAM)",
      price: 13999,
      details: "5000 mAh Battery",
    },
    {
      id: 5,
      img: "https://rukminim1.flixcart.com/image/312/312/k79dd3k0/mobile/z/p/h/oppo-reno3-pro-cph2035-original-imafpj4fgfrzskf3.jpeg?q=70",
      name: "OPPO Reno3 Pro (Auroral Blue, 128 GB)  (8 GB RAM)",
      price: 27990,
      details: "4025 mAh Battery",
    },
    {
      id: 6,
      img: "https://rukminim1.flixcart.com/image/150/150/kcm9t3k0/mobile/p/p/q/vivo-x50-pro-vivo-2006-original-imaftppahwbc6myx.jpeg?q=70",
      name: "ViVO X50 Pro (Alpha Grey, 256 GB)  (8 GB RAM)",
      price: 49990,
      details: "4315 mAh Battery",
    },
    {
      id: 7,
      img: "https://rukminim1.flixcart.com/image/150/150/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg?q=70",
      name: "SAMSUNG Galaxy A21s (Black, 64 GB)  (4 GB RAM)",
      price: 17999,
      details: "5000 mAh Battery",
    },
    {
      id: 8,
      img: "https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
      name: "SAMSUNG Galaxy F12 (Sea Green, 64 GB)  (4 GB RAM)#JustHere",
      price: 10999,
      details: "6000 mAh Lithium-ion Battery",
    },
    {
      id: 9,
      img: "https://rukminim1.flixcart.com/image/312/312/kb1470w0/mobile/6/r/s/oppo-a12-cph2083-original-imafsh2hvz4f2sa5.jpeg?q=70",
      name: "OPPO A12 (Black, 32 GB)  (3 GB RAM)",
      price: 7990,
      details: "4230 mAh Battery",
    },
    {
      id: 10,
      img: "https://rukminim1.flixcart.com/image/312/312/kpbipow0/mobile/c/x/1/f19-cph2219-oppo-original-imag3kvkwxhhxjha.jpeg?q=70",
      name: "OPPO F19 (Space Silver, 128 GB)  (6 GB RAM)",
      price: 17990,
      details: "5000 mAh Battery",
    },
  ];
  const value = {
    laptopData,
    televisionData,
    phoneData,
  };
  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
