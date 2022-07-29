import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const StyledRating = styled(Rating)(() => ({
  '& .MuiRating-iconFilled': {
    color: '#82bf88',
    marginRight: '-10px',
  },
  '& .MuiRating-iconEmpty': {
    color: '#5d5d5d',
    marginRight: '-10px',
  },
  display: 'flex',
  alignItems: 'center'
}))

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  marginBottom: '1.5rem'
}))

export const Post = styled(Card)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  backgroundColor: 'rgb(18,18,18)',
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))'
}))

export const AuthTypography = styled(Typography)(() => ({
  fontSize: '14',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  overflow: 'hidden',
  display: '-webkit-box'
}))

export const BodyTypography = styled(Typography)(() => ({
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 6,
  overflow: 'hidden',
  display: '-webkit-box',
}))

export const DateTypography = styled(Typography)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '75px',
  opacity: '.5'
}))

export const StyledBoxSpaceBetween = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem'
}))

export const StyledBoxColCenter = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '3rem'
}))

export const StyledBoxFlexStart = styled(Box)(() => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '100%'
}))

export const StyledPostFormContainer = styled(Box)(() => ({
  padding: '1rem 2rem 2rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}))

export const StyledAnalysisContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '1rem',
  height: '490px',
  maxWidth: '100%',
}))

export const StyledPaper = styled(Paper)(() => ({
  marginTop: '1rem',
  height: '100%',
  width: '100%',
  maxHeight: '490px'
}))

export const StyledMessageBox = styled(Box)(() => ({
  position: 'relative',
  background: '#f2f2f2',
  borderRadius: '.4em',
  right: 20,
  "&::after": {
    content: '""',
    position: 'absolute',
    right: 20,
    top: '100%',
    width: 0,
    height: 0,
    border: '10px solid transparent',
    borderLeftColor: '#f2f2f2',
    borderRight: 0,
    marginTop: '-30px',
    marginRight: '-30px',
  }
}))

export const StyledFeedbackBox = styled(Box)(() => ({
  minHeight: '160px',
  maxHeight: '160px',
  width: '100%',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  '&::after': {
    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255, 0),rgba(255,255,255, 1) 90%)'
  }
}))