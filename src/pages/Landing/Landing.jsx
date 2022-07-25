import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <> 
      <div className={styles.bodyContainer}>
        <img src={require('../../assets/rubberDuckLogo.png')} />
        <h1 className={styles.logoH1}>Rubber Duck</h1>
      </div>
      <div className={styles.feynmanText}>
        <img src={require('../../assets/feynman.png')} style={{width: 250, height: 250, borderRadius: 400/2}} />
          <div>
            <h1>The Feynman Technique</h1>
            <p>The Feynman Learning Technique is a simple way of approaching anything new you want to learn.   Why use it? Because learning doesn't happen from skimming through a book or remembering enough to pass a test. Information is learned when you can explain it and use it in a wide variety of situations. The Feynman Technique gets more mileage from the ideas you encounter instead of rendering anything new into isolated, useless factoids.</p>
          </div>
      </div>
      
    </>
  )
}

export default Landing
