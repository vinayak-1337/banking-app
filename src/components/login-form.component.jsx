import { useState, useContext } from "react";
import FormInput from "./form-input.component";
import Axios from "axios";
import { UserContext } from "../context/user.context";
import { useNavigate } from "react-router-dom";

const defaultFormField = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const [formField, setFormField] = useState(defaultFormField);
  const { username, password } = formField;
  const { setCurrentUser } = useContext(UserContext);
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
      Axios.post("http://localhost:3001/login", { ...formField }).then(
        (res) => {
          if (typeof res.data === "object") {
            console.log(res.data);
            const { id, name, username, balance } = res.data;
            setCurrentUser({
              id,
              username,
              name,
              balance,
            });
            navigate("/");
          } else {
            alert("incorrect username or password");
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
