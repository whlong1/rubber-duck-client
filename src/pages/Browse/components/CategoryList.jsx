import Box from '@mui/material/Box'
import { StyledChip, StyledStack } from './mui/StyledComponents'

const CategoryList = ({ categories, setSelected }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
      <StyledStack 
        direction="row" 
        sx={{  flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}
      >
      {categories.map((category, idx) => (
          <StyledChip
            key={idx} 
            variant="contained"
            label={category.name}
            icon={category.icon}
            sx={{ backgroundColor: category.color, width: { lg: 150, md: 150, sm: 250, xs: 250 } }}
            onClick={() => setSelected(category)}
          />
      ))}
      </StyledStack>
    </Box>
  )
}

export default CategoryList