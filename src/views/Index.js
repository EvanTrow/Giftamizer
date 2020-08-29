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
/*eslint-disable*/
import React from 'react';
// react library for routing
import { Link } from 'react-router-dom';
// reactstrap components
import { Badge, Button, Card, CardBody, Container, Row, Col, UncontrolledTooltip } from 'reactstrap';
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import IndexHeader from 'components/Headers/IndexHeader.js';
import AuthFooter from 'components/Footers/AuthFooter.js';

class Index extends React.Component {
    componentDidMount() {
        document.body.classList.remove('bg-default');
    }
    componentWillUnmount() {
        document.body.classList.add('bg-default');
    }

    render() {
        return (
            <>
                {/* <IndexNavbar /> */}
                <div className="main-content">
                    <IndexHeader />
                    <section className="py-6 pb-9 bg-default">
                        <Container fluid>
                            <Row className="justify-content-center text-center">
                                <Col md="6">
                                    <h2 className="display-3 text-white">Giving just got a whole lot better.</h2>
                                    <p className="lead text-white">
                                        Want to receive gifts that you know you will love? Giftamizer is the perfect answer. It’s your very own personal gift registry. Whether you’re online or
                                        in-store, you can add anything you’d like to receive – from your favourite bottle of wine or perfect pair of shoes to a new mountain bike or weekend away. Share
                                        with your friends or family and invite them to share with you!
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg pt-lg-0 mt--7">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape bg-gradient-primary text-white rounded-circle mb-4">
                                                        <i className="fas fa-check" />
                                                    </div>
                                                    <h4 className="h3 text-primary text-uppercase">Planning</h4>
                                                    <p className="description mt-3">Any of your friends or family can mark items as reserved all in real-time. This will prevent duplicate gift.</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                                                        <i className="fas fa-cogs" />
                                                    </div>
                                                    <h4 className="h3 text-success text-uppercase">Easily Add Items</h4>
                                                    <p className="description mt-3">
                                                        Adding an url of Amazon or other populator retailers will automatically import the items details straight into Giftamizer.
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                                                        <i className="fas fa-baby-carriage" />
                                                    </div>
                                                    <h4 className="h3 text-warning text-uppercase">Young Children?</h4>
                                                    <p className="description mt-3">Giftamizer allows you to name your lists anything. No need to create another account for your child.</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                {/* <AuthFooter /> */}
            </>
        );
    }
}

export default Index;
