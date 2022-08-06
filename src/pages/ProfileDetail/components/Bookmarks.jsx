import PostCard from '../../../components/PostCard/PostCard'

const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      {bookmarks.map((post) => (
        <PostCard
          key={post._id}
          post={{
            ...post,
            text: post.iterations[0].text,
            rating: post.iterations[0].rating,
            createdAt: post.iterations[0].createdAt
          }}
        />
      ))}
    </>
  )
}

export default Bookmarks