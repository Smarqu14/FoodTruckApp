/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import Calendar from './Calendar';
import Steps from './Steps';

const Booking = () => {
  const images = [
    'https://freetablephotos.s3-us-west-1.amazonaws.com/8.jpg',
    'https://freetablephotos.s3-us-west-1.amazonaws.com/1.jpg',
    'https://freetablephotos.s3-us-west-1.amazonaws.com/4.jpg',
    'https://freetablephotos.s3-us-west-1.amazonaws.com/7.jpg',
    'https://freetablephotos.s3-us-west-1.amazonaws.com/12.jpg',
  ];

  const [idx, setidx] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [email, setEmail] = useState('');

  const handleIndex = () => {
    const lastIdx = images.length - 1;
    const resetIdx = idx === 0;
    const index = resetIdx ? lastIdx : idx - 1;
    return setidx(index);
  };

  useEffect(() => {
    document.title = firstName;
  }, [firstName]);

  return (
    <div className="container_booking">
      <h1>Tacolicous, Yummy!</h1>
      <div>
        <h4>Steps to reserve tacoTruck</h4>
        <Steps />
      </div>
      <div className="row_booking">
        <div className="column_booking" onClick={() => handleIndex()}>
          <img src={images[idx]} alt="tacotruck" width="100%" height="650px" />
        </div>
        <div className="column_booking">
          <form>
            <input
              type="text"
              id="fname"
              placeholder="Your name.."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="lname"
              placeholder="Your last name.."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              id="email"
              placeholder="Your email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <NumberFormat
              format="+1 (###) ###-####"
              allowEmptyFormatting
              mask="_"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <Calendar startDate={startDate} setStartDate={setStartDate} />
            <textarea
              id="subject"
              placeholder="Special Instructions"
              rows="20"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              cols="50"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
