import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
	<div
		className="app__aboutus app__bg flex__center section__padding"
		id="about"
	>
		<div className="app__aboutus-content flex__center">
			{/* <div className="app__aboutus-content_about">
				<h1 className="headtext__bentham">About Us</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
					adipiscing ultrices vulputate posuere tristique. In sed odio nec
					aliquet eu proin mauris et.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div> */}

			{/* <div className="app__aboutus-content_knife flex__center">
				<img src={images.knife} alt="about_knife" />
			</div> */}

			<div className="app__aboutus-content_history">
				<h1 className="headtext__bentham">Our History</h1>
				<p className="p__opensans">
					Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo
					num tendi nada. Suco de cevadiss deixa as pessoas mais interessantis.
					Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo,
					vitae iaculis nisl. Bota 1 metro de cachacis aí pra viagem!
					Pellentesque nec nulla ligula. Donec gravida turpis a vulputate
					ultricies. Bota 1 metro de cachacis aí pra viagem! Pra lá, depois
					divoltis porris, paradis. In elementis mé pra quem é amistosis quis
					leo. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
					Nam vulputate dapibus. Quem manda na minha terra sou euzis! Leite de
					capivaris, leite de mula manquis sem cabeça. Não sou faixa preta
					cumpadi, sou preto inteiris, inteiris. Diuretics paradis num copo é
					motivis de denguis. Copo furadis é disculpa de bebadis, arcu quam
					euismod magna. Delegadis gente finis, bibendum egestas augue arcu ut
					est. Paisis, filhis, espiritis santis.
				</p>
			</div>
			<div className="app__aboutus-content_image flex__center">
				<img src={images.graos} alt="about_img" />
			</div>
		</div>
	</div>
);

export default AboutUs;
