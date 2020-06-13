import React from 'react';
import Calendar from './Calendar';

const Booking = () => (
  <div className="container_booking">
    <div className="row_booking">
      <div className="column_booking">
        <img src='https://freetablephotos.s3-us-west-1.amazonaws.com/8.jpg' width="100%"/>
      </div>
      <div className="column_booking">
        <form action="/action_page.php">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          />
          <input type="submit" value="Submit" />
          <Calendar />
        </form>
      </div>
    </div>
  </div>
);

export default Booking;
