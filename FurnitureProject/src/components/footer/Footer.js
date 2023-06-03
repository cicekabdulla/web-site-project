import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='mb-4'>
                        <div className='logo'>
                            <div>
                                <h1 className='text-white'>Multimart</h1>
                            </div>
                        </div>
                        <p className='footer__text mt-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </Col>

                    <Col lg='3' md='3' className='mb-4'>
                        <div className='footer__quick-links'>
                            <h4 className='quick__links-title'>Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2' md='3' className='mb-4'>
                        <div className='footer__quick-links'>
                            <h4 className='quick__links-title'>Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3' md='4'>
                        <div className='footer__quick-links'>
                            <h4 className='quick__links-title'>Contact</h4>
                            <ListGroup className='footer__contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex gap-2 align-items-center'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>123 ZindaBazar, Sylhet, Bangladesh</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex gap-2 align-items-center'>
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+0881234567890</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex gap-2 align-items-center'>
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>example123@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className='footer__copyright'>
                            Copyright {year} developed by Muhibur Rahman. All rights
                            reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer