import React from "react";

import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
	<div className="app__laurels_awards-card">
		<img src={imgUrl} alt="awards" />
		<div className="app__laurels_awards-card_content">
			<p className="p__bentham" style={{ color: "black" }}>
				{title}
			</p>
			<p className="p__opensans" style={{ color: "black" }}>
				{subtitle}
			</p>
		</div>
	</div>
);

const Laurels = () => (
	<div className="app__bg app__wrapper section__padding" id="awards">
		<div className="app__wrapper_info">
			<h1 className="headtext__bentham">Awards</h1>
			<div className="app__laurels_awards">
				{data.awards.map((award) => (
					<AwardCard award={award} key={award.title} />
				))}
			</div>
		</div>

		<div className="app__wrapper_img">
			<img src={images.mandioca} alt="laurels_img" />
		</div>
	</div>
);

export default Laurels;
