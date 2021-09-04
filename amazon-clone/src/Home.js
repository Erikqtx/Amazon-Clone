import React from "react";
import "./Home.css";
import Product from "./components/Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81ptHHBacML._SX3000_.jpg"
          alt="Prime Video"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Sony Playstation 5"
            price={499.99}
            image="https://m.media-amazon.com/images/I/51zylG5gxfS._SL1000_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Kenwood Titanium Chef Patissier XL KWL90.034SI"
            price={889.0}
            image="https://m.media-amazon.com/images/I/712cUxIP7jL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="SanDisk Extreme microSDXC"
            price={18.75}
            image="https://m.media-amazon.com/images/I/81pngNVLPhL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="DualSense Wireless Controller Midnight Black"
            price={69.99}
            image="https://m.media-amazon.com/images/I/614ABp4Y9-L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Crucial MX500 500GB CT500MX500SSD1"
            price={56.9}
            image="https://m.media-amazon.com/images/I/81w0f+QufZL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Gigabyte GeForce RTX 3090 Gaming OC 24GB GDDR6X Grafikkarte"
            price={2878.99}
            image="https://m.media-amazon.com/images/I/71BY4aR5TnL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
