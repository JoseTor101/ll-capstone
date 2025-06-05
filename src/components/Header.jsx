import '@styles/header.css'
import Logo from '@media/Logo.svg'
import {Link} from 'react-router-dom'

export default function Header(){
  return(
    <header>
      <img src={Logo} id="logo" alt="ll-logo"></img>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a>About</a></li>
          <li><a>Menu</a></li>
          <li><a href="/booking">Reservations</a></li>
          <li><a>Order online</a></li>
          <li><a>Login</a></li>
        </ul>
      </nav>
    </header>
  )
}