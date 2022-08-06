import PostCard from '../../../components/PostCard/PostCard'

import * as postService from '../../../services/postService'

const Bookmarks = ({ bookmarks, setBookmarks }) => {

  const removeBookmark = async (id) => {
    const res = await postService.removeBookmark(id)
    if (res.msg === 'Success') {
      setBookmarks(bookmarks.filter((b) => b._id !== id))
    }
  }

  return (
    <>
      {bookmarks.map((post) => (
        <div key={post._id}>
          <button onClick={() => removeBookmark(post._id)}>Remove</button>
          <PostCard
            post={{
              ...post,
              text: post.iterations[0].text,
              rating: post.iterations[0].rating,
              createdAt: post.iterations[0].createdAt
            }}
          />
        </div>
      ))}
    </>
  )
}

export default Bookmarks