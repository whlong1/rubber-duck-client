import Divider from '@mui/material/Divider'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-header'>
        <div id='decorative-sq'></div>
        <h4>ABOUT US</h4>
        <h1>What the $%!# is Rubber Duck? </h1>
      </div>
      <div className='about-content'>
        <div className='about-textblock' id='column-one'>
          <h3>Why not some lorem ipsum?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut cursus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur et convallis metus. Cras felis nisi, scelerisque dapibus orci semper, interdum egestas risus. Etiam molestie nibh ut erat pellentesque, non malesuada lorem sagittis.
          </p>
        </div>
        <Divider style={{ background: 'black', width: '1px', opacity: '.25' }} />
        <div className='about-textblock' id='column-two'>
          <h3>Why not some lorem ipsum?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut cursus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur et convallis metus. Cras felis nisi, scelerisque dapibus orci semper, interdum egestas risus. Etiam molestie nibh ut erat pellentesque, non malesuada lorem sagittis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About