const SideNav = ({ index, setIndex, iterations }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {iterations.map((iteration, idx) =>
        <button key={iteration._id} onClick={() => setIndex(idx)} className='idx-btns' id={index === idx ? 'select-idx' : ''}>
          {idx + 1}
        </button>
      )}
    </div>
  )
}

export default SideNav