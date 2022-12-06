import React from 'react';
import { Carousel } from 'react-bootstrap';
import carouselPic from '../assets/carouselPic.jpg';
import carouselPic1 from '../assets/carouselPic1.jpg';

export default function CarouselBox() {
	return (
		<Carousel>
			<Carousel.Item className="fit">
				<img className="d-block w-100" src={carouselPic} alt="city" />
				<Carousel.Caption>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
						repellat!
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="fit">
				<img className="d-block w-100" src={carouselPic1} alt="city" />
				<Carousel.Caption>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
						repellat!
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
