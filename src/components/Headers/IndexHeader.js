/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// react library for routing
import { Link } from 'react-router-dom';
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from 'reactstrap';

class IndexHeader extends React.Component {
    render() {
        return (
            <>
                <div className="header bg-primary pt-5 pb-7">
                    <Container>
                        <div className="header-body">
                            <Row className="align-items-center">
                                <Col lg="6">
                                    <div className="pr-5">
                                        <h1 className="display-2 text-white font-weight-bold mb-0">Giftamizer</h1>
                                        <h2 className="display-4 text-white font-weight-light">An easier way to organize your gifts.</h2>
                                        <div className="mt-5">
                                            <Button className="btn-neutral my-2" color="default" to="/signup" tag={Link}>
                                                Get Started
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <Row className="pt-5">
                                        <Col md="6">
                                            <Card>
                                                <CardBody>
                                                    <div className="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                                                        <i className="fas fa-gift" />
                                                    </div>
                                                    <h5 className="h3">Items</h5>
                                                    <p>Add anything you’d like to receive.</p>
                                                </CardBody>
                                            </Card>
                                            <Card>
                                                <CardBody>
                                                    <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                                                        <i className="far fa-list-alt" />
                                                    </div>
                                                    <h5 className="h3">Lists</h5>
                                                    <p>Create collections of items to share with groups or friends.</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col className="pt-lg-5 pt-4" md="6">
                                            <Card className="mb-4">
                                                <CardBody>
                                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                                                        <i className="fas fa-users" />
                                                    </div>
                                                    <h5 className="h3">Groups</h5>
                                                    <p>Share your lists with all your friends and family.</p>
                                                </CardBody>
                                            </Card>
                                            <Card className="mb-4">
                                                <CardBody>
                                                    <div className="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                                                        <i className="fas fa-shopping-cart" />
                                                    </div>
                                                    <h5 className="h3">Shopping List</h5>
                                                    <p>Giftamizer automatically creates your shopping list.</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </div>
            </>
        );
    }
}

export default IndexHeader;
