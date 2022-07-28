import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

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

export const PostCard = styled(Card)(() => ({
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
  alignItems:'flex-start', 
  height: '100%'
}))