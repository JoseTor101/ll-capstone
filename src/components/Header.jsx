import {useState} from 'react'
import '@styles/header.css'
import Logo from '@media/Logo.svg'
import {Link} from 'react-router-dom'

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  
  return(
    <header tabIndex="0">
      <img src={Logo} id="logo" alt="ll-logo" />
      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a>About</a></li>
          <li><a>Menu</a></li>
          <li><a href="/booking">Reservations</a></li>
          <li><a>Order online</a></li>
          <li><a>Login</a></li>
        </ul>
      </nav>
      <button
        className="burger"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        &#9776;
      </button>
    </header>
  )
}