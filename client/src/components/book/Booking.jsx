/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import Calendar from './Calendar';
import Steps from './Steps';
import { data } from '../../data/imagesData';
import {
  Wrapper,
  Section,
  Griditem,
  ImageDiv,
} from '../styled/booking';

const Booking = () => {
  const [idx, setidx] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [email, setEmail] = useState('');

  const handleIndex = () => {
    const lastIdx = data.length - 1;
    const resetIdx = idx === 0;
    const index = resetIdx ? lastIdx : idx - 1;
    return setidx(index);
  };

  const printValues = (event) => {
    event.preventDefault();
    console.log(`Thank you for being interested ${firstName} ${lastName}`);
  };

  return (
    <Wrapper>
      <h1>HelloWorld</h1>
      <Section>
        <Griditem onClick={() => handleIndex()}>
          <Steps />
          <ImageDiv backgroundImage={data[idx]} alt="tacotruck" />
        </Griditem>
        <Griditem>
          <form onSubmit={printValues}>
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
        </Griditem>
      </Section>
    </Wrapper>
  );
};

export default Booking;
