import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <br></br>
      <Footer />
    </>
  )
}
