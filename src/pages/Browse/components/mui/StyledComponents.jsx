import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const CenteredBox = styled(Box)(() => ({
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  paddingBottom: '1rem', 
}))

const StyledCard = styled(Card)(() => ({
  width: 200, 
  height: 70, 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(18,18,18)',
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)' 
}))

const StyledChip = styled(Chip)(() => ({
  height: 34,
  "& .MuiChip-root": { position: 'relative' },
  "& .MuiChip-label": { fontWeight: 700, fontSize: 15 },
  "& .MuiChip-icon": { position: 'absolute', left: 2 }
}))

const StyledStack = styled(Stack)(() => ({
  display: 'flex',
  gap: '.5rem',
  margin: '1rem',
  justifyContent: 'space-evenly',
}))

export { StyledStack, StyledChip, StyledCard, CenteredBox }