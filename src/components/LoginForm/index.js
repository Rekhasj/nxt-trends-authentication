import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(url, option)
    const data = await response.json()
    const message = data.error_msg
    console.log(message)

    if (response.ok === true) {
      this.onSuccessLogin()
    } else if (response.ok === false) {
      this.setState({errorMessage: message})
    }
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          id="username"
          placeholder="Username"
          className="input-field"
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="input-field"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="login-form-container">
        <img
          alt="website login"
          className="website-login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />

        <form className="form-container" onSubmit={this.onSubmitLogin}>
          <img
            alt="website logo"
            className="website-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <div className="input-container">{this.renderUserName()}</div>
          <div className="input-container">{this.renderPassword()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="error-message">{errorMessage}</p>
        </form>
      </div>
    )
  }
}
export default LoginForm
