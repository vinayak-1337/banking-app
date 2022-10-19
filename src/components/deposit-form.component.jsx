import {useState, useContext} from "react";
import FormInput from "./form-input.component";
import Axios from "axios";
import { UserContext } from "../context/user.context";

const defaultFormField = {
	amount: "",
}

export default function DipositForm() {
	const [formField, setFormField] = useState(defaultFormField);
	const { amount } = formField;
	const {currentUser, setCurrentUser} = useContext(UserContext);
	const {id, balance } = currentUser;

	const handleChange = (event) => {
		const {value} = event.target;
		setFormField({
			amount: parseInt(value),
		});
	}
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
		alert("Deposit Successfull")
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
      <FormInput
      	name="amount"
      	type="number"
      	value={amount}
      	onChange= {handleChange}
      	required
      	step="500"
      	min="500"
      	max="50000"
      />
      <FormInput type="submit" value="submit"/>
    </form>
	)
}