import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../../services/authService'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FilledInput from '@mui/material/FilledInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const SignupForm = props => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfPassword, setShowConfPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob:'',
    occupation:'',
    zip:'',
    education:'',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { name, email, password, passwordConf, zip, occupation, education, dob } = formData

  const isFormInvalid = () => {
    return !(name && email && password && zip && occupation && education && dob && password === passwordConf)
  }

  return (
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <Box className={styles.inputContainer}>
          <TextField
            variant="filled"
            fullWidth
            required
            type="text"
            label='Name'
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            variant="filled"
            fullWidth
            required
            type="text"
            label="Email"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </Box>
        <Box className={styles.inputContainer}>
        <FormControl sx={{ width: '400px'}} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              name='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              required
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Box className={styles.inputContainer}>
        <FormControl sx={{ width: '400px'}} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-conf-password"
              name='passwordConf'
              type={showConfPassword ? 'text' : 'password'}
              value={passwordConf}
              required
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfPassword(!showConfPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            fullWidth
            required
            variant="filled"
            label="Occupation"
            type="text"
            id="occupation"
            name="occupation"
            onChange={handleChange}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            fullWidth
            required
            variant="filled"
            helperText="Date of Birth (MM/DD/YY)"
            type="date"
            id="dob"
            name="dob"
            onChange={handleChange}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            fullWidth
            required
            variant="filled"
            label="Postal Zip Code"
            type="number"
            id="zip"
            name="zip"
            onChange={handleChange}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            fullWidth
            variant="filled"
            label="Education"
            type="text"
            id="education"
            name="education"
            onChange={handleChange}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <Button type='submit' disabled={isFormInvalid()} className={styles.button} fullWidth variant='contained'>
            Sign Up
          </Button>
          <Link to="/">
            <Button color="warning">Cancel</Button>
          </Link>
        </Box>
      </form>
  )
}

export default SignupForm