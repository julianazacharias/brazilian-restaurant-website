import React from "react";

import { images } from "../../constants";

const FindUs = () => (
	<div className="app__bg app__wrapper section__padding" id="contact">
		<div className="app__wrapper_info">
			<h1 className="headtext__bentham" style={{ marginBottom: "2rem" }}>
				Location
			</h1>
			<div className="app__wrapper-content">
				<p className="p__bentham" style={{ color: "black" }}>
					Paulista Avenue - 0000 - São Paulo, Brazil
				</p>
				<p
					className="p__bentham"
					style={{ color: "black", margin: "2.5rem 0", fontSize: "38px" }}
				>
					Opening Hours
				</p>
				<p
					className="p__bentham"
					style={{ color: "black", marginBottom: "1rem" }}
				>
					Monday-Friday:
				</p>
				<p className="p__bentham" style={{ color: "black" }}>
					11:00 am - 03:00 pm
				</p>
				<p className="p__bentham" style={{ color: "black" }}>
					18:00 pm - 11:00 pm
				</p>
				<br />
				<p
					className="p__bentham"
					style={{ color: "black", marginBottom: "1rem" }}
				>
					Saturday-Sunday:
				</p>
				<p className="p__bentham" style={{ color: "black" }}>
					11:00 am - 11:00 pm
				</p>
			</div>
		</div>

		<div className="app__wrapper_img">
			<img src={images.brigadeiro} alt="finus_img" />
		</div>
	</div>
);

export default FindUs;
