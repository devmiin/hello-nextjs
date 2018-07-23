import React from 'react';

import MovieService from '../services/movie-service';
import { AppLayout } from '../components/layout';

interface IPostProps {
  post: any;
}

export default class extends React.Component<IPostProps, any> {
  static async getInitialProps({ query }) {
    const { id } = query;
    const res = await MovieService.getShowById(id);
    const data = await res.data;
    return { post: data }
  }
  
  render() {
    const { post } = this.props;
    return (
      <AppLayout>
        <img src={post.image.medium} alt=""/>
        <h1>{ post.name }</h1>
        <div dangerouslySetInnerHTML={{ __html: post.summary }}></div>
      </AppLayout>
    )
  }
}
