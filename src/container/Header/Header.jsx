import React from "react";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_header">
			<h1 className="app__header-h1">The best of</h1>
			<h2 className="app__header-h2">Brazilian Cuisine</h2>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
				commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
				Diuretics paradis num copo é motivis de denguis. Em pé sem cair, deitado
				sem dormir, sentado sem cochilar e fazendo pose. Pra lá, depois divoltis
				porris, paradis.
			</p>
			{/* <button type="button" className="custom__button">
				Explore Menu
			</button> */}
		</div>

		<div className="app__wrapper_img">
			<img src={images.feijoada} alt="header_img" />
		</div>
	</div>
);

export default Header;
