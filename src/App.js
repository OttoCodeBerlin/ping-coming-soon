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
    const emptyHelper = this.state.email.length === 0
    const emailHelper = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null
    if (emptyHelper) {
      this.setState({
        isEmpty: true,
        isNotEmail: false,
      })
    } else if (emailHelper) {
      this.setState({
        isEmpty: false,
        isNotEmail: true,
      })
    } else {
      this.setState({
        isEmpty: false,
        isNotEmail: false,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <img src={logo} alt="" className="ping-logo" />

        <h1 className="lightgrey">
          We are launching <span className="bold darkblue">soon!</span>
        </h1>
        <h5 className="darkblue">Subscribe and get notified</h5>
        <form action="" method="post" noValidate>
          <input
            className={
              this.state.isEmpty || this.state.isNotEmail ? 'inputs input-left input-error' : 'inputs input-left'
            }
            type="text"
            name="email"
            id="email"
            placeholder="Your email address..."
            value={this.state.email}
            onChange={(e) => this.handleInput(e)}
          />

          {this.state.isEmpty ? (
            <small className="small-warning mobile small-warning-empty">
              Whoops! It looks like you forgot to add your email.
            </small>
          ) : null}
          {this.state.isNotEmail ? (
            <small className="small-warning mobile small-warning-email">Please provide a valid email address.</small>
          ) : null}
          <button className="inputs button-right" onClick={(e) => this.handleSubmit(e)} type="submit">
            Notify Me
          </button>
          <br />
          {this.state.isEmpty ? (
            <small className="small-warning desktop small-warning-empty">
              Whoops! It looks like you forgot to add your email.
            </small>
          ) : null}
          {this.state.isNotEmail ? (
            <small className="small-warning desktop small-warning-email">Please provide a valid email address.</small>
          ) : null}
        </form>
        <img className="illustration" src={illustration} alt="" />
        <br />
        <a href="https://www.facebook.com" className="fa fa-facebook blue">
          {' '}
        </a>
        <a href="https://www.twitter.com" className="fa fa-twitter blue">
          {' '}
        </a>
        <a href="https://www.instagram.com" className="fa fa-instagram blue">
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
