import {render, screen, fireEvent} from '@testing-library/react'
import React from 'react'
import BookingForm from '@components/BookingForm'
import {initializeTimes, updateTimes} from '@pages/Booking'

test(
  'Renders a BookingForm label with "Choose date"', ()=>{
    render(<BookingForm
            form={{ date: "", time: "", guests: "", occasion: "" }}
            handleChange={() => {}}
            handleSubmit={() => {}}
            availableTimes={["17:00", "18:00"]}
          />)
    const labelElement = screen.getByText(/choose date/i);
    expect(labelElement).toBeInTheDocument();
  }
);


test('InitializeTimes returns the correct initial times', () => {
  window.fetchAPI = jest.fn(() => [
    "17:00", "17:30", "18:00", "18:30", "20:00", "22:00", "22:30"
  ]);

  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual([
    "17:00", "17:30", "18:00", "18:30", "20:00", "22:00", "22:30"
  ]);
});

test('updateTimes returns the correct times',()=>{
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE_TIMES", payload: "2023-12-01" };
  expect(updateTimes(state, action)).toEqual(state);
});



test('Submit is successful', () => {
  const handleSubmit = jest.fn((e) => e.preventDefault());
  render(
    <BookingForm
      form={{ date: "2023-06-05", time: "17:00", guests: "2", occasion: "Birthday" }}
      handleChange={() => {}}
      formIsValid={true}
      handleSubmit={handleSubmit}
      availableTimes={["17:00", "18:00"]}
    />
  );

  const submitButton = screen.getByTestId("submit-btn");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
});

test('Submit button is disabled when form is empty', () => {
  render(
    <BookingForm
      form={{ date: "", time: "", guests: "", occasion: "" }}
      handleChange={() => {}}
      formIsValid={false}
      handleSubmit={() => {}}
      availableTimes={["17:00", "18:00"]}
    />
  );

  const submitButton = screen.getByTestId("submit-btn");
  expect(submitButton).toBeDisabled();
});