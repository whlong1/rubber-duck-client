import Lottie from "lottie-react"
import logo from '../../assets/logo-icon.svg'
import arrow from '../../assets/arrow-anim.json'


const Splash = () => {
  return (
    <div className='splash-container'>
      <div className='splash-content'>
        <img src={logo} alt='logo' />
        <h1 className='logoTitle'>Rubber Duck</h1>
      </div>
      <Lottie animationData={arrow} loop={true} style={{ height: 150 }} />
    </div>
  )
}

export default Splash