import PageLayout from '../components/PageLayout.js'
import Link from 'next/link'

function getPosts () {
  return [
    { id: 'A', title: 'Aries A'},
    { id: 'B', title: 'Aries B'},
    { id: 'C', title: 'Aries C'}
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

export default () => (
  <PageLayout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Open Sans";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </PageLayout>
)
