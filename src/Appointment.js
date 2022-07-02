import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Row, Col, Figure,Button, Image, Dropdown,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState, useEffect, useFetch} from 'react';
import oneoftwo from './img/1of2.PNG';

// import {DateTimePicker} from 'react-date-picker';



const Appointment = () => {

    // const [cakeBoardChoose, setCakeBoardChoose] = useState(null);
    // setCakeBoardChoose("Circle");

    // useEffect(() => {
    //     fetch('http://localhost:8000/cakeBoardChoose')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setCakeBoardChoose(data);
    //         });
    // },[]);   


    
    const [value, onChange] = useState(new Date());
    
    return (  
        <div className="Appointment">
            <Container>
                <Row style={{
                        height: '100px',
                        justifyContent:"flex-start",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                    <Col xl={7}>
                        <div className="Appointment">
                            <h1 style={{}}>Make an appointment </h1>
                        </div>
                    </Col>
                    
                    <Col xl={2}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            View all cake boards
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Circle</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Square</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Single layer</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Double layer</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">Triple layer</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        
                    </Col>

                    <Col xl={2}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            View all cream
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">red</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">blue</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">yellow</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">green</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">orange</Dropdown.Item>
                            <Dropdown.Item href="#/action-6">pink</Dropdown.Item>
                            <Dropdown.Item href="#/action-7">purple</Dropdown.Item>
                            <Dropdown.Item href="#/action-8">grey</Dropdown.Item>
                            <Dropdown.Item href="#/action-9">black</Dropdown.Item>
                            <Dropdown.Item href="#/action-10">white</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>

                    
                </Row>
            </Container>

            {/* cake board choice */}
            <Container>
                <Row style={{
                        height: '100px',
                        justifyContent:"flex-start",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                    <Col xl={7}>
                        <div className="Appointment">
                            <h1 style={{}}>Cake board type </h1>
                        </div>
                    </Col>
                    
                    <Col xl={2}>
                    
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Circle
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Circle</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Square</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Single layer</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Double layer</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">Triple layer</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        
                    </Col>

                    <Col xl={2}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Double layer
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Circle</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Square</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Single layer</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Double layer</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">Triple layer</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>

                    
                </Row>
            </Container>

            {/* cake cream choice */}
            <Container>
                <Row style={{
                        height: '100px',
                        justifyContent:"flex-start",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                    <Col >
                        <div className="Appointment">
                            <h1 style={{}}>Cream color of your dream cake</h1>
                        </div>
                    </Col>
                    
                    <Col xl={1}>
                    
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                        purple
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">red</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">blue</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">yellow</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">green</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">orange</Dropdown.Item>
                            <Dropdown.Item href="#/action-6">pink</Dropdown.Item>
                            <Dropdown.Item href="#/action-7">purple</Dropdown.Item>
                            <Dropdown.Item href="#/action-8">grey</Dropdown.Item>
                            <Dropdown.Item href="#/action-9">black</Dropdown.Item>
                            <Dropdown.Item href="#/action-10">white</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        
                    </Col>

                    <Col xl={1}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            green
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">red</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">blue</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">yellow</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">green</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">orange</Dropdown.Item>
                            <Dropdown.Item href="#/action-6">pink</Dropdown.Item>
                            <Dropdown.Item href="#/action-7">purple</Dropdown.Item>
                            <Dropdown.Item href="#/action-8">grey</Dropdown.Item>
                            <Dropdown.Item href="#/action-9">black</Dropdown.Item>
                            <Dropdown.Item href="#/action-10">white</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>

                    <Col xl={1}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            blue
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">red</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">blue</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">yellow</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">green</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">orange</Dropdown.Item>
                            <Dropdown.Item href="#/action-6">pink</Dropdown.Item>
                            <Dropdown.Item href="#/action-7">purple</Dropdown.Item>
                            <Dropdown.Item href="#/action-8">grey</Dropdown.Item>
                            <Dropdown.Item href="#/action-9">black</Dropdown.Item>
                            <Dropdown.Item href="#/action-10">white</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>

                    <Col xl={1}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            white
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">red</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">blue</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">yellow</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">green</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">orange</Dropdown.Item>
                            <Dropdown.Item href="#/action-6">pink</Dropdown.Item>
                            <Dropdown.Item href="#/action-7">purple</Dropdown.Item>
                            <Dropdown.Item href="#/action-8">grey</Dropdown.Item>
                            <Dropdown.Item href="#/action-9">black</Dropdown.Item>
                            <Dropdown.Item href="#/action-10">white</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>

                    <Col xl={1}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            black
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">red</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">blue</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">yellow</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">green</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">orange</Dropdown.Item>
                            <Dropdown.Item href="#/action-6">pink</Dropdown.Item>
                            <Dropdown.Item href="#/action-7">purple</Dropdown.Item>
                            <Dropdown.Item href="#/action-8">grey</Dropdown.Item>
                            <Dropdown.Item href="#/action-9">black</Dropdown.Item>
                            <Dropdown.Item href="#/action-10">white</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>

                    
                </Row>
            </Container>

            <Container>
            <Row style={{
                        height: '150px',
                        justifyContent:"flex-start",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                    <Col xl={7}>
                        <div className="Appointment">
                            <h1 style={{}}>Date </h1>
                        </div>
                    </Col>
                    
                    <Col xl={3}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                        2020/07/03
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">2020/07/02</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">2020/07/03</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">2020/07/05</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">2020/07/06</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">2020/07/07</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        
                    </Col>

                    <Col xl={2}>
                        <Link to="/Recipes">
                            <p style={{backgroundColor: 'rgba(0, 0, 0, 0)', fontSize:'28px', color:'#BFA524'}}>
                            Get recipes!
                            </p>
                        </Link>
                    </Col>
                </Row>
            </Container>

            <Container>
            <Row style={{
                        height: '100px',
                        justifyContent:"center",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                        <Col xl={2} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                            <Button style={{backgroundColor: '#263c8b96', color:'#BFA524', borderColor:'#BFA524'}}>
                                <Link to="/">
                                    <p style={{backgroundColor: 'rgba(0, 0, 0, 0)', fontSize:'28px', color:'#BFA524'}}>
                                        Go back
                                    </p>
                                </Link>
                                    
                            </Button>
                        </Col>
                    
                    
                    <Col xl={8} style={{
                        height: '100px',
                        justifyContent:"center",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                        <img src={oneoftwo} alt="" width="304" height="117" />
                    </Col>

                    <Col xl={2} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} >
                            <Button style={{backgroundColor: '#263c8b96', color:'#BFA524', borderColor:'#BFA524'}}>
                                <Link to="/Appointment2">
                                    <p style={{backgroundColor: 'rgba(0, 0, 0, 0)', fontSize:'28px', color:'#BFA524'}}>
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