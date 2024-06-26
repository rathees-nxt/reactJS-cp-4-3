// Write your code here
import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruit-app-container">
        <div className="fruits-counter">
          <h1 className="heading">
            Bob ate <span className="count-color">{mangoCount}</span>
            mangoes
            <span className="count-color">{bananaCount}</span>
            bananas
          </h1>
          <div className="counter-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onMangoIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onBananaIncrement}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
