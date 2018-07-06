import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';
import Markdown from 'react-markdown'

const Content = withRouter(({ name, summary }) => (
  <div>
    <h1>{name}</h1>
    <div className="markdown">
      <Markdown source={`
        This is our blog post.
        Yes. We can have a [link](/link).
        And we can have a title as well.

        ### This is a title

        And here's the content.
     `} />
    </div>    
  </div>
))

const Post = (props) => (
  <Layout>
    {/* <Content
      name={props.show.name}
      summary={props.show.summary.replace(/<[/]?p>/g, '')}
    />
    <img src={props.show.image.medium} /> */}
  </Layout>
)

// Post.getInitialProps = async function (context) {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()

//   console.log(`Fetched show ${show.name}`)

//   return { show };
// }

export default Post