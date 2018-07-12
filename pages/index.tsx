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

  // ถ้าทำการคลิ๊กเราจะทำการอัพเดท user store 
  handleClick() {
    const { dispatchUser } = this.props;
    dispatchUser('Update user...')
    console.log(this.props);
  }

  render() {
    const { shows, userMessage } = this.props;

    return (
      <div>
        {userMessage}
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

// คือการ map state (in file store.tsx) ไปยัง props
const mapStateToProps = (state) => ({
  // state.user มาจากไพล์ store.tsx // .message มาจาก interface IUser 
  userMessage: state.user.message, // this.props.userMessage
  aboutName: state.about.name, // this.props.aboutName
})

// คือการ map dispatch ไปยัง props
const mapDispatchToProps = (dispatch) => ({
  dispatchUser: bindActionCreators(updateUser, dispatch), // this.props.dispactchUser
  dispatchAbout: bindActionCreators(updateAbout, dispatch) // this.props.dispatchAbout
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
