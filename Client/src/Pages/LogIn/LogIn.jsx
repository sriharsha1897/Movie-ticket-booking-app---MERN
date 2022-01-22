import style from "./Login.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";
import NavBar from '../../components/Navbar/Navbar';

const Login = () => {
  const context = useContext(Context);
  const [userDetails, setUserDetails] = useState([]);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  let navigation = useNavigate();
  const loginClick = () => {
    context.loginClickHandler(state, setUserDetails);
  };

  useEffect(() => {
    if (context.user) {
      navigation("/");
    }
  }, [context.user]);

  return (
    <>
    <NavBar/>
      <Container className={style.mainCon}>
        <Row className="py-4">
          <Col md={6}>
          <img
              src="https://www.thuthuatweb.net/wp-content/uploads/baiviet/2016/06/last-login.jpg"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            {/* <h1>LOG IN</h1> */}
            <MdAlternateEmail className={style.icon} />
            <input
              type="text"
              className={style.loginInput}
              placeholder="Enter your email"
              type="email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
            <br />
            <RiLockPasswordLine className={style.icon} />
            <input
              type="text"
              className={style.loginInput}
              placeholder="Enter your password"
              type="password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
            <br />
            <Button className={style.btn} onClick={loginClick}>
              LOG IN
            </Button>
          </Col>
          <center>
              <Link to="/signup">
                <h4>SIGN UP</h4>
              </Link>
            </center>
        </Row>
      </Container>
    </>
  );
};

export default Login;
