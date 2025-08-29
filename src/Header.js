import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import web from "./images/Yash Image.png";
import Button from 'react-bootstrap/Button';

function Header(props){
    // Normal 
    const displayData = () => {
        alert("Are you sure?");
    };
    const dataOn = () => {
        alert("Are you sure?");
    };

    // Argument 
    const showName=(name)=>{
        alert(`Hello, ${name} How Can I help you?`)
    }

    return(
        <div>
            <h1 className='demo1'>Header Section</h1>
             <img className='demo1' width={80} src={web}/>
            <Button variant="success" onClick={displayData}>Save </Button>
            <br></br>
            <Button variant="success" onClick={()=>showName('Yash')}>Help </Button>
            <br></br>
            <Button variant="danger" onClick={dataOn}>Delete</Button>
           
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar{props.name}</Navbar.Brand>
                <Nav className="mb-auto">
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


