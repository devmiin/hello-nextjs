import { Redirect, Session } from '.';

const getJwt = ctx => {
  return Session.getCookie('jwt', ctx.req);
};

const isAuthenticated = ctx => !!getJwt(ctx);

const redirectIfAuthenticated = ctx => {
  if (isAuthenticated(ctx)) {
    Redirect('/user', ctx);
    return true;
  }
  return false;
};

const redirectIfNotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    Redirect('/login', ctx);
    return true;
  }
  return false;
};

const logout = (ctx = {}) => {
  if (process.browser) {
    Session.removeCookie('jwt');
    Redirect('/login', ctx);
  }
};

export default {
  getJwt,
  isAuthenticated,
  redirectIfAuthenticated,
  redirectIfNotAuthenticated,
  logout,
}