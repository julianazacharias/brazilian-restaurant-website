import React from "react";
import {
	BsInstagram,
	BsArrowLeftShort,
	BsArrowRightShort,
} from "react-icons/bs";

import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
	const scrollRef = React.useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === "left") {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};

	return (
		<div className="app__gallery flex__center" id="gallery">
			<div className="app__gallery-content">
				<h1 className="headtext__bentham">Our Gallery</h1>
				<p className="p__opensans" style={{ margin: "1rem 0" }}>
					See our dishes, Follow us on Instagram
				</p>
			</div>
			<div className="app__gallery-images">
				<div className="app__gallery-images_container" ref={scrollRef}>
					{[
						images.moqueca,
						images.churrasco,
						images.pratos,
						images.cuscuz,
						images.coxinha,
						images.cafe,
						images.tapioca,
						images.paodequeijo,
						images.acaraje,
						images.doce,
						images.drink,
						images.brigadeiros,
						images.feijoada,
					].map((image, index) => (
						<div
							className="app__gallery-images_card flex__center"
							key={`gallery_image-${index + 1}`}
						>
							<img src={image} alt="gallery_image" />
							<BsInstagram className="gallery__image-icon" />
						</div>
					))}
				</div>
				<div className="app__gallery-images_arrows">
					<BsArrowLeftShort
						className="gallery__arrow-icon"
						onClick={() => scroll("left")}
					/>
					<BsArrowRightShort
						className="gallery__arrow-icon"
						onClick={() => scroll("right")}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
