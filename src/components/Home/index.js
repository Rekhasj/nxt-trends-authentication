import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-card">
      <div className="home-details-card">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <p className="home-details">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we in a revolution. Your fashion makes you been seen and heard that
          way you are. So,celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <button type="button" className="shop-button">
          Shop Now
        </button>
      </div>

      <img
        alt="clothes that get you noticed"
        className="home-page-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      />
    </div>
  </>
)

export default Home
