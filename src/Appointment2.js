import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Row, Col, Figure,Button, Image, Dropdown,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect, useFetch} from 'react';
import oneoftwo from './img/1of2.PNG';
import twooftwo from './img/2of2.PNG';
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
                    
                        <div className="Appointment">
                            <h1 style={{}}>Make an appointment </h1>
                        </div>
                    
                </Row>
            </Container>

            

            {/* full name*/}
            <Container>
                <Row style={{
                        height: '100px',
                        justifyContent:"flex-start",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
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
                <Row style={{
                        height: '250px',
                        justifyContent:"flex-start",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                    <Col xl={5}>
                        <div className="Appointment">
                            <h1 style={{}}>Email</h1>
                        </div>
                    </Col>
                    
                    <Col xl={4}>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control type="mb" placeholder="name@example.com" />
                    </Form.Group>
                        
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
                                <Link to="/Appointment">
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
                        <img src={twooftwo} alt="" width="304" height="117" />
                    </Col>

                    <Col xl={2} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} >
                            <Button style={{backgroundColor: '#263c8b96', color:'#BFA524', borderColor:'#BFA524'}}>
                                <Link to="/">
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