import {Nav,NavDropdown,Navbar} from 'react-bootstrap';
import {FaHome,FaUsers ,FaMedal, FaScroll} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

const Header = ()=>{
    return (
        <Navbar bg= "light" variant="light" expand="lg" collapseOnSelect="true">
        <Navbar.Brand href="#home">CSP Hackathon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/"><span><FaHome/>&nbsp;Home</span></Nav.Link>
            <Nav.Link href="/ranking"><span><FaMedal/>&nbsp;Scoreboard</span></Nav.Link>
            </Nav>
            <Nav>
            <NavDropdown alignRight title={
            <span>< FaUsers /> Team 01</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> <span><FaScroll/>&nbsp;My submissions</span></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"><span><FiLogOut/>&nbsp;Log out</span></NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header