const CategoryList = (props) => {
  return (
    <>
      Categories:
      {props.categories.map((category, idx) => (
        <button key={idx} onClick={() => props.setSelected(category)}>{category}</button>
      ))}
    </>
  )
}

export default CategoryList