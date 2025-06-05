import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "@components/BookingForm";

const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
};

const updateTimes = (state, action) => {
  if(action.type === "update_times" && action.date){
    return window.fetchAPI(new Date(action.date));
  }
    return state;
}

export default function Booking() {
  const navigate = useNavigate();

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
    const uploaded = window.submitAPI(form);
    uploaded && navigate("/confirmed");
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


export {Booking, initializeTimes, updateTimes}