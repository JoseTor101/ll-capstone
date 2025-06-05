import './App.css'

import Layout from '@pages/Layout'
import Landing from '@pages/Landing'
import Booking from '@pages/Booking'
import ConfirmedBooking from '@components/ConfirmedBooking'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Landing /> },
      { path: "/booking", element: <Booking /> },
      { path: "/confirmed", element: <ConfirmedBooking /> }
    ],
  },
])


export default function App() {
  return (
    <>
        <RouterProvider router={router}>
       </RouterProvider>
    </>
  )
}


