
import { Container } from "react-bootstrap";
import { Row, Col, Figure,Button, Image, Dropdown,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cheese_cake from './img/cheese-cake.jpg';
import straw from './img/strawberry-cake.jpg';
import matcha from './img/matcha-cake.jpg';
import {BsCartPlusFill} from 'react-icons/bs';


const BuyOnline = () => {
    return ( 
        <div className="BuyOnline">
            <h1>Featured products </h1>

            <Container>
                <Row>
                    <Col style={{
                        backgroundColor: '#263c8b96',
                        height: '300px',
                        justifyContent:"center",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                        <div className="BuyOnline">
                            
                            <img src={cheese_cake} alt="cheese_cake"></img>
                            <h3>
                                <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>
                                    <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>matcha cake</Col>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><BsCartPlusFill size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)',fill:'snow'}} /></Col>
                                </Row>
                            </h3>
                            <h3 style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                $9.99  
                                <Form style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'white'}}>
                                    <Form.Check 
                                        type="switch"
                                        id="gluten-switch"
                                        label="gluten free"
                                        style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                                    />
                                    <Form.Check 
                                        type="switch"
                                        id="low-fat-cream-switch"
                                        label="low fat cream"
                                        style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                                    />
                                </Form>
                                
                            </h3>
                            
                        </div>
                        

                    </Col>

                    <Col style={{
                        backgroundColor: '#263c8b96',
                        height: '300px',
                        justifyContent:"center",
                        display:"flex",
                        paddingTop: "10px",
                        }}>
                        <div className="BuyOnline">
                            <img src={straw} alt="strawbarrycake"></img>
                            <h3>
                                <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>
                                    <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>matcha cake</Col>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><BsCartPlusFill size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)',fill:'snow'}} /></Col>
                                </Row>
                            </h3>
                            <h3 style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                $9.99  
                                <Form style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'white'}}>
                                    <Form.Check 
                                        type="switch"
                                        id="gluten-switch"
                                        label="gluten free"
                                        style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                                    />
                                    <Form.Check 
                                        type="switch"
                                        id="low-fat-cream-switch"
                                        label="low fat cream"
                                        style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                                    />
                                </Form>
                                
                            </h3>
                        </div>
                        
                    </Col>

                    <Col style={{
                        backgroundColor: '#263c8b96',
                        height: '300px',
                        justifyContent:"center",
                        display:"flex",
                        paddingTop: "10px",
                        
                        }}>
                        <div className="BuyOnline">
                            <img src={matcha} alt="matchacake"></img>
                            <h3>
                                <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>
                                    <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>matcha cake</Col>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><BsCartPlusFill size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)',fill:'snow'}} /></Col>
                                </Row>
                            </h3>
                            <h3 style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                $9.99  
                                <Form style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'white'}}>
                                    <Form.Check 
                                        type="switch"
                                        id="gluten-switch"
                                        label="gluten free"
                                        style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                                    />
                                    <Form.Check 
                                        type="switch"
                                        id="low-fat-cream-switch"
                                        label="low fat cream"
                                        style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                                    />
                                </Form>
                                
                            </h3>
                        </div>
                        
                    </Col>

                    <Col style={{
                        backgroundColor: '#263c8b96',
                        height: '300px',
                        justifyContent:"center",
                        display:"flex",
                        }}>
                        
                    </Col>
                </Row>
            </Container>
            
        </div>

        
    );
}
 
export default BuyOnline;