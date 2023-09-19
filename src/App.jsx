import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ContactList from './component/ListContact'

function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">List Contact</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add"><Button variant="outline-success">Add Contact</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <Container className='py-5'>
        <ContactList />
      </Container>
    </>
  )
}

export default App
