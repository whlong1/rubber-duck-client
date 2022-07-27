import './Landing.css'
import logo from '../../assets/logo-icon.svg'
import feynman from '../../assets/feynman.png'
import rectangle from '../../assets/yellowRectangle.png'


import Lottie from "lottie-react"
import arrow from '../../assets/arrow-anim.json'


const style = {
  height: 150,
}

const Landing = ({ user }) => {
  return (
    <div className='container'>

      <div className='splash-container'>
        <div className='splash-content'>
          <img src={logo} alt='logo' />
          <h1 className='logoTitle'>Rubber Duck</h1>
        </div>
        <Lottie animationData={arrow} loop={true} style={style} />
      </div>



      <div className='section-two'>
        <div className='about-header'>
          <img src={rectangle} alt="rectangle" style={{ height: 50, width: 50 }} />
          <h4>ABOUT US</h4>
          <h1>What the $%!# is Rubber Duck? </h1>
        </div>
        <div className='flex'>
          <div className='feynmanText' id="left-side">
            <p>
              Rubber duck uses the Feynman Learning Technique for everyday learning tasks.
              There are four key steps to the Feynman Technique:
              Step 1 Choose a concept you want to learn about
              Step 2 Explain it to a 12 year old
              Step 3 Reflect, Refine, and Simplify
              Step 4 Organize and Review
            </p>
          </div>
          <div className='whitespace'></div>
          <div className='feynmanText' id="right-side">
            <p>
              Richard Feynman was a Nobel prize-winning physicist. <br />His real superpower, however, was his ability to explain complicated subjects to others in simple terms. <br />He realized that jargon, vague words, and complexity reveal a lack of understanding.
            </p>
          </div>
        </div>
        <div className='whitespace'></div>
      </div>
      <div className='flex'>
        <img src={feynman} alt='feynman' style={{ width: 250, height: 250, borderRadius: 400 / 2, margin: 40 }} />
        <div className='feynmanText'>
          <h1><img src={rectangle} alt="rectangle" style={{ height: 50, width: 20 }} />The Feynman Technique</h1>
          <p>The Feynman Learning Technique is a simple way of approaching anything new you want to learn. Why use it? Because learning doesn't happen from skimming through a book or remembering enough to pass a test. Information is learned when you can explain it and use it in a wide variety of situations. The Feynman Technique gets more mileage from the ideas you encounter instead of rendering anything new into isolated, useless factoids.</p>
        </div>
      </div>
      <div className='whitespace'></div>
    </div>
  )
}

export default Landing
