const TopicList = (props) => {
  console.log(props.topics)
  return (
    <>
      TopicList
      {props.topics.map((topic)=> (
        <button key={topic._id}>{topic.title}</button>
      ))}
    </>
  )
}

export default TopicList