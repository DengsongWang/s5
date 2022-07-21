import { useState, useEffect } from "react";

import logo from "./img/logo.PNG";
import cakemake from "./img/cakemake.jpg";
import onlineshopping from "./img/onlineshopping.jpg";
import map from "./img/map.PNG";
import cheese_cake from "./img/cheese-cake.jpg";
import straw from "./img/strawberry-cake.jpg";
import cake2 from "./img/cake2.jpg";
import cake1 from "./img/cake1.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Figure, Button, Image } from "react-bootstrap";
import Navbar from "./Navbar";

const French = () => {
  // let name = 'mario';

  const [age, setAge] = useState(28);

  return (
    <div className="french">
      <div className="french">
        <Link
          to="/"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "#BFA524",
            color: "#BFA524",
            fontSize: "25px",
          }}
        >
          English
        </Link>
      </div>

      <Container>
        <Row>
          <Col
            sm
            style={{
              backgroundColor: "#263c8b96",
              // height: '400px',
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Figure
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                paddingTop: "20px",
              }}
            >
              <Figure.Image
                width={380}
                height={180}
                alt="cakemake"
                src={cakemake}
              />
              <Figure.Caption
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontSize: "25px",
                  }}
                >
                  Faire des gâteaux dans notre magasin
                </p>
              </Figure.Caption>
              <Row style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                <Col
                  style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                  xs={{ offset: 1 }}
                >
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      color: "#BFA524",
                      borderColor: "#BFA524",
                    }}
                  >
                    <Link to="/Appointment" className="links">
                      <p
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          fontSize: "15px",
                        }}
                      >
                        Rendez-vous
                      </p>
                    </Link>
                  </Button>
                </Col>
                <Col style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      color: "#BFA524",
                      borderColor: "#BFA524",
                    }}
                  >
                    <Link to="/Otherswork" className="links">
                      <p
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          fontSize: "15px",
                        }}
                      >
                        Le travail des autres
                      </p>
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Figure>
          </Col>
          <Col xs={2}></Col>
          <Col
            sm
            style={{
              backgroundColor: "#263c8b96",
              // height: '400px',
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Figure
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                paddingTop: "20px",
              }}
            >
              <Figure.Image
                width={380}
                height={180}
                alt="onlineshopping"
                src={onlineshopping}
              />
              <Figure.Caption
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontSize: "25px",
                  }}
                >
                  Pâtisserie
                </p>
              </Figure.Caption>
              <Row style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                <Col
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    textAlign: "center",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderColor: "#BFA524",
                    }}
                  >
                    <Link className="links" to="/BuyOnline">
                      <p
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          fontSize: "15px",
                        }}
                      >
                        Acheter en ligne
                      </p>
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Figure>
          </Col>
        </Row>
      </Container>

      {/* Address */}
      <Container style={{ marginTop: "130px" }}>
        <Row>
          <Col style={{ backgroundColor: "#263c8b96" }}>
            <Row style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
              {/* address text */}
              <Col
                sm
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <h1
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    color: "#BFA524",
                    paddingTop: "20px",
                  }}
                >
                  <div className="address-text">
                    <p style={{ fontSize: "30px" }}>
                      <a
                        id="nav-to-address"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                      >
                        Studio de boulangerie de nuit étoilée
                      </a>
                    </p>
                  </div>
                  <div className="address-text" style={{ paddingTop: "20px" }}>
                    <p>647 - 884 - 9622</p>
                  </div>
                  <div className="address-text" style={{ paddingTop: "20px" }}>
                    <p>305, rue Rideau</p>
                  </div>
                  <div className="address-text">
                    <p>Ottawa, ON</p>
                  </div>
                  <div className="address-text">
                    <p>K1N 5Y6</p>
                  </div>

                  <div className="address-text" style={{ paddingTop: "20px" }}>
                    <p>~~Heures~~</p>
                  </div>
                  <div className="address-text">
                    <p>Mar - Dim: 9:00 ~ 21:00</p>
                  </div>
                  <div className="address-text">
                    <p>287680fw@gmail.com</p>
                  </div>
                  <div className="address-text">
                    <p>
                      (veuillez contacter cet e-mail si vous avez des questions)
                    </p>
                  </div>
                </h1>
              </Col>

              {/* picture of map */}
              <Col
                sm
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                {/* <Image src={map} fluid={false} alt="map" width='100%' height='100%' className="img-fluid">

                                </Image> */}
                <img
                  src={map}
                  className="img-fluid"
                  alt="map"
                  width="70%"
                ></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* About us */}
      <Container style={{ marginTop: "130px", backgroundColor: "#263c8b96" }}>
        <div className="address-text">
          <p style={{ fontSize: "40px", paddingTop: "15px" }}>
            <a
              id="nav-to-aboutus"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              À propos de nous
            </a>
          </p>
        </div>
        <div className="address-text">
          <p
            style={{
              fontSize: "25px",
              paddingTop: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              textIndent: " 2em",
            }}
          >
            Studio de boulangerie de nuit étoilée est une expérience de
            fabrication de gâteaux située dans Centre-ville d'Ottawa. En tant
            que notre précieux client, vous pouvez entrer dans le magasin pour
            découvrir le plaisir de faire des gâteaux, ou acheter notre grande
            variété de gâteaux en magasin ou en ligne.
          </p>
        </div>
      </Container>

      {/* Services */}
      <a id="nav-to-service"></a>
      <Container style={{ marginTop: "130px", backgroundColor: "#263c8b96" }}>
        <div className="address-text">
          <p style={{ fontSize: "40px", paddingTop: "15px" }}>
            <a
              id="nav-to-service"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              Nos services
            </a>
          </p>
        </div>

        <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
          <p style={{ backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "32px" }}>
            Expérience en pâtisserie :
          </p>
        </div>

        <div className="address-text">
          <p style={{ fontSize: "22px", textIndent: " 2em" }}>
            Faites votre propre gâteau de style dans notre magasin avec tous les
            ingrédients que nous apporter! Vous pouvez choisir n'importe quelle
            planche à gâteau que vous voulez, qu'elle soit ronde, carré, simple
            ou multicouche, nous avons tout. Même si vous voulez un planche à
            gâteau de forme personnalisée pour votre création unique, nous
            ferons le plateau à gâteau unique pour vous avec d'autres formes. De
            plus, vous pouvez choisissez parmi notre crème jusqu'à des dizaines
            de couleurs, ainsi qu'un variété de bibelots pour rendre votre
            gâteau plus cool. De plus, vous pouvez emporter votre travail à la
            maison et en profiter, mais n'oubliez pas de prendre un image!
          </p>
        </div>

        <div className="address-text">
          <Link
            to="/Recipes"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: "#BFA524",
            }}
          >
            <p
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                fontSize: "28px",
                color: "#BFA524",
              }}
            >
              Obtenez des recettes !
            </p>
          </Link>
        </div>

        <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
          <p style={{ backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "32px" }}>
            Pâtisserie:
          </p>
        </div>

        <div className="address-text">
          <p style={{ fontSize: "22px", textIndent: " 2em" }}>
            {/* <span style={{backgroundColor:'rgba(255, 255, 255, 0)', color:'rgba(255, 255, 255, 0)', fontSize:'25px'}}>aaaa</span> */}
            Vous pouvez acheter des gâteaux et des pains conçus par nous dans
            notre magasin, ou vous pouvez commandez en ligne et nous fournirons
            un service de livraison à domicile pour le paiement.
          </p>
        </div>

        <Row style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
          <Col
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              justifyContent: "center",
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <Image
              src={cheese_cake}
              fluid={false}
              alt="map"
              width="180px"
              height="130px"
              float="right"
            ></Image>
          </Col>
          <Col
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              justifyContent: "center",
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <Image
              src={straw}
              fluid={false}
              alt="map"
              width="180px"
              height="130px"
              float="right"
            ></Image>
          </Col>
          <Col
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              justifyContent: "center",
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <Image
              src={cake1}
              fluid={false}
              alt="map"
              width="180px"
              height="130px"
              float="right"
            ></Image>
          </Col>
          <Col
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              justifyContent: "center",
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <Image
              src={cake2}
              fluid={false}
              alt="map"
              width="180px"
              height="130px"
              float="right"
            ></Image>
          </Col>
        </Row>
      </Container>

      <Container style={{ height: "70px" }}></Container>
    </div>
  );
};

export default French;
