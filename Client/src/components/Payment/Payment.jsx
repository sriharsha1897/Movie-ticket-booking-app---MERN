import { Col, Container, Row } from 'react-bootstrap';
import style from './payment.module.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Timer from './Timer';
import { Context } from '../../context/Context';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(Context);
  const split = location.pathname.split('/');
  const user = split[split.length - 1];
  const [amount, setAmount] = useState(0);
  const [len, setLen] = useState(0);
  const [gst, setGst] = useState(0);
  const [seatNumbers, setSeatNumber] = useState([]);

  useEffect(() => {
    const getAmount = () => {
      const filterData = context.selectSeats.filter(
        (ele) => ele.isReserved === true && ele.name === user
      );
      const filterSeatNumber = context.selectSeats.map((ele) => ele.seatNumber);
      setSeatNumber(filterSeatNumber);
      const plusAmt = filterData.reduce((acc, cur) => {
        acc += cur.prise;
        return acc;
      }, 0);
      setLen(filterData.length);
      setAmount(plusAmt);
      setGst((plusAmt / 100) * 10);
    };
    getAmount();
  }, []);

  const paymentClickHandler = async () => {
    try {
      await axios.post(`/api/seats/insertmany`, context.selectSeats);
      alert('Payment successfull');
      context.setSelectSeats([]);
      const res = await axios.get('/api/seats');
      context.setAll(res.data);
      context.setSelectColor([]);
      navigate('/');
    } catch (err) {
      console.log('error in payment');
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className={style.main}>
            <h5 className="text-danger pb-5">BOOKING SUMMARY</h5>
            <Row>
              <Col sm={9}>
                <h4>Seats (Ticket {len})</h4>
                <h4>Seats Number</h4>
                {seatNumbers.map((ele) => (
                  <>
                    <b>{ele}</b>,
                  </>
                ))}
              </Col>
              <Col sm={3}>
                <h4>RS {amount}/-</h4>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col sm={9}>
                <p>TAX(GST)</p>
              </Col>
              <Col sm={3}>
                <p>RS {gst}/-</p>
              </Col>
            </Row>
            <hr />
            <Row className="mt-4">
              <Col sm={9}>
                <p>SUB TOTAL</p>
              </Col>
              <Col sm={3}>
                <p>RS {amount + gst}/-</p>
              </Col>
            </Row>

            <button onClick={paymentClickHandler}>Payment</button>
            <center>
              <Timer />
              <Link to="/">Back</Link>
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
