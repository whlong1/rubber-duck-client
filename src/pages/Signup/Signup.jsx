import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import logo from '../../assets/rubberDuckLogo.png'
import Box from '@mui/material/Box'



const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%', backgroundColor:'#3c3c3c' }}>
        <h1 className={styles.signup}>Signup</h1>
        <p>{message}</p>
          <SignupForm {...props} updateMessage={updateMessage} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
          <img src={logo} alt='logo' />
        </Box>
      </Box>
    </main>
  )
}

export default Signup
