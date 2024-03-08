import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bulma/css/bulma.css';
import Button from 'react-bootstrap/Button';


function NavBar() {

    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {

        setExpanded(!expanded);

    };

    

    return(
        <Navbar bg="dark" expand="md" variant="dark">

            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />

                <Navbar.Brand>

                    <div className='CompanyTitle'>

                        TREK-HELP

                    </div>

                </Navbar.Brand>

              

                <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? 'show' : ''}>

                    <Nav className="ml-auto text-center"> {/* Use 'text-center' class to center the menu items */}

                        <Nav.Link href="/App" className="rounded-pill"><Button variant='danger'>HOME</Button></Nav.Link>

                        <Nav.Link href="/Ricketts" className="rounded-pill"><Button variant='danger'>Ricketts</Button></Nav.Link>

                        <Nav.Link href="/Hickory" className="rounded-pill"><Button variant='danger'>Hickory</Button></Nav.Link>

                        <Nav.Link href="/Ohiopyle" className="rounded-pill"><Button variant='danger'>Ohiopyle</Button></Nav.Link>

                        <Nav.Link href="/WorldsEnd" className="rounded-pill"><Button variant='danger'>WorldsEnd</Button></Nav.Link>

                        <Nav.Link href="/Appalachian" className="rounded-pill"><Button variant='danger'>Appalachian</Button></Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>


        </Navbar>
    )

}


export default NavBar;