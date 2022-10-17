import {useContext} from "react";
import {Link} from 'react-router-dom';
import { UserContext } from "../context/user.context";


export default function Navigation() {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const handleClick = () => {
		setCurrentUser({
			username: null,
			balance: null
		})
	}
	return (
		<div className="navigation-container">
			{currentUser.username ? 
				<>
					<h2>Hello, {currentUser.username} </h2>
			 		<button className="nav-link" onClick={handleClick}>Log out</button>
				</> : 
			<>
				<h2> Welcome </h2>
				<Link className="nav-link" to="/register">Register</Link>
			<Link className="nav-link" to="/login">Login</Link>
			</>}
			
			<Link className="nav-link" to="transfer">
				Transfer Money
			</Link>
		</div>
	)
}