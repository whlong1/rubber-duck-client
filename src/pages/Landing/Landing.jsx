import './Landing.css'
import About from './components/About'
import Splash from './components/Splash'
import History from './components/History'

const Landing = () => {
  return (
    <div className='container'>
      <Splash />
      <About />
      <History />
    </div>
  )
}

export default Landing