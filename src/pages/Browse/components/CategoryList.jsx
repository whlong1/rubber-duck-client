import Box from '@mui/material/Box'
import { StyledChip, StyledStack } from './mui/StyledComponents'

const CategoryList = (props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
      <StyledStack 
        direction="row" 
        sx={{  flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}
      >
      {props.categories.map(({name, color, icon}, idx) => (
          <StyledChip
            key={idx} 
            variant="contained"
            label={name}
            icon={icon}
            sx={{ backgroundColor: color, width: { lg: 150, md: 150, sm: 250, xs: 250 } }}
            onClick={() => props.setSelected(name)}
          >
            {name}
          </StyledChip>
      ))}
      </StyledStack>
    </Box>
  )
}

export default CategoryList