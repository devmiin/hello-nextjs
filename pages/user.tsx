import React from 'react';

import { Auth } from '../lib'
import { UserService } from '../services'
import { AppLayout } from '../components/layout'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  static async getInitialProps(ctx) {
    if (Auth.redirectIfNotAuthenticated(ctx)) {
      return {};
    }

    const id = ctx.query && ctx.query.id;
    const jwt = Auth.getJwt(ctx);
    const res = await (id ? UserService.getUser(jwt, id)
      : UserService.getCurrentUser(jwt));

    return {
      user: res.data,
      authenticated: !!jwt,
      query: !!id
    };
  }

  render() {
    return (
      <AppLayout>
        <a onClick={this.handleLogout}>Logout</a>
        User Page
      </AppLayout>
    )
  }

  handleLogout(e) {
    e.preventDefault()
    Auth.logout()
  }
}