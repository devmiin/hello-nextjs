import * as React from 'react'

interface IState {
  on: boolean
  input: string
}

export default class extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: ''
    }
  }

  render() {
    const { on, input } = this.state
    return(
      <div>
         About page

         <button onClick={() => this.setState({ on: !on })}>
          {on? 'on': 'off'}
         </button>

          <h3>{input}</h3>
          <input 
            onChange={(e) => this.setState({input: e.target.value})} 
            type='text' 
          />
      </div>
    )
  }
}
