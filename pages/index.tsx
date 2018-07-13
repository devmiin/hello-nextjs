import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../store/user/user.action';
import { updateAbout } from '../store/about/about.action'

import '../scss/_layout.scss';
import MovieService from '../services/movie-service';
import Link from 'next/link';

class IndexPage extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  static async getInitialProps() {
    const res = await MovieService.GetShows();
    const dataProps = await res.data;
    return { shows: dataProps }
  }

  handleClick() {
    const { updateUser } = this.props;
    updateUser('Update user...')
    console.log(this.props);
  }

  render() {
    const { shows, userMessage } = this.props;

    return (
      <div>
        {userMessage}
        <p>Hello world!</p>
        <button onClick={this.handleClick}>Click me!</button>

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

const mapStateToProps = (state) => ({
  userMessage: state.user.message, // this.props.userMessage
  aboutName: state.about.name, // this.props.aboutName
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: bindActionCreators(updateUser, dispatch), // this.props.updateUser
  updateAbout: bindActionCreators(updateAbout, dispatch) // this.props.updateAbout
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
