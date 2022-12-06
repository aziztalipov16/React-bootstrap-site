import React from 'react';
import { ListGroup, Container, Col, Row, Card } from 'react-bootstrap';

export default function Blog() {
	return (
		<Container>
			<Row>
				<Col md="9">
					<Card className="d-flex">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
						/>
						<Card.Body>
							<h5>Blog Post</h5>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
								nihil recusandae exercitationem magnam commodi voluptatum
								reiciendis harum! Repellendus, voluptates ullam omnis, sint
								voluptatibus quo nostrum sunt vel asperiores voluptatem fugiat.
							</p>
						</Card.Body>
					</Card>
					<Card className="d-flex">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
						/>
						<Card.Body>
							<h5>Blog Post</h5>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
								nihil recusandae exercitationem magnam commodi voluptatum
								reiciendis harum! Repellendus, voluptates ullam omnis, sint
								voluptatibus quo nostrum sunt vel asperiores voluptatem fugiat.
							</p>
						</Card.Body>
					</Card>
					<Card className="d-flex">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
						/>
						<Card.Body>
							<h5>Blog Post</h5>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
								nihil recusandae exercitationem magnam commodi voluptatum
								reiciendis harum! Repellendus, voluptates ullam omnis, sint
								voluptatibus quo nostrum sunt vel asperiores voluptatem fugiat.
							</p>
						</Card.Body>
					</Card>
				</Col>
				<Col md="3">
					<h5> Categories</h5>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>JS</ListGroup.Item>
							<ListGroup.Item>HTML</ListGroup.Item>
							<ListGroup.Item>CSS</ListGroup.Item>
							<ListGroup.Item>C++</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
