const SideNav = ({ index, setIndex, iterations }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '230px', paddingRight: '50px' }}>
      {iterations.map((iteration, idx) =>
        <button key={iteration._id} onClick={() => setIndex(idx)} className='det-btn' id={index === idx ? 'select-idx' : ''}>
          {idx + 1}
        </button>
      )}
    </div>
  )
}

export default SideNav