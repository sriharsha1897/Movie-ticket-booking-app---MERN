import style from './signUp.module.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const [state, setState] = useState({
    userName: '',
    email: '',
    password: '',
  });

  let navigate = useNavigate();
  const signUpClickHandler = async () => {
    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/register',
        state
      );
      if (res) {
        alert('Account created');
        setState({ ...state, userName: '', email: '', password: '' });
        navigate('/login');
      }
    } catch (err) {
      console.log('error in sign up');
    }
  };

  return (
    <>
      <Container className={style.mainCon}>
        <Row className="py-4">
          <Col md={6}>
            <center>
              <Link to="/login">
                <h4>LOG IN</h4>
              </Link>
            </center>
          </Col>
          <Col md={6}>
            <h1>SIGN UP</h1>
            <AiOutlineUserAdd className={style.icon} />
            <input
              type="text"
              className={style.signUpInput}
              placeholder="Name"
              type="text"
              value={state.userName}
              onChange={(e) => setState({ ...state, userName: e.target.value })}
            />
            <br />
            <MdAlternateEmail className={style.icon} />
            <input
              type="text"
              className={style.signUpInput}
              placeholder="Email"
              type="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
            <br />
            <RiLockPasswordLine className={style.icon} />
            <input
              type="text"
              className={style.signUpInput}
              placeholder="Password"
              type="password"
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
            <br />
            <Button className={style.btn} onClick={signUpClickHandler}>
              SIGN UP
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
