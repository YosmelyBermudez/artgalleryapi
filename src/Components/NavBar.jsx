import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(){
    return(
        <>
        <Navbar className="color-nav" variant="light" expand="lg">
            <Navbar.Brand as={Link} to="/Home">Art Institute of Chicago</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as ={Link} to ="/Registro">Register</Nav.Link>
                <Nav.Link as={Link} to= "/Login">Login</Nav.Link>
                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
export default NavBar