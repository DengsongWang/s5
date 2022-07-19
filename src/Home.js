import { useState, useEffect } from "react";

import logo from './img/logo.PNG';
import cakemake from './img/cakemake.jpg';
import onlineshopping from './img/onlineshopping.jpg';
import map from './img/map.PNG';
import cheese_cake from './img/cheese-cake.jpg';
import straw from './img/strawberry-cake.jpg';
import cake2 from './img/cake2.jpg';
import cake1 from './img/cake1.jpg';
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Figure,Button, Image } from 'react-bootstrap';
import Navbar from './Navbar';





const Home = () => {
    // let name = 'mario';
    
    
    const[age, setAge] =useState(28);
    

    

    return (
        <div className="home">
            
            {/* enterances of making cake and online shopping */}
            <Container >
                <Row>
                    <Col sm style={{
                        backgroundColor: '#263c8b96',
                        // height: '400px',
                        justifyContent:"center",
                        display:"flex",
                        }} >
                        <Figure style={{backgroundColor: 'rgba(0, 0, 0, 0)', paddingTop:'20px'}}>
                            <Figure.Image
                                width={380}
                                height={180}
                                alt="cakemake"
                                src={cakemake}
                            />
                            <Figure.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:"center", display:"flex"}}>
                                <p style={{backgroundColor: 'rgba(0, 0, 0, 0)', fontSize: '25px'}}>Make cakes in our store</p>
                            </Figure.Caption>
                            <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} xs={{offset:1}}><Button style={{backgroundColor: 'rgba(0, 0, 0, 0)', color:'#BFA524', borderColor:'#BFA524'}}>
                                    <Link to="/Appointment">
                                        <p style={{backgroundColor: 'rgba(0, 0, 0, 0)', fontSize:'15px'}}>
                                            Appointment
                                        </p>
                                    </Link>
                                    
                                </Button></Col> 
                                <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} ><Button style={{backgroundColor: 'rgba(0, 0, 0, 0)', color:'#BFA524', borderColor:'#BFA524'}}>
                                    <Link to="/Otherswork">
                                        <p style={{backgroundColor: 'rgba(0, 0, 0, 0)', fontSize:'15px'}}>
                                            Other's work
                                        </p>
                                    </Link>
                                </Button></Col>
                            </Row>
                        </Figure>
                    </Col>
                    <Col xs={2}></Col>
                    <Col sm style={{
                        backgroundColor: '#263c8b96',
                        // height: '400px',
                        justifyContent:"center",
                        display:"flex"
                        }}>
                        <Figure style={{backgroundColor: 'rgba(0, 0, 0, 0)', paddingTop:'20px'}}>
                            <Figure.Image
                                width={380}
                                height={180}
                                alt="onlineshopping"
                                src={onlineshopping}
                            />
                            <Figure.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:"center", display:"flex"}}>
                                <p style={{backgroundColor: 'rgba(0, 0, 0, 0)', fontSize: '25px'}}>Bakery</p>
                            </Figure.Caption>
                            <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                
                                <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} xs={{offset:4}}>
                                    <Button style={{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor:'#BFA524'}}>
                                        <Link to="/BuyOnline">
                                            <p style={{backgroundColor: 'rgba(0, 0, 0, 0)', fontSize:'15px'}}>
                                                Buy online
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
            <Container style={{marginTop:'130px'}}>
                <Row>
                    
                    <Col style={{backgroundColor: '#263c8b96'}}>
                        
                        <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>

                            {/* address text */}
                            <Col sm style={{backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:"center", display:"flex"}}>
                                
                                <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#BFA524', paddingTop:'20px'}}>
                                    <div className="address-text">
                                        <p style={{fontSize:'30px'}}>
                                        <a id="nav-to-address" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>Starry Night Bakery Studio</a>
                                        </p>
                                    </div>
                                    <div className="address-text" style={{paddingTop:'20px'}}>
                                        <p>647 - 884 - 9622</p>
                                    </div>
                                    <div className="address-text"  style={{paddingTop:'20px'}}>
                                        <p>305 Rideau st</p>
                                    </div>
                                    <div className="address-text">
                                        <p>Ottawa, ON</p>
                                    </div>
                                    <div className="address-text">
                                        <p>K1N 5Y6</p>
                                    </div>

                                    <div className="address-text"  style={{paddingTop:'20px'}}>
                                        <p>~~Hours~~</p>
                                    </div>
                                    <div className="address-text">
                                        <p>Tue - Sun: 9:00 ~ 21:00</p>
                                    </div>
                                
                                </h1>
                            </Col>

                            {/* picture of map */}
                            <Col sm style={{backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:"center", display:"flex", marginBottom :'15px', marginTop :'15px'}}>
                                {/* <Image src={map} fluid={false} alt="map" width='100%' height='100%' className="img-fluid">

                                </Image> */}
                                <img src={map} className='img-fluid' alt="map" width='70%'></img>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
            {/* About us */}
            <Container style={{marginTop:'130px',backgroundColor: '#263c8b96'}}>
                <div className="address-text" >
                        <p style={{fontSize:'40px', paddingTop:'15px'}}>
                        <a id="nav-to-aboutus" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>About us</a>
                        </p>
                </div>
                <div className="address-text" >
                        <p style={{fontSize:'25px', paddingTop:'10px', paddingLeft:'20px',paddingRight:'20px', textIndent: ' 2em'}}>
                            {/* placeholder */}
                            {/* <span style={{backgroundColor:'rgba(255, 255, 255, 0)', color:'rgba(255, 255, 255, 0)', fontSize:'25px'}}>aaaa</span> */}
                            Starry Night Bakery Studio is a cake-making experience located in Downtown Ottawa. 
                            As our valued customer, you can come into the store to experience the fun of making cakes, 
                            or purchase our wide variety of cakes in the store or online.
                        </p>
                </div>

            </Container>

            {/* Services */}
            <a id="nav-to-service"></a>
            <Container style={{marginTop:'130px',backgroundColor: '#263c8b96' }}>
                <div className="address-text" >
                        <p style={{fontSize:'40px', paddingTop:'15px'}}>
                        <a id="nav-to-service" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>Our services</a>
                        </p>
                </div>

                <div  style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <p style={{backgroundColor: 'rgba(0, 0, 0, 0)',fontSize:'32px'}}>
                        Cake-making experience:
                    </p>
                </div>

                <div className="address-text" >
                        <p style={{fontSize:'22px', textIndent: ' 2em'}}>
                        
                        Make your own style cake in our store with all the ingredients we provide! 
                        You can choose any cake board you want, whether it's round, 
                        square, single or multi-layered, we have it all. Even if you want a custom 
                        shaped cake board for your unique creation, we will make the unique cake board 
                        for you with other shapes. In addition, you can choose from our cream in up to dozens 
                        of colors, as well as a variety of trinkets to make your cake look cooler. What's more,
                         you can take your work home and enjoy it, but don't forget to take a picture!
                        </p>
                </div>

                <div  style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <p style={{backgroundColor: 'rgba(0, 0, 0, 0)',fontSize:'32px'}}>
                        Bakery:
                    </p>
                </div>

                <div className="address-text" >
                        <p style={{fontSize:'22px', textIndent: ' 2em'}}>
                        {/* <span style={{backgroundColor:'rgba(255, 255, 255, 0)', color:'rgba(255, 255, 255, 0)', fontSize:'25px'}}>aaaa</span> */}
                        You can buy cakes and breads designed by us in our store,
                         or you can order online and we will provide home delivery service for payment.
                        </p>
                </div>

                <Row style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:"center", display:"flex", marginBottom :'15px'}}>
                        <Image src={cheese_cake} fluid={false} alt="map" width='180px' height='130px' float='right'></Image>
                    </Col>
                    <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:"center", display:"flex", marginBottom :'15px'}}>                
                        <Image src={straw} fluid={false} alt="map" width='180px' height='130px' float='right'></Image>
                    </Col>
                    <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:"center", display:"flex", marginBottom :'15px'}}>                
                        <Image src={cake1} fluid={false} alt="map" width='180px' height='130px' float='right'></Image>
                    </Col>
                    <Col style={{backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:"center", display:"flex", marginBottom :'15px'}}>                
                        <Image src={cake2} fluid={false} alt="map" width='180px' height='130px' float='right'></Image>
                    </Col>
                </Row>
            </Container>

            <Container style={{height:'70px'}}></Container>



        </div>
        
        
        
    );
}
 
export default Home;