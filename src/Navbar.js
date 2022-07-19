
import {FaBeer} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* <p style={{float: 'left'}}>Open from 9:00 to 21:00 Tuesday - Sunday!</p> */}
            <div style={{width: '100%'}}>
                <Row>
                    <Col sm={7}>
                        <p style={{float: 'left'}}>Open from 9:00 to 21:00 Tuesday - Sunday!</p>
                    </Col>
                    <Col sm style={{justifyContent:"center", display:"flex"}}>
                        <Link to="/" >
                            <strong style={{color: '#BFA524'}}>Homepage</strong>
                        </Link>
                    </Col>
                    <Col sm style={{justifyContent:"center", display:"flex"}}>
                        <Link to="/" >
                            <strong style={{color: '#BFA524'}}>Cart</strong>
                        </Link>
                    </Col>
                    <Col sm style={{justifyContent:"center", display:"flex"}}>
                        <Link to="/" >
                            <strong style={{color: '#BFA524',}}>Login or Register</strong>
                        </Link>
                    </Col>
                </Row>
                {/* <Link to="/" >
                    <strong style={{color: '#BFA524',}}>GO BACK HOMEPAGE</strong>
                </Link>

                <Link to="/">
                    <strong style={{color: '#BFA524',}}>cart</strong>
                </Link>
                <Link to="/">
                    <strong style={{color: '#BFA524',}}>login or register</strong>
                </Link>
                 */}
            </div>
        </div>
        
    );
}
 
export default Navbar;