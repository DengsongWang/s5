import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const FrenchRealNavbar = () => {
  return (
    <div className="realNavbar" style={{ width: "60%" }}>
      <div style={{ width: "100%" }}>
        <Row>
          <Col sm style={{ justifyContent: "center", display: "flex" }}>
            <a href="#nav-to-address">Adresse</a>
          </Col>
          <Col sm style={{ justifyContent: "center", display: "flex" }}>
            <a href="#nav-to-aboutus">À propos de nous</a>
          </Col>
          <Col sm style={{ justifyContent: "center", display: "flex" }}>
            <a href="#nav-to-service">Prestations de service</a>
          </Col>
        </Row>
        
      </div>
    </div>
  );
};

export default FrenchRealNavbar;
