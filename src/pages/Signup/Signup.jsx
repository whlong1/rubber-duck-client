import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import logo from '../../assets/rubberDuckLogo.png'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const VerticalTypography = styled(Typography)(() => ({
  writingMode: 'vertical-lr',
  textOrientation: 'mixed',
  transform: 'rotate(-180deg)',
  fontSize: '150px',
  fontFamily: 'abril-display',
  marginLeft: '-20px',
  marginBottom: '0'
}))

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          width: {md: '50%', sm: '100%', xs: '100%'},
          height: '100%',
          backgroundColor:'#3c3c3c'
        }}>
        <VerticalTypography sx={{ fontSize: {lg: '150px', md: '100px', sm: '45px', xs: '0px'} }}>Signup</VerticalTypography>
        <p>{message}</p>
          <SignupForm {...props} updateMessage={updateMessage} />
        </Box>
        <Box sx={{ 
          display: {md: 'flex', sm: 'none', xs: 'none'}, 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: {md: '50%', sm: '0%', xs: '0%' }
        }}>
          <img src={logo} alt='logo' />
        </Box>
      </Box>
    </main>
  )
}

export default Signup
