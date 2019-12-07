import React, { Component, Fragment } from 'react';
import { Button, Form, Modal, Checkbox } from 'semantic-ui-react';

class LogInModal extends Component {
	state = { open: false };

	show = (dimmer) => () => this.setState({ dimmer, open: true });
	close = () => this.setState({ open: false });

	render() {
		const { open, dimmer } = this.state;

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
									<input placeholder="Email" />
								</Form.Field>
								<Form.Field>
									<label>Password</label>
									<input type="password" placeholder="Password" />
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
						<Button positive content="Log In" onClick={this.close} />
					</Modal.Actions>
				</Modal>
			</Fragment>
		);
	}
}

export default LogInModal;
