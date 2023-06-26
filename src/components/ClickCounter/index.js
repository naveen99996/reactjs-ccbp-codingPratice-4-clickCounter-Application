// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p>click the button to increase the count!</p>
        <button type="button" onClick={this.increaseCount} className="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
