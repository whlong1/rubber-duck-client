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
            The Feynman Learning Technique offers an effective method for understanding new concepts. It's rooted in the belief that true learning goes beyond just reading a book or passing an exam. Genuine understanding occurs when you can articulate and apply knowledge across diverse scenarios. The Feynman Technique ensures you extract maximum value from new ideas, preventing them from becoming isolated and irrelevant pieces of information.
            </p>
          </div>
        </>
      </div>
    </div>
  )
}

export default History