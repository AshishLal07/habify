import {Link} from 'react-router-dom';

const Filter = () => {
	return (
		<>
			<div className="filter">
				<div className="dropdown">
					<span>All Category</span>
					<i className="fa-solid fa-chevron-down"></i>
				</div>
				<div className="dropdown">
					<span>Tags</span>
					<i className="fa-solid fa-chevron-down"></i>
				</div>

				<div className="links">
					<Link className="link">Latest</Link>
					<Link className="link">Unread</Link>
					<Link className="link">Rising</Link>
					<Link className="link">Most Liked</Link>
					<Link className="link">Follow Feed</Link>
				</div>
			</div>
		</>
	);
};

export default Filter;
