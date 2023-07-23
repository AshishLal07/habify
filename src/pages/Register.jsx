import logo from '../assets/EFA_Registered Logo.png';
import NewBie from '../assets/NewBie.png';
import Messenger from '../assets/Messenger.png';
import Pen from '../assets/I_wrote_this.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Google from '../assets/google-plus.png';
import Youtube from '../assets/youtube.png';
import background from '../assets/Icon_Background.png';

const Register = () => {
	return (
		<div className="register">
			<div className="nav">
				Already have a Account? <button>Sign In</button>
			</div>
			<div className="back">
				<div className="img">
					<img src={background} alt="" />
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<div className="info">
						<h3>Create a Emotional First Aid - Enabler Account</h3>
						<p>
							By singin up you can start posting, replaying to topics, earn
							badges, favorite, vote topics and many more.
						</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="regForm">
					<form className="userDetails">
						<div className="name">
							<label className="fname">
								<p>First Name</p>
								<input type="text"></input>
							</label>
							<label className="lname">
								<p>Last Name</p>
								<input type="text"></input>
							</label>
						</div>

						<label className="username">
							<p>Username</p>
							<input type="text"></input>
						</label>
						<label className="">
							<p>Email</p>
							<input type="email"></input>
						</label>
						<label className="">
							<p>Password</p>
							<input type="password"></input>
						</label>
					</form>
					<div className="optional">
						<div className="setting">
							<hr />
							<div className="header">
								<p>
									Privacy Setting <span>(OPTIONAL)</span>
								</p>
								<div style={{background: '#FAEE9E'}} className="image">
									<img src={NewBie} alt="user" />
								</div>
							</div>

							<p className="title">who can see my profile?</p>

							<form className="privacy">
								<div className="radioBox ">
									<input id="everyone" name="visible" type="radio"></input>
									<label htmlFor="everyone">Everyone</label>
								</div>
								<div className="radioBox ">
									<input id="friends" name="visible" type="radio"></input>
									<label htmlFor="friends">Only Friends</label>
								</div>
								<div className="radioBox ">
									<input id="invite" name="visible" type="radio"></input>
									<label htmlFor="invite">Invite Only</label>
								</div>
							</form>

							<p className="title">
								Automativaly share my posts and replies on Social Networks
							</p>

							<form className="Social">
								<div className="radioBox ">
									<input id="facebook" name="facebook" type="radio"></input>
									<label htmlFor="facebook">
										<img width={'18px'} height={'18px'} src={Facebook} alt="" />
										<span>facebook</span>
									</label>
								</div>
								<div className="radioBox ">
									<input id="twitter" name="twitter" type="radio"></input>
									<label htmlFor="twitter">
										<img width={'18px'} height={'18px'} src={Twitter} alt="" />
										<span>Twitter</span>
									</label>
								</div>
								<div className="radioBox ">
									<input id="google" name="google" type="radio"></input>
									<label htmlFor="google">
										<img width={'18px'} height={'18px'} src={Google} alt="" />
										<span>Google</span>
									</label>
								</div>
							</form>
						</div>
						<div className="survey">
							<hr />
							<div className="header">
								<p>
									Small Survey <span>(OPTIONAL)</span>
								</p>
								<div className="image" style={{background: '#A97FC3'}}>
									<img src={Messenger} alt="user" />
								</div>
							</div>

							<div className="questions">
								<form action="">
									<div className="age">
										<label htmlFor="id">How old are you? </label>
										<input id="age" type="text" />
									</div>
									<div className="gender">
										<label htmlFor="gender">Who are you? </label>
										<select name="gender" id="gender">
											<option value="male">Male</option>
											<option value="female">Female</option>
										</select>
									</div>
									<div className="friendly">
										<label htmlFor="friendly">
											Will you be friendly here?{' '}
										</label>
										<select name="friendly" id="friendly">
											<option value="">Select</option>
										</select>
									</div>
									<div className="reach">
										<label htmlFor="reach">Where do you heard about us? </label>
										<select name="reach" id="reach">
											<option value="">By Search Engine</option>
										</select>
									</div>
								</form>
							</div>
						</div>
						<div className="socialsConnect">
							<hr />
							<div className="header">
								<p>
									Link Social Networks <span>(OPTIONAL)</span>
								</p>
								<div className="image" style={{background: '#f37877'}}>
									<img src={Pen} alt="user" />
								</div>
							</div>
							<div className="connection">
								<form>
									<div className="socialNetwork">
										<label htmlFor="facebook">
											<img
												width={'18px'}
												height={'18px'}
												src={Facebook}
												alt=""
											/>
											<span>facebook</span>
										</label>
										<input id="facebook" name="facebook" type="text"></input>
									</div>
									<div className="socialNetwork">
										<label htmlFor="twitter">
											<img
												width={'18px'}
												height={'18px'}
												src={Twitter}
												alt=""
											/>
											<span>Twitter</span>
										</label>
										<input id="twitter" name="twitter" type="text"></input>
									</div>
									<div className="socialNetwork">
										<label htmlFor="google">
											<img width={'18px'} height={'18px'} src={Google} alt="" />
											<span>Google</span>
										</label>
										<input id="google" name="google" type="text"></input>
									</div>
									<div className="socialNetwork">
										<label htmlFor="youtube">
											<img
												width={'18px'}
												height={'18px'}
												src={Youtube}
												alt=""
											/>
											<span>youtube</span>
										</label>
										<input id="youtube" name="youtube" type="text"></input>
									</div>
								</form>
							</div>
						</div>
						<div className="category">
							<hr />
							<div className="header">
								<p>
									Interested Categories <span>(OPTIONAL)</span>
								</p>

								{/* <div className="image" style={{background: '#A97FC3'}}>
									<img src={Pen} alt="user" />
								</div> */}
							</div>
							<div className="interest">
								<form action="">
									<div className="radioBox ">
										<input id="select" name="select" type="radio"></input>
										<label htmlFor="select">SelectAll</label>
									</div>
									<div style={{textAlign: 'right'}} className="radioBox ">
										<input id="health" name="health" type="radio"></input>
										<label htmlFor="health">Mental Health</label>
									</div>
									<div className="radioBox ">
										<input id="tips" name="tips" type="radio"></input>
										<label htmlFor="tips">MH Tips</label>
									</div>
									<div className="radioBox ">
										<input id="support" name="support" type="radio"></input>
										<label htmlFor="support">Support</label>
									</div>
									<div className="radioBox ">
										<input id="enabler" name="enabler" type="radio"></input>
										<label htmlFor="enabler">Enabler</label>
									</div>
									<div className="radioBox ">
										<input id="art" name="art" type="radio"></input>
										<label htmlFor="art">Art</label>
									</div>
									<div className="radioBox ">
										<input id="Q&As" name="Q&As" type="radio"></input>
										<label htmlFor="Q&As">Q&As</label>
									</div>
									<div className="radioBox ">
										<input id="social" name="social" type="radio"></input>
										<label htmlFor="social">Social</label>
									</div>
									<div className="radioBox ">
										<input id="random" name="random" type="radio"></input>
										<label htmlFor="random">Random</label>
									</div>
									<div className="radioBox ">
										<input id="music" name="music" type="radio"></input>
										<label htmlFor="music">Music</label>
									</div>
									<div className="radioBox ">
										<input id="science" name="science" type="radio"></input>
										<label htmlFor="science">Science</label>
									</div>
									<div className="radioBox ">
										<input id="pets" name="pets" type="radio"></input>
										<label htmlFor="pets">Pets</label>
									</div>
									<div className="radioBox ">
										<input id="education" name="education" type="radio"></input>
										<label htmlFor="education">Education</label>
									</div>
									<div className="radioBox ">
										<input id="video" name="video" type="radio"></input>
										<label htmlFor="video">Video</label>
									</div>
								</form>
							</div>
							<div className="terms">
								<hr />
								<form action="">
									<div className="radioBox">
										<input id="terms" name="terms" type="radio"></input>
										<label htmlFor="terms">
											I agree to the Terms & Conditions.
										</label>
									</div>
									<div className="radioBox">
										<input id="news" name="news" type="radio"></input>
										<label htmlFor="news">Subscribe to newsletter</label>
									</div>
								</form>
							</div>
						</div>
					</div>

					<button>Create New Account</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
