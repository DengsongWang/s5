import Navbar from './Navbar';
import Home from './Home';
import RealNavbar from './RealNavbar';
import logo from './img/logo.PNG'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Dropdown, Form, Link} from 'react-router-dom';
import BuyOnline from './BuyOnline';
import Otherswork from './Otherswork';
import Appointment from './Appointment';
import Appointment2 from './Appointment2';
import Recipes from './Recipes';
import Basket from './Basket';
import BuyOnlineData from './BuyOnlineData';
import { useState } from "react";





function App() {
  // const title='Welcome';
  const {products} = BuyOnlineData;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar></Navbar>
          <div className="logoBar">
            <Link to="/">
              <img src={logo} alt="logo" width="300" height="120" />
            </Link>
          </div>

          <Switch>
            <Route exact path="/07013125">
              <RealNavbar></RealNavbar>
              <Home></Home>
            </Route>

            <Route exact path="/">
              <RealNavbar></RealNavbar>
              <Home></Home>
            </Route>

            <Route path="/BuyOnline">
              <div className="row">
                <Container>
                  <Row>
                    <Col sm={8}>
                      <BuyOnline products={products} onAdd={onAdd}></BuyOnline>
                    </Col>
                    <Col sm={4}>
                      <Basket
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                      ></Basket>
                    </Col>
                  </Row>
                </Container>
                {/* <BuyOnline products={products} onAdd={onAdd}></BuyOnline>
                <Basket
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                ></Basket> */}
              </div>
            </Route>

            <Route path="/Otherswork">
              <Otherswork />
            </Route>

            <Route path="/Appointment">
              <Appointment />
            </Route>

            <Route path="/Appointment2">
              <Appointment2 />
            </Route>

            <Route path="/Recipes">
              <Recipes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;