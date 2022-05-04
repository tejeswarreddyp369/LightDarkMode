// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    classname: 'dark-mode',
    buttontext: 'Light Mode',
  }

  colorChange() {
    this.setState(prevState => ({
      classname: 'light-mode',
      buttontext: 'Dark Mode',
    }))
  }

  render() {
    const {classname, buttontext} = this.state
    return (
      <div className={classname}>
        <h1>Click To Change Mode</h1>
        <button type="button" onClick={this.colorChange}>
          {buttontext}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
