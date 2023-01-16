import React,{useState} from 'react';
import { Navbar, Nav,Button, Container} from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal';
import SignInModal from '../modals/SignInModal';

const Header = () => {
  const [SignUpModalOn,setSignUpModalOn] = useState(false);
  const [SignInModalOn,setSignInModalOn] = useState(false);
  return  (
  <>
  <SignUpModal show={SignUpModalOn}
               onHide={()=>setSignUpModalOn(false)}/>
  <SignInModal show={SignInModalOn}
                onHide={()=>setSignInModalOn(false)}/>             
  <header>
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">시스템명React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'> {/*우측 배치 */}
            <Nav.Link>
              <Button variant='primary'
              onClick={()=>setSignInModalOn(true)}
              >Sign In</Button>  {/*variant=>색상자동지정 */}
            </Nav.Link>
            <Nav.Link>
              <Button variant='secondary' onClick={()=> setSignUpModalOn(true)}>Sign Up</Button>
            </Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
           
          </Nav>
        </Navbar.Collapse>
   
    </Container>
    </Navbar>
  </header>
  </>)
};

export default Header;