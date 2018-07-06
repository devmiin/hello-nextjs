import React from 'react';
import '../scss/_layout.scss';

interface IIndexProps {
  name: string;
}

export default class extends React.Component<IIndexProps, any> {
  render() {
    const { name } = this.props;
    return (
      <h1 className="title">Hello Next.js {name}</h1>
    )
  }
}


