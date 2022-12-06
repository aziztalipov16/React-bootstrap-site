import React from 'react';
import {
	FormControl,
	Nav,
	Navbar,
	Container,
	Form,
	Button,
} from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';

export default function Header() {
	return (
		<>
			<Navbar
				sticky="top"
				collapseOnSelect
				expand="sm"
				bg="dark"
				variant="dark">
				<Container>
					<Navbar.Brand>
						<img
							src={logo}
							height="30"
							width="30"
							className="d-inline-block align-top"
							alt="error"
						/>
						React Site
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About us</Nav.Link>
							<Nav.Link href="/contacts">Contacts</Nav.Link>
							<Nav.Link href="/blog">Blog</Nav.Link>
						</Nav>
						<Form>
							<FormControl type="text" placeholder="Search" />
						</Form>
						<Button variant="outline-info" className="ms-3">
							Search
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contacts" component={Contacts} />
					<Route exact path="/blog" component={Blog} />
				</Switch>
			</Router>
		</>
	);
}
