import { createContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Context = createContext();

const ContextCom = (props) => {
  const [user, setUser] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [selectSeats, setSelectSeats] = useState([]);
  const [all, setAll] = useState([]);
  const [selectColor, setSelectColor] = useState([]);

  const range = (start, end) => {
    const res = [];
    for (let i = start; i < end + 1; i++) {
      res.push(i);
    }
    return res;
  };

  useEffect(() => {
    const getSeats = async () => {
      try {
        const res = await axios.get('/api/seats');
        setAll(res.data);
      } catch (err) {
        console.log('error in getting seats', err);
      }
    };
    getSeats();
  }, []);

  // save in localstorage

  // user login details
  const loginClickHandler = async (state, setDetails) => {
    try {
      const res = await axios.post('/api/auth/login', state);
      setDetails(res.data);
      if (res.data) {
        setUser(res.data.userName);
        setUserDetails(res.data);
        const localData = localStorage.setItem(
          'userDetails',
          JSON.stringify(res.data)
        );
      } else {
        setUser(false);
      }
    } catch (err) {
      alert('Check username password');
      console.log('error in log in');
    }
  };

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem('userDetails')));
  }, []);

  // logout
  const logoutClickHandler = () => {
    setUserDetails([]);
    setUser(false);
    setSelectSeats([]);
    setSelectColor([]);
  };
  //   store
  const store = {
    user,
    userDetails,
    loginClickHandler,
    logoutClickHandler,
    range,
    // selectSeatsHandler,
    selectSeats,
    setSelectSeats,
    all,
    setAll,
    selectColor,
    setSelectColor,
  };
  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

export default ContextCom;
