import {Link} from 'react-router-dom';
import logo from '../assets/EFA_Registered Logo.png';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="reach">
					<div className="footerLogo">
						<img src={logo} alt="" />
					</div>
					<div className="links">
						<Link className="link" to={'#'}>
							Support
						</Link>
						<Link className="link" to={'#'}>
							About
						</Link>
						<Link className="link" to={'#'}>
							Contact Us
						</Link>
						<Link className="link" to={'#'}>
							The Team
						</Link>
						<Link className="link" to={'#'}>
							Art
						</Link>
					</div>
				</div>
				<div className="support">
					<div className="links">
						<Link className="link" to={'#'}>
							Ⓒ Emotional First Aid Academy
						</Link>
						<Link className="link" to={'#'}>
							Terms
						</Link>
						<Link className="link" to={'#'}>
							Privacy
						</Link>
						<Link className="link" to={'#'}>
							SendFeedback
						</Link>
					</div>
					<div className="socials">
						<Link className="link">
							<i className="fa-brands fa-facebook"></i>
						</Link>
						<Link className="link">
							<i className="fa-brands fa-twitter"></i>
						</Link>
						<Link className="link">
							<i className="fa-brands fa-google-plus-g"></i>
						</Link>
						<Link className="link">
							<i className="fa-solid fa-cloud"></i>
						</Link>
						<Link className="link">
							<i
								style={{transform: 'rotate(45deg)'}}
								className="fa-solid fa-wifi"
							></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
