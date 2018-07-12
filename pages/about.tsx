import React from 'react'
import { connect } from 'react-redux'

class AboutPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { userMessage } = this.props;
    return(
      <div>         
        {userMessage}
         About page
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userMessage: state.user.message,
})

export default connect(mapStateToProps)(AboutPage)