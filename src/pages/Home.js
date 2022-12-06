import React from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';

export default function Home() {
	return (
		<>
			<CarouselBox />;
			<Container>
				<h2 className="text-center ">Our Team</h2>
				<CardGroup className="m-auto">
					<Card>
						<Card.Img
							variant="top"
							src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=2000"
						/>
						<Card.Body>
							<Card.Title>Developers</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
								architecto.
							</Card.Text>
							<Button variant="primary">About Team</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=2000"
						/>
						<Card.Body>
							<Card.Title>Developers</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
								architecto.
							</Card.Text>
							<Button variant="primary">About Team</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=2000"
						/>
						<Card.Body>
							<Card.Title>Developers</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
								architecto.
							</Card.Text>
							<Button variant="primary">About Team</Button>
						</Card.Body>
					</Card>
				</CardGroup>
			</Container>
		</>
	);
}
