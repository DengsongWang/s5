import { Container } from "react-bootstrap";
import {
  Row,
  Col,
  Figure,
  Button,
  Image,
  Dropdown,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cheese_cake from "./img/cheese-cake.jpg";
import straw from "./img/strawberry-cake.jpg";
import matcha from "./img/matcha-cake.jpg";
import { BsCartPlusFill } from "react-icons/bs";
import Product from "./Product";


export default function BuyOnline(props) {
  const {products, onAdd} = props;
  return (
    <main
      className="block"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        paddingTop: "1rem",
        marginTop: "1rem",
      }}
    >
      <h1>Featured products </h1>

      <div
        className="row"
      >
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} ></Product>
        ))}
      </div>

      
    </main>
  );
};

// export default BuyOnline;
