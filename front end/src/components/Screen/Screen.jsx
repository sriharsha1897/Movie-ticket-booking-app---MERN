import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './screen.module.scss';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Screen = () => {
  const context = useContext(Context);

  const seatClearClickHandler = () => {
    context.setSelectSeats([]);
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className={style.screen}>
              <h2>SCREENS</h2>
              <h6>BOOK YOUR SHOW</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className={`py-5 ${style.main}`}>
            <div className={style.avilable}></div>
            <h7> &nbsp;&nbsp; Available seats</h7>
            <div className={style.reserved}></div>
            <h7> &nbsp;&nbsp; Reserved seats</h7>
            <div className={style.yourReserved}></div>
            <h7> &nbsp;&nbsp; Your Booking</h7>
          </Col>
          <Col
            md={{ span: 7, offset: 3 }}
            className={`text-danger text-center`}
          ></Col>
        </Row>

        {context.selectSeats.length > 0 && (
          <>
            <div style={{ position: 'fixed' }}>
              <Row>
                <h2 className={`text-danger mt-5`}>Your selected seats</h2>
                {context.selectSeats.map((ele) => (
                  <>
                    <Col md={1} key={ele.seatNumber} className={style.select}>
                      <h5>{ele.seatNumber}</h5>
                    </Col>
                  </>
                ))}
              </Row>
              <button
                className={style.seatClear}
                onClick={seatClearClickHandler}
              >
                Clear
              </button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Screen;
