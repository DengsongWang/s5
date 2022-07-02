import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Row, Col, Figure,Button, Image, Dropdown,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cake1 from './img/cake1.jpg';
import cake2 from './img/cake2.jpg';
import cake3 from './img/cake3.jpg';
import cake4 from './img/cake4.jpg';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import {BiCommentDots} from 'react-icons/bi';

const Otherswork = () => {
    return (  
        <div className="BuyOnline">
            <h1 style={{textAlign: 'center'}}>Other's work </h1>

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
                            
                            <img src={cake1} alt="cake1"></img>
                            <h3 style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                Dylan 
                            </h3>
                            <h3>
                                <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><FcLike size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} /></Col>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><BiCommentDots size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)',fill: 'white'}} /></Col>
                                </Row>
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
                            <img src={cake2} alt="cake2"></img>
                            <h3 style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                Sally  
                            </h3>
                            <h3>
                                <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><FcLike size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} /></Col>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><BiCommentDots size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)',fill: 'white'}} /></Col>
                                </Row>
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
                            <img src={cake3} alt="cake3"></img>
                            <h3 style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                Simon 
                            </h3>
                            <h3>
                                <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><FcLike size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} /></Col>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><BiCommentDots size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)',fill: 'white'}} /></Col>
                                </Row>
                            </h3>
                        </div>
                    </Col>

                    <Col style={{
                        backgroundColor: '#263c8b96',
                        height: '300px',
                        justifyContent:"center",
                        display:"flex",
                        }}>
                        <div className="BuyOnline">
                            <img src={cake4} alt="cake4"></img>
                            <h3 style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                Tom2121  
                            </h3>
                            <h3>
                            <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)',color:'#BFA524'}}>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><FcLikePlaceholder size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} /></Col>
                                    <Col xs={4} style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}><BiCommentDots size={30} style={{backgroundColor: 'rgba(0, 0, 0, 0)',fill: 'white'}} /></Col>
                                </Row>
                            </h3>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        
    );
}
 
export default Otherswork;