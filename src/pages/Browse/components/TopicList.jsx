import { useNavigate } from "react-router-dom"

const TopicList = (props) => {
  const navigate = useNavigate()
  return (
    <>
      TopicList
      {props.topics.map((topic) => (
        <button key={topic._id} onClick={() => navigate(`/topics/${topic._id}`)}>
          {topic.title}
        </button>
      ))}
    </>
  )
}

export default TopicList