import './App.css';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    
    <div className="App">
      
      <Header/>
      <div className='container'>
        <h1>Welcome Yash</h1>
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

      </div>
      <Footer/> 
    </div>
  );
}

export default App;
