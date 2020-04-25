import React from 'react'
import logo from './images/logo.svg'
import illustration from './images/illustration-dashboard.png'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      isEmpty: false,
      isNotEmail: false,
    }
  }

  handleInput(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.state.email.length === 0 ? this.setState({ isEmpty: true }) : this.setState({ isEmpty: false })
    this.setState({
      isNotEmail: this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null,
    })
  }

  render() {
    return (
      <div className="App">
        <img src={logo} alt="" className="ping-logo" />

        <h1 className="lightgrey">
          We are launching <span className="bold darkblue">soon!</span>
        </h1>
        <h5 className="darkblue">Subscribe and get notified</h5>
        <form action="" method="post">
          {/*       - The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*
 */}
          <input
            className="inputs input-left"
            type="email"
            name="email"
            id="email"
            placeholder="Your email address..."
            value={this.state.email}
            onChange={(e) => this.handleInput(e)}
          />
          <button className="inputs button-right" onClick={(e) => this.handleSubmit(e)} type="submit">
            Notify Me
          </button>
        </form>
        <img className="illustration" src={illustration} alt="" />
        <br />
        <a href="www.facebook.com" className="fa fa-facebook blue">
          {' '}
        </a>
        <a href="www.twitter.com" className="fa fa-twitter blue">
          {' '}
        </a>
        <a href="www.instagram.com" className="fa fa-instagram blue">
          {' '}
        </a>
        <br />
        <small>&copy; Copyright Ping. All rights reserved.</small>
        <footer>
          <small>
            Challenge by{' '}
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/OttoCodeBerlin">OttoCodeBerlin</a>.
          </small>
        </footer>
      </div>
    )
  }
}

export default App
