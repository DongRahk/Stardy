import React from 'react';
import { Modal,Button,Form, Container} from 'react-bootstrap';
import {GoogleLogin} from "react-google-login";
import HorizonLine from '../components/HorizonLine';
function SignUpModal({ show, onHide }) {
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Sign-Up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Button block variant='info' type='button' className='my-3'>
                                Sign Up
                            </Button>
                            <HorizonLine text={"OR"} />
                            <GoogleLogin
                                render={(renderProps)=>{
                                    return( <Button onClick={renderProps.onClick}
                                                    disabled={renderProps.disabled}
                                                    block
                                                    style={{
                                                        backgroundColor: "#176BEF",
                                                        borderColor:"#176BEF",
                                                    }}
                                              >
                                        <i className='fab fa-google'></i>&nbsp; Sign Up with Google
                                    </Button>);
                                 }}
                             />
                        </Form>
                    </Modal.Body>
                    {/* <Modal.Footer>
                <Button variant="secondary" type="button">
                    Submit
                </Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer> */}
                </Container>
            </Modal>
        </div>
    );
}

export default SignUpModal