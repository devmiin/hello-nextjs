import React from 'react';
import { Header, Footer } from '.'
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default (props) => (
  <div style={layoutStyle}>
    <Header />
      {props.children}
    <Footer />
  </div>
)
