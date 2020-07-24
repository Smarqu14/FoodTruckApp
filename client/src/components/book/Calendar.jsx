import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ startDate, setStartDate }) => (
  <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    showTimeSelect
    timeIntervals={15}
    timeCaption="Time"
    dateFormat="MMMM d, yyyy h:mm aa"
  />
);
export default Calendar;
