import '@styles/main.css'
import chef from '@media/chef.jpg'
import Dishes from './Dishes'

export default function Main(){
  return(
    <main>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a table</button>
        </div>
  
        <img src={chef} alt="restaurant food"></img>
      </div>
      <Dishes />
    </main>
  )
}