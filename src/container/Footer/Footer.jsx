import React from "react";
import {
	FiFacebook,
	FiInstagram,
	FiTwitter,
	FiPhoneCall,
} from "react-icons/fi";

import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
	<div className="app__footer section__padding" id="login">
		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contact Us</h1>
				<p className="app__address p__opensans">
					Paulista Avenue - 0000 - São Paulo, Brazil
				</p>
				<div className="app__footer-phone_icons">
					<FiPhoneCall />
					<p className="p__opensans">+1 212-344-1230</p>
				</div>
				<div className="app__footer-phone_icons">
					<FiPhoneCall />
					<p className="p__opensans">+1 212-344-1230</p>
				</div>
			</div>

			<div className="app__footer-links_logo">
				<img src={images.sabia} alt="footer_logo" />
				<p className="p__opensans">Social Medias</p>
				<div className="app__footer-links_icons">
					<FiFacebook />
					<FiInstagram />
					<FiTwitter />
				</div>
			</div>

			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Working Hours</h1>
				<p className="p__opensans app__weekdays">Monday-Friday:</p>
				<p className="p__opensans">11:00 am - 03:00 pm</p>
				<p className="p__opensans">18:00 pm - 11:00 pm</p>
				<br />
				<p className="p__opensans app__weekdays">Saturday-Sunday:</p>
				<p className="p__opensans">11:00 am - 11:00 pm</p>
			</div>
		</div>

		<div className="footer__copyright">
			<p className="p__opensans">2024 Sabiá. All Rights reserved.</p>
		</div>
	</div>
);

export default Footer;
