import {Nav,NavDropdown,Navbar} from 'react-bootstrap';
import {FaHome,FaUsers ,FaMedal, FaScroll} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import { useHistory } from "react-router-dom";
import AuthService from './AuthService';

const Header = ()=>{
    const history = useHistory();
    const handleLogout = () => {
        AuthService.logout()
        history.push('/login')
    }
    return (
        <Navbar bg= "dark" variant="dark" expand="lg" collapseOnSelect="true">
        <Navbar.Brand href="/">CSP Hackathon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/"><span><FaHome/>&nbsp;Home</span></Nav.Link>
            <Nav.Link href="/scoreboard"><span><FaMedal/>&nbsp;Scoreboard</span></Nav.Link>
            </Nav>
            <Nav>
            <NavDropdown alignRight title={
            <span>< FaUsers /> {AuthService.getCurrentUser().User.Fullname}</span>} id="basic-nav-dropdown">
                <NavDropdown.Item> <span><FaScroll/>&nbsp;My submissions</span></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}><span><FiLogOut/>&nbsp;Log out</span></NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header