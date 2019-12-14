import React, { Component, Fragment } from 'react';
import { Button, Form, Modal, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { login } from '../../action/auth';
import { Redirect } from 'react-router-dom';
class LogInModal extends Component {
	state = { open: false, email: '', password: '' };

	show = (dimmer) => () => this.setState({ dimmer, open: true });
	close = () => this.setState({ open: false });
	inputChange = (e) => this.setState({ [e.target.name]: e.target.value });
	render() {
		const { open, dimmer, email, password } = this.state;
		if (this.props.isAuthenticated) return <Redirect to="/blog" />;

		return (
			<Fragment>
				<a className="ui basic button black" onClick={this.show('blurring')}>
					Log In
				</a>
				<Modal
					style={{ width: '60%', height: '50%', marginLeft: '20%', marginRight: '20%', marginTop: '10%' }}
					dimmer={dimmer}
					open={open}
					onClose={this.close}
				>
					<Modal.Header>Log In</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							<Form>
								<Form.Field>
									<label>Email</label>
									<input
										onChange={this.inputChange}
										value={email}
										type="text"
										name="email"
										placeholder="Email"
									/>
								</Form.Field>
								<Form.Field>
									<label>Password</label>
									<input
										onChange={this.inputChange}
										value={password}
										name="password"
										type="password"
										placeholder="Password"
									/>
								</Form.Field>
								<Form.Field>
									<Checkbox label="I agree to the Terms and Conditions" />
								</Form.Field>
							</Form>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button color="black" onClick={this.close}>
							Cancel
						</Button>
						<Button positive content="Log In" onClick={() => this.props.login({ email, password })} />
					</Modal.Actions>
				</Modal>
			</Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(LogInModal);
