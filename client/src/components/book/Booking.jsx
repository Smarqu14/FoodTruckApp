import React from "react";
import Calendar from "./Calendar";

const Booking = () => (
  <div className="container_booking">
    <div className="row_booking">
      <div className="column_booking">
        <img
          src="https://freetablephotos.s3-us-west-1.amazonaws.com/8.jpg"
          width="100%"
        />
      </div>
      <div className="column_booking">
        <form >
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
          <Calendar />
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
);

export default Booking;
