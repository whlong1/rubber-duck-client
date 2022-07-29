import Feynman from '../../../assets/feynman-crop.png'

const History = () => {
  return (
    <div className='history-container'>
      <div className='left' >
        <img src={Feynman} alt='Richard Feynman' />
      </div>
      <div className='right'>
        <>
          <div className='history-header'>
            <div id='decorative-rec'></div>
            <div className='header-content'>
              <h4 id="method">A METHOD OF LEARNING</h4>
              <h1 id="feynman-technique">The Feynman Technique</h1>
            </div>
          </div>
          <div className='history-textblock'>
            <p>
              The Feynman Learning Technique is a simple way of approaching anything new you want to learn. Why use it? Because learning doesn't happen from skimming through a book or remembering enough to pass a test. Information is learned when you can explain it and use it in a wide variety of situations. The Feynman Technique gets more mileage from the ideas you encounter instead of rendering anything new into isolated, useless factoids.
            </p>
          </div>
        </>
      </div>
    </div>
  )
}

export default History