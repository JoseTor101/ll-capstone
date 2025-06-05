  import React from 'react';

  export default function BookingForm({
    availableTimes,
    form,
    handleChange,
    handleSubmit
  }) {
    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="date"
          value={form.date}
          onChange={handleChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="time"
          value={form.time}
          onChange={handleChange}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={form.guests}
          onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={form.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    );
  }