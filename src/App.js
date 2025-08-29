import './App.css';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function App() {
  return (
    
    <div className="App">
      
      <Header name='yash'/>
      <div className='container'>
        <FontAwesomeIcon icon={faWhatsapp}/>
        <FontAwesomeIcon icon={faInstagram}/>
        
        <h1>Welcome Yash <FontAwesomeIcon icon={faAmazon}/></h1>
        
        <div>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <Container>
          <Row>
            <ProductItems/>
            <ProductItems/>
          </Row>
        </Container>

      </div>
      <Footer email="yash@email"/> 
    </div>
  );
}

export default App;

function ProductItems(){
  return(
    <Col lg="3" md="6">
      hello
    </Col>
  )
}
