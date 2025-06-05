import BookingForm from "@components/BookingForm";
import React, { useState, useReducer } from "react";

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];


const updateTimes = (state, action) => {
    return initializeTimes();
}

export default function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
    if(e.target.id === "date"){
      dispatch({type: "update_times", date: e.target.value});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}