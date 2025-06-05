import React, { useState, useReducer, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "@components/BookingForm";
import chef from "@media/chef.jpg";

import '@styles/booking.css'
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


  const formIsValid = useMemo(() => {
    return (
      form.date.trim() !== "" &&
      form.time.trim() !== "" &&
      form.guests.trim() !== "" &&
      form.occasion.trim() !== ""
    );
  }, [form]);

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
    <section id="booking-c">
      <div className="l-booking">
        <h1 id="booking-header">Book a table</h1>
        <BookingForm
          availableTimes={availableTimes}
          form={form}
          formIsValid={formIsValid}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="r-booking">
        <img src={chef} alt="restaurant food"></img>
      </div>
      
    </section>
  );
}


export {Booking, initializeTimes, updateTimes}