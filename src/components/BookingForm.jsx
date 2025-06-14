  import React from 'react';

  export default function BookingForm({
    availableTimes,
    form,
    formIsValid,
    handleChange,
    handleSubmit
  }) {
    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        aria-label="Table booking form"
      >
        <label 
          htmlFor="date"
          data-test-id="date-label">Choose date</label>
        <input
          type="date"
          id="date"
          value={form.date}
          onChange={handleChange}
          aria-required="true"
          required
        />

        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          value={form.time}
          onChange={handleChange}
          placeholder="Eg. 17:00"
          aria-required="true"
          aria-label="Choose time"
          required
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
          aria-required="true"
          aria-label="Number of guests"
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={form.occasion}
          onChange={handleChange}
          aria-label="Occasion"
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" data-testid="submit-btn" value="Make Your reservation" aria-label="Submit reservation" disabled={!formIsValid}/>
      </form>
    );
  }