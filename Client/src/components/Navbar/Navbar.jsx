import { useContext } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Context } from '../../context/Context';
import style from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const context = useContext(Context);
  const [localStorageData, setLocalStorage] = useState([]);
  let navigate = useNavigate();

  const logoutHandler = () => {
    context.logoutClickHandler();
    setLocalStorage(localStorage.setItem('userDetails', JSON.stringify([])));
    navigate('/login');
  };

  useEffect(() => {
    const data = () => {
      setLocalStorage(JSON.parse(localStorage.getItem('userDetails')));
    };
    data();
  }, []);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>BOOK MY SCREEN</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {localStorageData?.userName
                ? `Signed in as: ${localStorageData.userName}`
                : ''}

              {localStorageData?.userName && (
                <button className={style.logBtn} onClick={logoutHandler}>
                  LOGOUT
                </button>
              )}
              {!localStorageData?.userName && (
                <Link to="/login">
                  <button className={style.logBtn}>LOGIN</button>
                </Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
