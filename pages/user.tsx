import React from 'react';
import { Auth } from '../lib'
import { UserService } from '../services'

export default class extends React.Component {
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
      <div>User Page</div>
    )
  }
}