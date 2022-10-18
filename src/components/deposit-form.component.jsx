import {useState} from "react";
import FormInput from "./form-input.component";
import Axios from "axios";

const defaultFormField = {
	username: null,
	amount: null,
}

export default function DipositForm() {
	const [formField, setFormField] = useState(defaultFormField);
	const { amount } = formField;

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormField({
			...formField, [name]: value
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			Axios.post(
			'http://localhost:3001/create', 
			{...formField})
			.then((res) => console.log(res.data));
		} catch (error) {
			console.log(error);
		}
		setFormField(defaultFormField);
		alert("Registration successfull");
		// navigate("/login");
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
      <FormInput name="amount" type="number" value={amount} onChange= {handleChange}/>
      <FormInput type="submit" value="submit"/>
    </form>
	)
}