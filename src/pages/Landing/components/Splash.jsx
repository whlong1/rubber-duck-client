import Lottie from "lottie-react"
import logo from '../../../assets/logo-icon.svg'
import arrow from '../../../assets/arrow-anim.json'

const Splash = () => {
  return (
    <div className='splash-container'>
      <div className='splash-content'>
        <img src={logo} alt='duck logo' />
        <h1>Rubber Duck</h1>
      </div>
      <Lottie animationData={arrow} loop={true} style={{ height: 110 }} />
    </div>
  )
}

export default Splash