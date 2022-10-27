import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultFormField = {
  name: "",
  age: "",
  contact: "",
  username: "",
  password: "",
};

export default function RegisterForm() {
  const [formField, setFormField] = useState(defaultFormField);
  const { name, age, contact, username, password } = formField;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      Axios.post("http://localhost:3001/create", { ...formField }).then(
        (res) => {
          if (res.data.code === "ER_DUP_ENTRY") {
            alert("User already exist. Please choose different username");
          } else {
            setFormField(defaultFormField);
            alert("Registration successful");
            navigate("/login");
          }
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <FormInput name="name" type="text" value={name} onChange={handleChange} />
      <FormInput name="age" type="number" value={age} onChange={handleChange} />
      <FormInput
        name="contact"
        type="tel"
        value={contact}
        onChange={handleChange}
      />
      <FormInput
        name="username"
        type="text"
        value={username}
        onChange={handleChange}
      />
      <FormInput
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <FormInput type="submit" value="submit" />
    </form>
  );
}
