import React from 'react';
import { Item, Button } from 'semantic-ui-react';

const BlogItem = ({ title, subtitle, description, notes, photo, user, createdAt }) => (
	<Item.Group>
		<Item>
			<Item.Image src={photo} />
			<Item.Content>
				<Item.Header as="a">{title}</Item.Header>
				<Item.Meta>
					<span className="cinema">{subtitle}</span>
				</Item.Meta>
				<Item.Description>{description}</Item.Description>
				<Item.Extra>{notes}</Item.Extra>
				<Button>Read More</Button>
			</Item.Content>
		</Item>
	</Item.Group>
);

export default BlogItem;
