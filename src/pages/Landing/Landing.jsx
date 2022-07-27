import'./Landing.css'
// import logo from '../../assets/rubberDuckLogo.png'
import logo from '../../assets/logo-icon.svg'
import feynman from '../../assets/feynman.png'
import rectangle from '../../assets/yellowRectangle.png'

import Arrow from './Arrow'

const Landing = ({ user }) => {
  return (
    <div className='container'>
      <div className='splash-container'>
        <img src={logo} alt='logo' />
        <h1 className='logoTitle'>Rubber Duck</h1>
      </div>
      <Arrow/>

      {/* <div className={styles.logoH1}>
        <img src={rectangle} alt="rectangle" style={{ height: 30, width: 70 }} />
        <h1 className={styles.WTFduck}>What the $%!# is Rubber Duck? </h1>
        <div className={styles.flex}>
          <div className={styles.feynmanText}>
            <p>
              Rubber duck uses the Feynman Learning Technique for everyday learning tasks.<br />
              There are four key steps to the Feynman Technique:<br />
              Step 1 Choose a concept you want to learn about<br />
              Step 2 Explain it to a 12 year old<br />
              Step 3 Reflect, Refine, and Simplify<br />
              Step 4 Organize and Review<br />
            </p>
          </div>
          <div className={styles.whitespace}></div>
          <div className={styles.feynmanText}>
            <p>
              Richard Feynman was a Nobel prize-winning physicist. <br />His real superpower, however, was his ability to explain complicated subjects to others in simple terms. <br />He realized that jargon, vague words, and complexity reveal a lack of understanding.
            </p>
          </div>
        </div>
        <div className={styles.whitespace}></div>
      </div>



      <div className={styles.flex}>
        <img src={feynman} alt='feynman' style={{ width: 250, height: 250, borderRadius: 400 / 2, margin: 40 }} />
        <div className={styles.feynmanText}>
          <h1><img src={rectangle} alt="rectangle" style={{ height: 50, width: 20 }} />The Feynman Technique</h1>
          <p>The Feynman Learning Technique is a simple way of approaching anything new you want to learn. Why use it? Because learning doesn't happen from skimming through a book or remembering enough to pass a test. Information is learned when you can explain it and use it in a wide variety of situations. The Feynman Technique gets more mileage from the ideas you encounter instead of rendering anything new into isolated, useless factoids.</p>
        </div>
      </div>
      <div className={styles.whitespace}></div> */}
    </div>
  )
}

export default Landing
