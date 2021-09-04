import React from "react";
import "./Subtotal.css";
import NumberFormat from "react-number-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

export default function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Zwischensumme ({basket.length} Gegenstände):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Diese Bestellung beeinhaltet ein
              Geschenk
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />

      <button> Einkauf abschließen </button>
    </div>
  );
}
