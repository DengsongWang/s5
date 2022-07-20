
import {FaBeer} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import {Redirect} from "react-router-dom";
// import { BrowserRouter as useRouter, Route, Switch } from 'react-router-dom';

import {
  Button
} from "react-bootstrap";


const goTo = "goto";


const Navbar = () => {

    
    return (
      <div className="navbar">
        {/* <p style={{float: 'left'}}>Open from 9:00 to 21:00 Tuesday - Sunday!</p> */}
        <div style={{ width: "100%" }}>
          <Row>
            <Col sm={7}>
              <p style={{ float: "left" }}>
                Open from 9:00 to 21:00 Tuesday - Sunday!
              </p>
            </Col>
            <Col sm={5}>
              <Row>
                <Col
                  sm
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <Link to="/">
                    <strong style={{ color: "#BFA524", fontSize: "15px" }}>
                      Homepage
                    </strong>
                  </Link>
                </Col>
                <Col
                  sm
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <Link to="/Appointment">
                    <strong style={{ color: "#BFA524", fontSize: "15px" }}>
                      Appointment
                    </strong>
                  </Link>
                </Col>
                <Col
                  sm
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <Link to="/Otherswork">
                    <strong style={{ color: "#BFA524", fontSize: "15px" }}>
                      Other's work
                    </strong>
                  </Link>
                </Col>
                <Col
                  sm
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <Link to="/BuyOnline">
                    <strong style={{ color: "#BFA524", fontSize: "15px" }}>
                      Buy online
                    </strong>
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col sm style={{ justifyContent: "center", display: "flex" }}></Col>
          </Row>
        </div>
      </div>
    );
}
 
export default Navbar;