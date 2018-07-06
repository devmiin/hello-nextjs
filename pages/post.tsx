import React from 'react';
import MovieService from '../services/movie-service';

interface IPostProps {
  post: any;
}

export default class extends React.Component<IPostProps, any> {
  static async getInitialProps({ query }) {
    const { id } = query;
    const res = await MovieService.GetShowById(id);
    const data = await res.data;
    return { post: data }
  }
  
  render() {
    const { post } = this.props;
    return (
      <div>
        <img src={post.image.medium} alt=""/>
        <h1>{ post.name }</h1>
        <p>{ post.summary }</p>
      </div>
    )
  }
}
