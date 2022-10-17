import { useState } from 'react';
import FormInput from './form-input.component';

const defaultFormField = {
	reciever: "",
	amaount: 0,
}

export default function MoneyTransfer() {
	const [formField, setFormField] = useState(defaultFormField);
	const {reciever, amaount} = formField;

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormField({
			...formField, [name]: value
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<FormInput name="reciever" info="username" type="text" value={reciever} onChange={handleChange} />
			<FormInput name="amaount" type="number" value={amaount} onChange={handleChange} />
			<FormInput type="submit" value="Transfer" />
		</form>
	)
}