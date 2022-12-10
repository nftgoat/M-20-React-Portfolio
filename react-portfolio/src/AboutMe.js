import Container from 'react-bootstrap/Container';
import './AboutMe.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

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
      <h2>My Resume Link</h2>
      <Button className='mt-2' variant="primary">My Resume</Button>
      </div>
      <div>
        <h1>Qualifications</h1>
        <h4>Front End</h4>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <h4>Back End</h4>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>Mongo DB, Mongoose</li>
        <li>REST</li>
        <li>GrapgQL</li>
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