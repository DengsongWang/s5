import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Row, Col, Figure,Button, Image, Dropdown,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState, useEffect, useFetch} from 'react';
import oneoftwo from './img/1of2.PNG';

// import {DateTimePicker} from 'react-date-picker';



const Appointment = () => {



    
    const [value, onChange] = useState(new Date());
    
    return (
      <div className="Appointment">
        <Container>
          <Row
            style={{
              justifyContent: "flex-start",
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <Col md={6}>
              <div className="Appointment">
                <h1 style={{ fontSize: "40px" }}>Make an appointment </h1>
              </div>
            </Col>
          </Row>
        </Container>

        {/* cake board choice */}
        <Container>
          <Row
            style={{
              justifyContent: "flex-start",
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <Col md={6}>
              <div className="Appointment">
                <a title="Choose the shape and number of layers of your cake. You can choose a cake with up to three layers.">
                  <h1>Cake board type </h1>
                </a>
              </div>
            </Col>

            <Col md={2} style={{ marginBottom: "15px" }}>
              <select name="board1" id="board1">
                {/* <option value="none" select disabled hidden>xb</option> */}
                <option value="Circle" selected="selected">
                  Circle
                </option>
                <option value="Square">Square</option>
                {/* <option value="Single layer">Single layer</option>
                <option value="Double layer">Double layer</option>
                <option value="Triple layer">Triple layer</option> */}
              </select>
            </Col>

            <Col md={2} style={{ marginBottom: "15px" }}>
              <select name="board2" id="board2">
                {/* <option value="Circle">Circle</option>
                <option value="Square">Square</option> */}
                <option value="Single layer">Single layer</option>
                <option value="Double layer" selected="selected">
                  Double layer
                </option>
                <option value="Triple layer">Triple layer</option>
              </select>
            </Col>
          </Row>
        </Container>

        {/* cake cream choice */}
        <Container>
          <Row
            style={{
              justifyContent: "flex-start",
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <Col md={6}>
              <div className="Appointment">
                <a title="Choose the main colors that make up your cake. Choose from 1 to 5 colors.">
                  <h1>Cream color of your dream cake</h1>
                </a>
                {/* <h1 title="alal">Cream color of your dream cake</h1> */}
              </div>
            </Col>

            <Col md={1} style={{ marginBottom: "15px" }}>
              <select name="colour1" id="colour1">
                <option value="Red" selected="selected">
                  Red
                </option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Orange">Orange</option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </Col>

            <Col md={1} style={{ marginBottom: "15px" }}>
              <select name="colour2" id="colour2">
                <option value="None"></option>
                <option value="Red">Red</option>
                <option value="Blue" selected="selected">
                  Blue
                </option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Orange">Orange</option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </Col>

            <Col md={1} style={{ marginBottom: "15px" }}>
              <select name="colour3" id="colour3">
                <option value="None"></option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow" selected="selected">
                  Yellow
                </option>
                <option value="Green">Green</option>
                <option value="Orange">Orange</option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </Col>

            <Col md={1} style={{ marginBottom: "15px" }}>
              <select name="colour4" id="colour4">
                <option value="None"></option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Green" selected="selected">
                  Green
                </option>
                <option value="Orange">Orange</option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </Col>

            <Col md={1} style={{ marginBottom: "15px" }}>
              <select name="colour5" id="colour5">
                <option value="None"></option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Orange" selected="selected">
                  Orange
                </option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row
            style={{
              justifyContent: "flex-start",
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <Col md={6}>
              <div className="Appointment">
                <a title="Choose the appointment date.">
                  <h1>Date </h1>
                </a>
              </div>
            </Col>

            <Col md={1} style={{ marginBottom: "15px" }}>
              <select name="Year" id="Year">
                <option value="2022" selected="selected">
                  2022
                </option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </Col>

            <Col md={1} style={{ marginBottom: "15px" }}>
              <select name="Month" id="Month">
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul" selected="selected">
                  Jul
                </option>
                <option value="Aug">Aug</option>
                <option value="Sept">Sept</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>
            </Col>

            <Col md={1} style={{ marginBottom: "15px" }}>
              <select name="Day" id="Day">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            paddingTop: "80px",
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
                  to="/"
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
              <img src={oneoftwo} alt="" width="300" height="104" />
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
                  to="/Appointment2"
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
                    Next
                  </p>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
 
export default Appointment;