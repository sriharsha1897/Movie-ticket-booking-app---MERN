import style from '../SignUp/signUp.module.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const context = useContext(Context);
  const [userDetails, setUserDetails] = useState([]);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  let navigation = useNavigate();
  const loginClickHand = () => {
    context.loginClickHandler(state, setUserDetails);
  };

  useEffect(() => {
    if (context.user) {
      navigation('/');
    }
  }, [context.user]);

  return (
    <>
      <Container className={style.mainCon}>
        <Row className="py-4">
          <Col md={6}>
            <center>
              <Link to="/signup">
                <h4>Sign Up</h4>
              </Link>
            </center>
          </Col>
          <Col md={6}>
            <h1>Log In</h1>
            <MdAlternateEmail className={style.icon} />
            <input
              type="text"
              className={style.signUpInput}
              placeholder="Email"
              type="email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
            <br />
            <RiLockPasswordLine className={style.icon} />
            <input
              type="text"
              className={style.signUpInput}
              placeholder="Password"
              type="password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
            <br />
            <Button className={style.btn} onClick={loginClickHand}>
              Log In
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
