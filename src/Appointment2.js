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
import { useState, useEffect, useFetch } from "react";
import oneoftwo from "./img/1of2.PNG";
import twooftwo from "./img/2of2.PNG";
// import {DateTimePicker} from 'react-date-picker';
import validator from "validator";

const Appointment2 = () => {
  const [value, onChange] = useState(new Date());
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Email is not valid now");
    }
  };

  return (
    <div className="Appointment">
      <Container>
        <Row
          style={{
            height: "100px",
            justifyContent: "flex-start",
            display: "flex",
            paddingTop: "10px",
          }}
        >
          <div className="Appointment">
            <h1 style={{}}>Make an appointment </h1>
          </div>
        </Row>
      </Container>

      {/* full name*/}
      <Container>
        <Row
          style={{
            justifyContent: "flex-start",
            display: "flex",
            paddingTop: "10px",
          }}
        >
          <Col xl={5}>
            <div className="Appointment">
              <h1 style={{}}>Full name</h1>
            </div>
          </Col>

          <Col xl={4}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="mb" placeholder="" />
            </Form.Group>
          </Col>
        </Row>
      </Container>

      {/* email*/}
      <Container>
        <Row
          style={{
            justifyContent: "flex-start",
            display: "flex",
            paddingTop: "10px",
          }}
        >
          <Col xl={5}>
            <div className="Appointment">
              <h1 style={{}}>Email</h1>
            </div>
          </Col>

          <Col xl={4}>
            <div>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                type="text"
                id="userEmail"
                onChange={(e) => validateEmail(e)}
              >
                <Form.Control type="mb" placeholder="" />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {emailError}
                </span>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          paddingTop: "95px",
        }}
      >
        <Row
          style={{
            height: "100px",
            justifyContent: "center",
            display: "flex",
            paddingTop: "10px",
          }}
        >
          <Col xl={2} style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Button
              style={{
                backgroundColor: "#263c8b96",
                color: "#BFA524",
                borderColor: "#BFA524",
              }}
            >
              <Link
                to="/Appointment"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "rgba(0, 0, 0, 0)",
                }}
              >
                <p
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontSize: "28px",
                    color: "#BFA524",
                  }}
                >
                  Go back
                </p>
              </Link>
            </Button>
          </Col>

          <Col
            xl={8}
            style={{
              height: "100px",
              justifyContent: "center",
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <img src={twooftwo} alt="" width="300" height="104" />
          </Col>

          <Col xl={2} style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Button
              style={{
                backgroundColor: "#263c8b96",
                color: "#BFA524",
                borderColor: "#BFA524",
              }}
            >
              <Link
                to="/"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "rgba(0, 0, 0, 0)",
                }}
                onClick={() =>
                  alert(
                    "Dear customer, your appointment has been successful! A confirmation email has been sent to your email address. Looking forward to seeing you :)"
                  )
                }
              >
                <p
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontSize: "28px",
                    color: "#BFA524",
                  }}
                >
                  Finish
                </p>
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointment2;
