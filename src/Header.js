import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import web from "./images/Yash Image.png";

function Header(props){
    const displayData = () => {
        alert("Are you sure?");
    };
    const dataOn = () => {
        alert("Are you sure?");
    };

    return(
        <div>
            <h1 className='demo1'>Header Section</h1>
             <img className='demo1' width={80} src={web}/>

            <button onClick={displayData}>Save</button><br></br>
             <button onClick={dataOn}>Save</button>
           
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar{props.name}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
        
    )
}

export default Header;


