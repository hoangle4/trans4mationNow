import React, { Component, Fragment } from 'react';
import { Button, Form, Modal, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { register } from '../../action/auth';
import { Redirect } from 'react-router-dom';

class SignUpModal extends Component {
	state = {
		open: false,
		name: '',
		email: '',
		password: ''
	};

	show = (dimmer) => () => this.setState({ dimmer, open: true });
	close = () => this.setState({ open: false });
	inputChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { open, dimmer, name, email, password } = this.state;
		if (this.props.isAuthenticated) return <Redirect to="/blog" />;

		return (
			<Fragment>
				<a className="ui basic button black" onClick={this.show('blurring')}>
					Sign Up
				</a>
				<Modal
					style={{ width: '60%', height: '50%', marginLeft: '20%', marginRight: '20%', marginTop: '10%' }}
					dimmer={dimmer}
					open={open}
					onClose={this.close}
				>
					<Modal.Header>Sign Up</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							<Form>
								<Form.Field>
									<label>Name</label>
									<input
										value={name}
										type="text"
										onChange={this.inputChange}
										name="name"
										placeholder="Name"
									/>
								</Form.Field>
								<Form.Field>
									<label>Email</label>
									<input
										value={email}
										type="text"
										onChange={this.inputChange}
										name="email"
										placeholder="Email"
									/>
								</Form.Field>
								<Form.Field>
									<label>Password</label>
									<input
										value={password}
										onChange={this.inputChange}
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
						<Button
							positive
							content="Sign Up"
							onClick={() => this.props.register({ name, email, password })}
						/>
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
export default connect(mapStateToProps, { register })(SignUpModal);
