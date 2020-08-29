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
// nodejs library that concatenates classes
import classnames from 'classnames';
// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from 'reactstrap';
// core components
import AuthHeader from 'components/Headers/AuthHeader.js';

// firebase
import { signupWithEmail } from '../../../helpers/auth';

function setErrorMsg(error) {
	return {
		signupMessage: error,
	};
}

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			isInvalid: true,
		};
	}

	componentDidMount() {
		document.body.classList.add('bg-default');
	}
	componentWillUnmount() {
		document.body.classList.remove('bg-default');
	}

	handleSubmit = (e) => {
		e.preventDefault();
		signupWithEmail(this.state.email, this.state.password, this.state.name).catch((error) => {
			this.setState(setErrorMsg('An Error occurred. Try again later.'));
		});
	};

	checkIsValid = (e) => {
		const pattern = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
		);
		if (this.state.name.length >= 2 && this.state.password.length >= 8 && pattern.test(this.state.email)) {
			this.setState({ isInvalid: false });
		} else {
			this.setState({ isInvalid: true });
		}
	};

	render() {
		return (
			<>
				<AuthHeader title="Create an account" lead="Use these awesome forms to login or create new account in your project for free." />
				<Container className="mt--8 pb-5">
					<Row className="justify-content-center">
						<Col lg="5" md="7">
							<Card className="bg-secondary border-0">
								<CardHeader className="bg-transparent pb-5">
									<div className="text-muted text-center mt-2 mb-3">
										<small>Sign up with</small>
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
										<small>Or sign up with credentials</small>
									</div>
									<Form onSubmit={this.handleSubmit}>
										<FormGroup
											className={classnames({
												focused: this.state.focusedName,
											})}
										>
											<InputGroup className="input-group-merge input-group-alternative mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-single-02" />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													placeholder="Name"
													type="text"
													onFocus={() => this.setState({ focusedName: true })}
													onBlur={() => this.setState({ focusedName: false })}
													onChange={(e) => this.setState({ name: e.target.value })}
													onKeyUp={(e) => this.checkIsValid()}
												/>
											</InputGroup>
										</FormGroup>
										<FormGroup
											className={classnames({
												focused: this.state.focusedEmail,
											})}
										>
											<InputGroup className="input-group-merge input-group-alternative mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-email-83" />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													placeholder="Email"
													type="email"
													onFocus={() => this.setState({ focusedEmail: true })}
													onBlur={() => this.setState({ focusedEmail: false })}
													onChange={(e) => this.setState({ email: e.target.value })}
													onKeyUp={(e) => this.checkIsValid()}
												/>
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
												<Input
													placeholder="Password"
													type="password"
													onFocus={() => this.setState({ focusedPassword: true })}
													onBlur={() => this.setState({ focusedPassword: false })}
													onChange={(e) => this.setState({ password: e.target.value })}
													onKeyUp={(e) => this.checkIsValid()}
												/>
											</InputGroup>
										</FormGroup>
										<div className="text-center">
											<Button className="mt-4" color="primary" type="submit" disabled={this.state.isInvalid}>
												Create account
											</Button>
										</div>
									</Form>
									{this.state.signupMessage && (
										<div className="alert alert-danger" role="alert">
											<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
											<span className="sr-only">Error:</span>
											&nbsp;{this.state.signupMessage}
										</div>
									)}
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default Register;
