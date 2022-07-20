import { Link } from "react-router-dom";
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
// import {push} from "react-router-redux";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import recipes from "./img/recipes.PNG";
import { BsJustifyRight } from "react-icons/bs";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.13;
  const totalPrice = itemsPrice + taxPrice;


  function checkout() {
    prompt("Please enter your full address:");
    alert("You have completed the checkout!");
    
  }
  return (
    <aside className="block">
      <h2
        style={{
          color: "#BFA524",
          fontSize: "35px",
          paddingTop: "30px",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        Cart Items
      </h2>

      <div className="text">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-1">Items_Price</div>
              <div className="col-2">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-1">Tax</div>
              <div className="col-2">${taxPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong
                  style={{
                    color: "#BFA524",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  Total
                </strong>
              </div>
              <div className="col-2">
                <strong
                  style={{
                    color: "#BFA524",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  ${totalPrice.toFixed(2)}
                </strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button
                onClick={
                  () => checkout() 
                  
                }
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
