// import {Link} from 'react-router-dom';
import Filter from '../Components/Filter';

const dummyForm = [
	{
		topics:
			'Welcome enabler! please read this before posting. Before you make a new topic or post, Please read community guidelines. We aim to be friendliest community for online mental health support',
		Users: '',
		Replies: 66,
		Views: '15.1k',
		Activity: '11d',
	},
];
console.log(dummyForm);

const Home = () => {
	return (
		<div className="home">
			<div className="container">
				<Filter></Filter>
				<div className="tableHead">
					<div className="topic">Topic</div>
					<div className="category">Category</div>
					<div className="users">Users</div>
					<div className="replies">Replies</div>
					<div className="views">Views</div>
					<div className="activity">Activity</div>
				</div>

				<div className="forumList">
					<div className="forumbox">
						<div className="topic">
							<h4>
								<i className="fa-solid fa-thumbtack"></i> Welcome enabler!
								please read this before posting.
							</h4>
							<p>
								Before you make a new topic or post, Please read community
								guidelines. We aim to be friendliest community for online mental
								health support
							</p>
						</div>
						<div className="category">Category</div>
						<div className="users">
							<span style={{background: '#800080'}} className="userLogo">
								A
							</span>
							<span className="userLogo">B</span>
							<span style={{background: '#ffa500'}} className="userLogo">
								C
							</span>
						</div>
						<div className="replies">66</div>
						<div className="views">15.1k</div>
						<div className="activity">11d</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
