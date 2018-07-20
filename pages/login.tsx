import React from 'react'
// import Link from "next/link";

import { Auth, Session, Redirect } from '../lib'
import { AuthService } from '../services';
import { AppLayout } from '../components/layout'

interface ILoginState {
  error: string;
}

export default class extends React.Component<any, ILoginState> {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getInitialProps(ctx) {
    if (Auth.redirectIfAuthenticated(ctx)) {
      return {}
    }

    const success = Session.getCookie('sucess', ctx.req)
    if (success) {
      Session.removeCookie('success')
    }

    return { success }
  }

  render() {
    return(
      <AppLayout>        
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button type="submit">Submit</button>
        </form>

        {/* <p>
          {"Don't have a user? "}
          <Link prefetch href="/register">
            <a>Register</a>
          </Link>
        </p> */}
      </AppLayout>
    )
  }

  handleSubmit(e) {
    e.preventDefault()

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    AuthService.login(email, password)
    .then(res => {
      if (res.data) {
        Session.setCookie('jwt', res.data.jwt)
        Redirect('/user')
        return
      }

      this.setState({
        error: 'error'
      })
    });
  }
}