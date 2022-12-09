import Container from 'react-bootstrap/Container';
import './AboutMe.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='nav' bg="dark" variant="dark">
        <Container>
          
          <Nav.Link className='justin' href="#About">Justin's Portfolio</Nav.Link>
          <img src='/logo192.png' className='navimg me-4' height={42}/>
          <Nav className="me-auto">
            <Nav.Link href="#About">About Me</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    <Container className='m-3'>
    <Row lg={2}>
      <div>
      <h1>About Me

      <img src='/mypic.jpg' className='myoic ms-5' height={81}></img>
      </h1>
      <p>I am a UCF Alumni and French bulldog breeder who is making a move into coding. I know that coding is a valuable skill today that will continue to be increasingly valuable throughout the future. This website lays out some of the projects I have been working on in digital form, as well as my qualifications.
      <br></br>
      <br></br>
      Feel free to contact me if you are interested in having a professional quality custom website built for your business.
      </p>
      </div>
      <div>
        <h1>Qualifications</h1>
        <h4>Front End</h4>
        <li></li>
        </div>
      </Row>
      </Container>
      <footer className='buttons'>
        <a href='https://www.linkedin.com/in/justin-r-642b4a140/'>
        <img className='me-3' src='./lilogo.png' height={60}></img>
        </a>
        <a href='https://github.com/nftgoat'>
        <img className='ms-3' src='./git.png' height={60}></img>
        </a>
      </footer>

    </>
  );
}

export default ColorSchemesExample;