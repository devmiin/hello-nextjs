import * as React from 'react';
import { Carousel } from 'antd';

import { AppLayout } from '../components/layout';

export default class extends React.Component {
  constructor(props) {
    super(props);    
    this.onToggle = this.onToggle.bind(this)
  }

  onToggle() {
    console.log('on toggle')
  }

  render() {    
    return(
      <AppLayout>
         <h1>About page</h1>
         <Toggle onToggle={this.onToggle}>           
           <Toggle.Button />
           <Toggle.On><p>The button is on</p></Toggle.On>
           <Toggle.Off><p>The button is off</p></Toggle.Off>
         </Toggle>
         <Carousel vertical autoplay dots>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </AppLayout>
    )
  }
}

interface IToggleProps {
  onToggle: Function;
}

interface IToggleState {
  on: boolean;
}

class Toggle extends React.Component<IToggleProps, IToggleState> {
  constructor(props) {
    super(props)
    this.state = { on: false }
    this.toggle = this.toggle.bind(this)
  }

  static On({on, children}) {
    return on? children: null
  }

  static Off({on, children}) {
    return on? null: children
  }

  static Button({toggle}) {
    return <button onClick={toggle}>Click!</button>
  }

  toggle() {
    this.setState(prevState => ({ on: !prevState.on }))
  }

  render() {
    return React.Children.map(this.props.children, (child: any) =>
        React.cloneElement(child, {
          on: this.state.on,
          toggle: this.toggle,
        }),
    )
  }
}
