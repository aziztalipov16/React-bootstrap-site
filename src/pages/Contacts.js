import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';

export default function Contacts() {
	return (
		<Container style={{ width: '500px' }}>
			<h1 className="text-center">Contact us</h1>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email adress</Form.Label>
					<Form.Control />
					<Form.Text>We'll never shate your email with anyone</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Example Textarea</Form.Label>
					<Form.Control as="textarea" rows="3" />
				</Form.Group>

				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="check me out"></Form.Check>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
}
