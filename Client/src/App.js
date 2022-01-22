import Seats from './Pages/Seats/Seats';
import Login from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from './context/Context';
import Payment from './components/Payment/Payment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext} from 'react';

function App() {
  const context = useContext(Context);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          {/* <Route exact path="/" element={<Seats />} />
          <Route exact path="/payment/:user" element={<Payment/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
