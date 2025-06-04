import './App.css'

import Layout from '@pages/Layout'
import Landing from '@pages/Landing'
import Table from '@pages/Table'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Landing /> },
      { path: "/reservations", element: <Table /> }
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


