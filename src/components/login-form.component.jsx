import {useState, useContext} from "react";
import FormInput from "./form-input.component";
import Axios from "axios";
import { UserContext } from "../context/user.context";

const defaultFormField = {
	username: "",
	password: "",
}

export default function LoginForm() {
	const [formField, setFormField] = useState(defaultFormField);
	const {username, password} = formField;
	const { currentUser, setCurrentUser} = useContext(UserContext);

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormField({
			...formField, [name]: value
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		Axios.post(
			'http://localhost:3001/getuser', 
			{...formField}
		).then((res)=>console.log(res.data));
	}

	return (
    <form className="form-container" onSubmit={handleSubmit}>
      <FormInput name="username" type="text" value={username} onChange= {handleChange}/>
      <FormInput name="password" type="password" value={password} onChange= {handleChange}/>
      <FormInput type="submit" value="submit"/>
    </form>
	)
}