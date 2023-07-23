import logo from '../assets/EFA_Registered Logo.png';
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<div className="search">
					<label htmlFor="search">
						<i className="fa-solid fa-magnifying-glass"></i>
					</label>
					<input id="search" type="text" placeholder="Search All Forums" />

					<div className="topics">
						<p>
							Topics <i className="fa-solid fa-chevron-down"></i>
						</p>
					</div>
				</div>
				<div className="user">
					<div className="latest">
						<span>Latest Topics</span>
						<i className="fa-solid fa-bars"></i>
					</div>
					<div className="notify">
						<div className="total">6</div>
						<i className="fa-regular fa-bell"></i>
					</div>
					<div className="details">
						<div className="nameLogo">J</div>
						<div className="name">John Doe </div>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
