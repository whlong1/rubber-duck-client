const CategoryList = (props) => {
  return (
    <>
      Categories:
      {props.categories.map((category, idx) => (
        <button onClick={() => setSelected(category)}>{category}</button>
      ))}
    </>
  )
}

export default CategoryList