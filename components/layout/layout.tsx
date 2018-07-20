import React from 'react';
import { Header, Footer } from '.'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props}
        <Footer />
      </div>
    )
  }
}
