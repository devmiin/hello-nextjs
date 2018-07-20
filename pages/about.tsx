import * as React from 'react'

import { AppLayout } from '../components/layout';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return(
      <AppLayout>
         <h1>About page</h1>
      </AppLayout>
    )
  }
}
