import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import cheese_cake from "./img/cheese-cake.jpg";
import straw from "./img/strawberry-cake.jpg";
import matcha from "./img/matcha-cake.jpg";
import Form from "react-bootstrap/Form";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div
      style={{
        backgroundColor: "#263c8b96",
        paddingTop: "1rem",
        marginTop: "1rem",
        borderRadius: "0.5rem",
        display: "table-cell",
        textAlign: "center",
      }}
    >
      <img className="small" src={product.image} alt={product.name} />
      <h3
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          paddingTop: "0.5rem",
          color: "#BFA524",
        }}
      >
        {product.name}
      </h3>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "#BFA524",
        }}
      >
        ${product.price}
      </div>

      <input type="checkbox" id="Gluten" name="Gluten" value="Gluten free" />
      <label for="Gluten">Gluten free</label>
      <input type="checkbox" id="Gluten" name="Gluten" value="Gluten free" />
      <label for="Gluten">Low fat cream</label>

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <button
          style={{
            width:"300px"
          }}
          onClick={() => onAdd(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
