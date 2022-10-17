import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home.component';
import RegisterForm from './components/register-form.component';
import Navigation from './components/navigation.component';
import LoginForm from './components/login-form.component';
import MoneyTransfer from './components/money-transfer.component';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Navigation />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="transfer" element={<MoneyTransfer />} />
      </Route>
    </Routes>
  )
}

export default App;
