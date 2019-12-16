import React, { Component, Fragment } from 'react';
import { Button, Form, Modal, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createBlog } from '../../action/blog';

class AddBlogModal extends Component {
	state = { open: false, title: '', subtitle: '', description: '', notes: '' };
	photo = new FormData();
	show = (dimmer) => () => this.setState({ dimmer, open: true });
	close = () => this.setState({ open: false });
	inputChange = (e) => this.setState({ [e.target.name]: e.target.value });
	addFormData = (e) => this.photo.append('blogPhoto', e.target.files[0], e.target.files[0].name);

	render() {
		const { photo, state: { open, dimmer, subtitle, title, description, notes } } = this;
		console.log(this.formData);
		return (
			<Fragment>
				<a className="ui basic button black" onClick={this.show('blurring')}>
					<i className="plus icon" />
					New Blog
				</a>
				<Modal
					style={{ width: '60%', marginLeft: '20%', marginRight: '20%', marginTop: '10%' }}
					dimmer={dimmer}
					open={open}
					onClose={this.close}
				>
					<Modal.Header>New Blog</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							<Form>
								<Form.Field>
									<label>Title</label>
									<input
										onChange={this.inputChange}
										value={title}
										type="text"
										name="title"
										placeholder="Title..."
									/>
								</Form.Field>
								<Form.Field>
									<label>Sub-Title</label>
									<input
										onChange={this.inputChange}
										value={subtitle}
										name="subtitle"
										type="text"
										placeholder="Sub title..."
									/>
								</Form.Field>
								<Form.Field>
									<label>Photo</label>
									<input onChange={this.addFormData} name="photo" type="file" />
								</Form.Field>
								<Form.Field>
									<label>Description</label>
									<textarea
										onChange={this.inputChange}
										value={description}
										name="description"
										type="text"
										placeholder="Description..."
									/>
								</Form.Field>

								<Form.Field>
									<label>Notes</label>
									<input
										onChange={this.inputChange}
										value={notes}
										name="notes"
										type="text"
										placeholder="Notes..."
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
							Clear
						</Button>
						<Button
							positive
							content="Create Blog"
							onClick={() => this.props.createBlog({ title, subtitle, photo, description, notes })}
						/>
					</Modal.Actions>
				</Modal>
			</Fragment>
		);
	}
}

export default connect(null, { createBlog })(AddBlogModal);
