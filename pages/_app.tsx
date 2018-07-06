import App, { Container } from 'next/app'
import React from 'react';
import Layout from './../components/MyLayout';

export default class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
