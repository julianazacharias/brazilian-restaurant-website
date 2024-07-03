import React from "react";

import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
	<div className="app__bg app__wrapper section__padding" id="chef">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.chef2} alt="chef_image" />
		</div>
		<div className="app__wrapper_info">
			<h1 className="headtext__bentham">Our values</h1>
			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.open} alt="quote_image" />
					<p className="p__opensans">
						Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado.
					</p>
				</div>
				<div className="app__chef-content_quote">
					<p className="p__opensans">
						{" "}
						Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado
						sem dormir, sentado sem cochilar e fazendo pose. Si u mundo tá muito
						paradis? Toma um mé que o mundo vai girarzis! Admodum accumsan
						disputationi eu sit. Vide electram sadipscing et per. Posuere libero
						varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet
						nisi. Negão é teu passadis, eu sou faxa pretis. Nullam volutpat
						risus nec leo commodo, ut interdum diam laoreet. Sed non consequat
						odio. Praesent malesuada urna nisi, quis volutpat erat hendrerit
						non. Nam vulputate dapibus. Diuretics paradis num copo é motivis de
						denguis.
					</p>
					<img src={images.close} alt="quote_image" />
				</div>
			</div>

			<div className="app__chef-sign">
				<p>Rodrigo Ribeiro</p>
				<p className="p__opensans">Main Chef</p>
			</div>
		</div>
	</div>
);

export default Chef;
