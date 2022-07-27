const SideNav = ({ setIndex, iterations }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {iterations.map((iteration, idx) =>
        <button onClick={() => setIndex(idx)} key={iteration._id}>{idx}</button>
      )}
    </div>
  )
}

export default SideNav