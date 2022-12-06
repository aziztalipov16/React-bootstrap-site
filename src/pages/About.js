import React from 'react';

import { Nav, Tab, Row, Col, Container } from 'react-bootstrap';

import design from '../assets/design.jpg';
import team from '../assets/team.jpg';
import programming from '../assets/programming.jpg';
import framework from '../assets/framework.jpg';

export default function About() {
	return (
		<Container>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column mt-2">
							<Nav.Item>
								<Nav.Link eventKey="first">Design</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Team</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="third">Programming</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fourth">Framework</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content className="mt-3">
							<Tab.Pane eventKey="first">
								<img src={design} />
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
									harum veritatis nemo maxime, libero voluptatum eos voluptates
									quae dolorem animi quibusdam in. Eligendi, quam veritatis?
								</p>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<img src={team} />
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
									harum veritatis nemo maxime, libero voluptatum eos voluptates
									quae dolorem animi quibusdam in. Eligendi, quam veritatis?
								</p>
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<img src={programming} />
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
									harum veritatis nemo maxime, libero voluptatum eos voluptates
									quae dolorem animi quibusdam in. Eligendi, quam veritatis?
								</p>
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<img src={framework} />
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
									harum veritatis nemo maxime, libero voluptatum eos voluptates
									quae dolorem animi quibusdam in. Eligendi, quam veritatis?
								</p>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</Container>
	);
}
