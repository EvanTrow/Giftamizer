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
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

class AuthHeader extends React.Component {
    render() {
        return (
            <>
                <div className="header bg-primary py-6 py-lg-6 pt-lg-6">
                    <Container>
                        <div className="header-body text-center mb-7">
                            <Row className="justify-content-center">
                                <Col className="px-5" lg="6" md="8" xl="5">
                                    {this.props.title ? <h1 className="text-white">{this.props.title}</h1> : null}
                                    {this.props.lead ? <p className="text-lead text-white">{this.props.lead}</p> : null}
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

AuthHeader.propTypes = {
    title: PropTypes.string,
    lead: PropTypes.string,
};

export default AuthHeader;
