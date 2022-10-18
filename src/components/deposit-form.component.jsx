import {useState, useContext} from "react";
import FormInput from "./form-input.component";
import Axios from "axios";
import { UserContext } from "../context/user.context";

const defaultFormField = {
	amount: 0,
}

export default function DipositForm() {
	const [formField, setFormField] = useState(defaultFormField);
	const { amount } = formField;
	const {currentUser, setCurrentUser} = useContext(UserContext);
	const {id, balance } = currentUser;
	console.log(currentUser);

	const handleChange = (event) => {
		const {value} = event.target;
		console.log(value);
		setFormField({
			amount: parseInt(value),
		});
	}
	console.log({amount, balance});
	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			Axios.post(
			'http://localhost:3001/deposit', 
			{id: id, updatedBalance: balance + amount })
			.then((res) => console.log(res.data));
		} catch (error) {
			console.log(error);
		}
		setCurrentUser({...currentUser, balance: balance + amount })
		setFormField(defaultFormField);
		// navigate("/login");
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
      <FormInput name="amount" type="number" value={amount} onChange= {handleChange}/>
      <FormInput type="submit" value="submit"/>
    </form>
	)
}