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
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classnames from 'classnames';
// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from 'reactstrap';
// core components
import AuthHeader from 'components/Headers/AuthHeader.js';

// firebase
import { login, resetPassword } from '../../../helpers/auth';

function setErrorMsg(error) {
	return {
		loginMessage: error,
	};
}

class Login extends React.Component {
	componentDidMount() {
		document.body.classList.add('bg-default');
	}
	componentWillUnmount() {
		document.body.classList.remove('bg-default');
	}

	handleSubmit = (e) => {
		e.preventDefault();
		login(this.email.value, this.pw.value).catch((error) => {
			this.setState(setErrorMsg('Invalid username/password.'));
		});
	};
	resetPassword = () => {
		resetPassword(this.email.value)
			.then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
			.catch((error) => this.setState(setErrorMsg(`Email address not found.`)));
	};

	state = {};
	render() {
		return (
			<>
				<AuthHeader title="Welcome!" lead="Use these awesome forms to login or create new account in your project for free." />
				<Container className="mt--8 pb-5">
					<Row className="justify-content-center">
						<Col lg="5" md="7">
							<Card className="bg-secondary border-0 mb-0">
								<CardHeader className="bg-transparent pb-5">
									<div className="text-muted text-center mt-2 mb-3">
										<small>Login with</small>
									</div>
									<div className="btn-wrapper text-center">
										<Button className="btn-neutral btn-icon" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
											<span className="btn-inner--icon mr-1">
												<img alt="..." src={require('assets/img/icons/common/facebook.svg')} />
											</span>
											<span className="btn-inner--text">Facebook</span>
										</Button>
										<Button className="btn-neutral btn-icon" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
											<span className="btn-inner--icon mr-1">
												<img alt="..." src={require('assets/img/icons/common/google.svg')} />
											</span>
											<span className="btn-inner--text">Google</span>
										</Button>
									</div>
								</CardHeader>
								<CardBody className="px-lg-5 py-lg-5">
									<div className="text-center text-muted mb-4">
										<small>Or login with credentials</small>
									</div>
									<Form onSubmit={this.handleSubmit}>
										<FormGroup
											className={classnames('mb-3', {
												focused: this.state.focusedEmail,
											})}
										>
											<InputGroup className="input-group-merge input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-email-83" />
													</InputGroupText>
												</InputGroupAddon>
												<input className="form-control" placeholder="Email" type="email" ref={(email) => (this.email = email)} />
											</InputGroup>
										</FormGroup>
										<FormGroup
											className={classnames({
												focused: this.state.focusedPassword,
											})}
										>
											<InputGroup className="input-group-merge input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-lock-circle-open" />
													</InputGroupText>
												</InputGroupAddon>
												<input className="form-control" placeholder="Password" type="password" ref={(pw) => (this.pw = pw)} />
											</InputGroup>
										</FormGroup>
										<div className="text-center">
											<Button className="my-4" color="primary" type="submit">
												Sign in
											</Button>
										</div>
									</Form>
									{this.state.loginMessage && (
										<div className="alert alert-danger" role="alert">
											<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
											<span className="sr-only">Error:</span>
											&nbsp;{this.state.loginMessage}{' '}
											<a href="#" onClick={this.resetPassword} className="alert-link">
												Forgot Password?
											</a>
										</div>
									)}
								</CardBody>
							</Card>
							<Row className="mt-3">
								<Col xs="6"></Col>
								<Col className="text-right" xs="6">
									<Link to="/signup" className="text-light">
										<small>Create new account</small>
									</Link>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default Login;
