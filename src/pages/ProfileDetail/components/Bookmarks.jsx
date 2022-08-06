import PostCard from '../../../components/PostCard/PostCard'

const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      {bookmarks.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  )
}

export default Bookmarks