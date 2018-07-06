import React from 'react';
import '../scss/_layout.scss';
import movieService from '../services/movie-service';
import Link from 'next/link';

interface IIndexProps {
  shows: any;
}

interface IIndexState {
  active: boolean;
}

export default class extends React.Component<IIndexProps, IIndexState> {
  static async getInitialProps() {
    const res = await movieService.GetShows();
    const dataProps = await res.data;
    return { shows: dataProps }
  }

  render() {
    const { shows } = this.props;
    return (
      <div>
        {
          shows.map(m => {
            return <Link href={`/post/${m.show.id}`} key={m.show.id}>
              <a><h1>{m.show.name}</h1></a>
            </Link>
          })
        }
      </div>
    )
  }
}
