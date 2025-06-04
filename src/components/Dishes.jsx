import '@styles/dishes.css'
import Dessert from '@media/dessert.jpg'

export default function Dishes(){
  return(
    <>
      <div className="dishes">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="dish-cards">
        <div className="dish-card">
          <img src={Dessert} alt="dessert"></img>
          <div className="dish-card-text">
            <div className="dish-card-header">
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Order a delivery</p>

          </div>
        </div>
        <div className="dish-card">
          <img src={Dessert} alt="dessert"></img>
          <div className="dish-card-text">
            <div className="dish-card-header">
              <h3>Bruchetta</h3>
              <p>$5.99</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Order a delivery</p>

          </div>
        </div>
        <div className="dish-card">
          <img src={Dessert} alt="dessert"></img>
          <div className="dish-card-text">
            <div className="dish-card-header">
              <h3>Lemon dessert</h3>
              <p>$5.00</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Order a delivery</p>

          </div>
        </div>
      </div>
    </>
  )
}