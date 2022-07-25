import styles from './Landing.module.css'
import logo from '../../assets/rubberDuckLogo.png'
import feynman from '../../assets/feynman.png'
import rectangle from '../../assets/yellowRectangle.png'

const Landing = ({ user }) => {
  return (
    <> 
      <div className={styles.bodyContainer}>
        <img src={logo} alt='logo' />
        <h1 className={styles.logoH1}>Rubber Duck</h1>
      </div>

      <div className={styles.logoH1}>
        <img src={rectangle} alt="rectangle" style={{height: 30, width: 70}} />
        <h1 className={styles.logoH1}>What the FUCK is Rubber Duck? </h1>
        <div className={styles.flex}>
          <div>
            <p>
              Rubber duck is a way to to use the Feynman Learning Technique for everyday learning tasks. 
              There are four key steps to the Feynman Technique:<br/>
              Step 1 Choose a concept you want to learn about<br/>
              Step 2 Explain it to a 12 year old<br/>
              Step 3 Reflect, Refine, and Simplify<br/>
              Step 4 Organize and Review<br/>
            </p>
          </div>
          <div className={styles.feynmanText}>
            <p>
              Richard Feynman was a Nobel prize-winning physicist. <br/>His real superpower, however, was his ability to explain complicated subjects to others in simple terms. <br/>He realized that jargon, vague words, and complexity reveal a lack of understanding.
           
            </p>
          </div>
        </div>
      </div>



      <div className={styles.flex}>
        <img src={feynman}  alt='feynman' style={{width: 250, height: 250, borderRadius: 400/2}} />
          <div className={styles.feynmanText}>
            
            <h1>
            <img src={rectangle} alt="rectangle" style={{height: 50, width: 20}} />  The Feynman Technique</h1>
            <p>The Feynman Learning Technique is a simple way of approaching anything new you want to learn.   Why use it? Because learning doesn't happen from skimming through a book or remembering enough to pass a test. Information is learned when you can explain it and use it in a wide variety of situations. The Feynman Technique gets more mileage from the ideas you encounter instead of rendering anything new into isolated, useless factoids.</p>
          </div>
      </div>
      
    </>
  )
}

export default Landing
