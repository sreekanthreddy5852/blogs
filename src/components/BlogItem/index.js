import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="container">
        <img className="image" src={imageUrl} alt={`item${id}`} />
        <div className="info-container">
          <p className="item-topic">{topic}</p>
          <p className="item-title">{title}</p>
          <div className="author-container">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
