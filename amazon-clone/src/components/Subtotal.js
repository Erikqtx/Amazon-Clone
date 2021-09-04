import React from "react";
import "./Subtotal.css";
import NumberFormat from "react-number-format";

export default function Subtotal() {
  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Zwischensumme (0 Gegenstände): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Diese Bestellung beeinhaltet ein
              Geschenk
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />

      <button> Einkauf abschließen </button>
    </div>
  );
}
