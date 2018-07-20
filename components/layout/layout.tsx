import React from 'react';
import { Header, Footer } from '.'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
