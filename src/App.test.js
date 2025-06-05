import {render, screen} from '@testing-library/react'
import BookingForm from '@components/BookingForm'

test(
  'Renders a BookingForm label with "Choose date"', ()=>{
    render(<BookingForm />)
    const labelElement = screen.getByText(/choose date/i);
    expect(labelElement).toBeInTheDocument();
  }
)