import React from 'react'

import { Auth, Session, Redirect } from '../lib'
import { AuthService } from '../services';
import { AppLayout } from '../components/layout'
import { ParticleButton } from '../components/shared';

interface ILoginState {
  error: string;
}

export default class extends React.Component<any, ILoginState> {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
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

  handleSubmit(e) {
    console.log('handleSubmit')
    // e.preventDefault()

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (email || password) {
      return;
    }

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

  render() {
    return (
      <AppLayout>
        <form className="login-form">          
          <input
            type="email"
            placeholder="email"
            name="email"
            className="login-form__input"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="login-form__input"
          />
          <ParticleButton 
            className="login-form__button" 
            clicked={this.handleSubmit}            
          >
            Login
          </ParticleButton>       
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
}
