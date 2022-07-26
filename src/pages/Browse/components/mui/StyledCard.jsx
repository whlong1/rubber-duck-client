import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'

export const StyledCard = styled(Card)(() => ({
  width: 200, 
  height: 70, 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(18,18,18)',
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)' 
}))