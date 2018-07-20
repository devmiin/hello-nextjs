import * as React from 'react'

interface IAboutState {
  on: boolean
  input: string
}

export default class extends React.Component<any, IAboutState> {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    // e.preventDefault()
    this.setState({input: e.target.value})
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
            onChange={this.handleClick} 
            type='text' 
          />
      </div>
    )
  }
}
