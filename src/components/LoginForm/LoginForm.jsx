import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import EmailIcon from '@mui/icons-material/Email'
import KeyIcon from '@mui/icons-material/Key';

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <Box className={styles.inputContainer}>
        <TextField
          type="text"
          lalbel="Email"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
          }}
        />
      </Box>
      <Box className={styles.inputContainer}>
        <TextField
          type="password"
          label="Password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"><KeyIcon /></InputAdornment>,
          }}
        />
      </Box>
      <Box>
        <Button className={styles.button}>Log In</Button>
        <Link to="/">
          <Button color="warning">Cancel</Button>
        </Link>
      </Box>
    </form>
  )
}

export default LoginForm
