import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
function DatePickerBox(props) {
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), new Date().getHours()));
  const updateDateSelection = props.onSelect;
  useEffect(() => {
    updateDateSelection(startDate);
  }, [updateDateSelection, startDate])
  const isWeekday = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return (<div className="date-picker-box">
    <p className="label">Pick a date and time for your visit</p>
    <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={date => setStartDate(date)}
      filterDate={isWeekday}
      minDate={new Date()}
      minTime={setHours(setMinutes(new Date(), 0), 16)}
      maxTime={setHours(setMinutes(new Date(), 0), 23)}
      inline
    />

  </div>)
}
export default DatePickerBox;