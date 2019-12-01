import React, { Fragment } from 'react';
import { Item, Label, Button, Icon } from 'semantic-ui-react';

const items = [
	{
		childKey: 0,
		image: 'https://picsum.photos/200',
		header: 'Create a Sun Visor or Baseball Cap Embellished with Bling',
		description: `Studies show that along with physical exercise, a program of continued learning is key to maintaining a high quality of life. The purpose of SCG CAM's Grand Learning is to bring intellectual enrichment and well-being to Sun City Grand residents through active learning activities. Benefits include stimulating your curiosity, engaging your mind, and building new friendships. Courses on a variety of topics are offered including history, art, music, geography, current events, religion, science and more. You can explore your favorite subjects or discover new areas of interest.`,
		meta: 'No interruptions- wait to be acknowledged',
		extra: (
			<Fragment>
				<Label icon="thermometer half" content="Classroom temps vary" />
				<Button primary floated="right">
					<Icon name="left book" />
					Read Blog
				</Button>
			</Fragment>
		)
	},
	{
		childKey: 1,
		image: 'https://picsum.photos/200',
		header: 'Future Consciousness Seminar',
		description: `Studies show that along with physical exercise, a program of continued learning is key to maintaining a high quality of life. The purpose of SCG CAM's Grand Learning is to bring intellectual enrichment and well-being to Sun City Grand residents through active learning activities. Benefits include stimulating your curiosity, engaging your mind, and building new friendships. Courses on a variety of topics are offered including history, art, music, geography, current events, religion, science and more. You can explore your favorite subjects or discover new areas of interest.`,
		meta: 'The correct fee for Desert Foods is $35',
		extra: (
			<Fragment>
				<Label icon="handshake outline" content="Treat all with respect" />
				<Button primary floated="right">
					<Icon name="left book" />
					Read Blog
				</Button>
			</Fragment>
		)
	}
];

const BlogItem = () => (
	<Item.Group devided items={items}>
		{items.map((i) => (
			<Item>
				<Item.Image src={i.image} />

				<Item.Content>
					<Item.Header as="a">{i.header}</Item.Header>
					<Item.Meta>
						<span className="cinema">{i.meta}</span>
					</Item.Meta>
					<Item.Description>{i.description}</Item.Description>
					<Item.Extra>{i.extra}</Item.Extra>
				</Item.Content>
			</Item>
		))}
	</Item.Group>
);

export default BlogItem;
