import React from 'react'
import logo from './images/logo.svg'
import illustration from './images/illustration-dashboard.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
      <h1>We are launching soon!</h1>
      <h5>Subscribe and get notified</h5>
      <form action="" method="post">
        <input type="email" name="" id="" placeholder="Your email address..." />
        <input type="button" value="Notify Me" />
      </form>
      <img className="illustration" src={illustration} alt="" />
      <a href="www.facebook.com" class="fa fa-facebook blue">
        {' '}
      </a>
      <a href="www.twitter.com" className="fa fa-twitter blue">
        {' '}
      </a>
      <a href="www.instagram.com" className="fa fa-instagram blue">
        {' '}
      </a>
      <br/>
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

export default App
