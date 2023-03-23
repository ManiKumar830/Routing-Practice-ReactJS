// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-inner-container">
      <img
        className="wave-image"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <p className="nav-text">Wave</p>
    </div>
    <ul className="header-list">
      <li className="items-text">
        <Link className="link-text" to="/">
          Home
        </Link>
      </li>
      <li className="items-text">
        <Link className="link-text" to="/about">
          About
        </Link>
      </li>
      <li className="items-text">
        <Link className="link-text" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
