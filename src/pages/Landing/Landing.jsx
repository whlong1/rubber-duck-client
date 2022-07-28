import './Landing.css'
import logo from '../../assets/logo-icon.svg'
// import feynman from '../../assets/feynman.png'
import rectangle from '../../assets/yellowRectangle.png'

import Divider from '@mui/material/Divider'
import Splash from './Splash'


const Landing = ({ user }) => {
  return (
    <div className='container'>

      <Splash />



      <div className='about-container'>
        <div className='about-header'>
          <img src={rectangle} alt="rectangle" style={{ height: 50, width: 50 }} />
          <h4>ABOUT US</h4>
          <h1>What the $%!# is Rubber Duck? </h1>
        </div>
        <div className='about-content'>
          <div className='about-textblock' style={{ padding: '20px 20px 20px 80px' }}>
            <h3>Why not some lorem ipsum?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut cursus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur et convallis metus. Cras felis nisi, scelerisque dapibus orci semper, interdum egestas risus. Etiam molestie nibh ut erat pellentesque, non malesuada lorem sagittis.
            </p>
          </div>
          <Divider style={{ background: 'black', width: '1px', opacity: '.25' }} />
          <div className='about-textblock' style={{ padding: '20px 80px 20px 20px' }}>
            <h3>Why not some lorem ipsum?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut cursus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur et convallis metus. Cras felis nisi, scelerisque dapibus orci semper, interdum egestas risus. Etiam molestie nibh ut erat pellentesque, non malesuada lorem sagittis.
            </p>
          </div>
        </div>
      </div>




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
