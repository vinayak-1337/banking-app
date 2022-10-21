import Axios from "axios";
import { useState, useContext } from "react";
import FormInput from "./form-input.component";
import { UserContext } from "../context/user.context";

const defaultFormField = {
  reciever: "",
  amount: 0,
};

export default function MoneyTransfer() {
  const [formField, setFormField] = useState(defaultFormField);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { reciever, amount } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (reciever === currentUser.username) {
      alert("for self transfer use deposit option");
      return;
    }
    if (amount > currentUser.balance) {
      alert("insufficient funds");
      return;
    }
    try {
      Axios.post("http://localhost:3001/transfer", {
        senderId: currentUser.id,
        recieverUsername: reciever,
        amount: amount,
      }).then((res) => {
        console.log(res);
        setCurrentUser({
          ...currentUser,
          balance: currentUser.balance - amount,
        });
        alert("transfer successfull");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <FormInput
        name="reciever"
        info="username"
        type="text"
        value={reciever}
        onChange={handleChange}
        required
      />
      <FormInput
        name="amount"
        type="number"
        value={amount}
        min="100"
        onChange={handleChange}
      />
      <FormInput type="submit" value="Transfer" />
    </form>
  );
}
