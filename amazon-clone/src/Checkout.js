import React from "react";
import "./Checkout.css";
import Subtotal from "./components/Subtotal";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/credit/img18/cbcc/swp/table_swp_1500x450_4.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Dein Einkaufswagen</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
