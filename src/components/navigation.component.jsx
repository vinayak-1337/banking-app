import {Link} from 'react-router-dom';

export default function Navigation() {
	return (
		<div className="navigation-container">
			<Link className="nav-link" to="/register">
				Register
			</Link>
			<Link className="nav-link" to="/login">
				Login
			</Link>
			<Link className="nav-link" to="transfer">
				Transfer Money
			</Link>
		</div>
	)
}