import App, { Container } from 'next/app'
import React from 'react';
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store'

import { Layout } from './../components/layout';

export default withRedux(initStore)(class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
})
