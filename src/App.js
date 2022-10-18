import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home.component';
import RegisterForm from './components/register-form.component';
import Navigation from './components/navigation.component';
import LoginForm from './components/login-form.component';
import MoneyTransfer from './components/money-transfer.component';
import DepositForm  from './components/deposit-form.component';
import Balance from './components/balance.component';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Navigation />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="transfer" element={<MoneyTransfer />} />
        <Route path="deposit" element={<DepositForm />} />
        <Route path="balance" element={<Balance/>} />
      </Route>
    </Routes>
  )
}

export default App;
