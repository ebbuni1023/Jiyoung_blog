import {
    Button,
    Navbar,
    Nav,
    Form,
    FormControl,
    NavDropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.css'
function NavBar() {

    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">JY Coding</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    <NavDropdown title="Programming Language" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Java</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">C</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Algorithms</NavDropdown.Item>
                    </NavDropdown>           

                    <Nav.Link href="#home">WEB</Nav.Link>

                    <NavDropdown title="React Native" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2}
                        href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    );
}

export default NavBar;
