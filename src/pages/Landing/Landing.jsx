import './Landing.css'
// import feynman from '../../assets/feynman.png'

import About from './About'
import Splash from './Splash'



const Landing = ({ user }) => {
  return (
    <div className='container'>
      <Splash />
      <About />






      {/* <div className='flex'>
        <img src={feynman} alt='feynman' style={{ width: 250, height: 250, borderRadius: 400 / 2, margin: 40 }} />
        <div className='feynmanText'>
          <h1><img src={rectangle} alt="rectangle" style={{ height: 50, width: 20 }} />The Feynman Technique</h1>
          <p>The Feynman Learning Technique is a simple way of approaching anything new you want to learn. Why use it? Because learning doesn't happen from skimming through a book or remembering enough to pass a test. Information is learned when you can explain it and use it in a wide variety of situations. The Feynman Technique gets more mileage from the ideas you encounter instead of rendering anything new into isolated, useless factoids.</p>
        </div>
      </div>
      <div className='whitespace'></div> */}
    </div>
  )
}

export default Landing
