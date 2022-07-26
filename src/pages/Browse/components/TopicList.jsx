import { Link } from "react-router-dom"

const TopicList = (props) => {
  return (
    <>
      TopicList 
      {props.topics.map((topic) => (
        <Link key={topic._id} to={`/topics/${topic._id}`}>
          {topic.title}
        </Link>
      ))}
    </>
  )
}

export default TopicList