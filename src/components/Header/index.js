import {Component} from 'react'

import {BsCart2} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="heading-main-container">
        <div className="heading-container">
          <h1 className="main-heading">E-Commence</h1>
          <div className="cart-button">
            <BsCart2 fontSize="20" />
            <p className="cart-count-text">0</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
