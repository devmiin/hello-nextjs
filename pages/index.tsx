import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'next/link';

import { updateUser } from '../store/user/user.action';
import { updateAbout } from '../store/about/about.action'

import MovieService from '../services/movie-service';
import { AppLayout } from '../components/layout';

interface IHomeProps {
  shows: any;
  updateUser: any;
}

class IndexPage extends React.Component<IHomeProps, any> {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  static async getInitialProps() {
    const res = await MovieService.getShows()
    const dataProps = await res.data
    return { shows: dataProps }
  }

  handleClick(e) {
    e.preventDefault()
    const { updateUser } = this.props
    updateUser('Update user...')
    console.log(this.props)
  }

  render() {
    // const { shows, userMessage } = this.props
    const { shows } = this.props

    return (
      <AppLayout>
        <div className="home-page">
          {
            shows ? shows.map(m => {
              return (
                <div
                  className="movies__item"
                  key={m.show.id}>
                  <Link
                    href={`/post/${m.show.id}`}>
                    <a className="movies__link">
                      <h4>{m.show.name}</h4>
                    </a>
                  </Link>
                </div>
              )
            })
              : ''
          }
        </div>
      </AppLayout>
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

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
