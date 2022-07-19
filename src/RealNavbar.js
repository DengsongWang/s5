import {FaBeer} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const Navbar = () => {
    return (
        // <div>

        // </div>
        <div className="realNavbar" style={{width: '60%'}}>
            <div style={{width: '100%'}}>
            <Row>
                    
                    <Col sm style={{justifyContent:"center", display:"flex"}}>
                        <a href="#nav-to-address">Address</a>
                    </Col>
                    <Col sm style={{justifyContent:"center", display:"flex"}}>
                        <a href="#nav-to-aboutus">About us</a>
                    </Col>
                    <Col sm style={{justifyContent:"center", display:"flex"}}>
                        <a href="#nav-to-service">Services</a>
                    </Col>
                </Row>
            {/* <div className="links" >
                <a href="#nav-to-address">Address</a>
                <a href="#nav-to-aboutus">About us</a>
                <a href="#nav-to-service">Services</a>
            </div> */}
            </div>
        </div>  
    );
}
 
export default Navbar;