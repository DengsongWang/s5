import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Row, Col, Figure,Button, Image, Dropdown,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import recipes from './img/recipes.PNG';
import { BsJustifyRight } from 'react-icons/bs';

// import {DateTimePicker} from 'react-date-picker';


const Recipes = () => {
    return (
      <div className="Recipes">
        <Container style={{ marginTop: "30px", height: "700px" }}>
          <img src={recipes} alt="" width="1000" height="500" />
          <Link
            to="/"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: "#BFA524",
            }}
          >
            <p
              style={{
                fontSize: "28px",
                color: "#BFA524",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Go back to homepage
            </p>
          </Link>
        </Container>
      </div>
    );
}
 
export default Recipes;