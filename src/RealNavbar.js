import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="realNavbar">
            <div className="links" >
                <a href="#nav-to-address">Address</a>
                <a href="#nav-to-aboutus">About us</a>
                <a href="#nav-to-service">Services</a>
            </div>
        </nav>  
    );
}
 
export default Navbar;