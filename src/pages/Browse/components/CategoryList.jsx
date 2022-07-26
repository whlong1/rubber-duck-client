import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

const CategoryList = (props) => {
  return (
    <>
      Categories:
      <Stack
        direction="row"
        sx={{ 
          display: 'flex',
          gap: '.5rem',
          margin: '1rem',
          justifyContent: 'space-evenly',
          flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' }
        }}
      >
      {props.categories.map((category, idx) => (
          <Chip
            key={idx} 
            variant="contained"
            label={category}
            sx={{ 
              height: { lg: 85 },
              width: { lg: 250, md: 150 }, 
              backgroundColor: categoryColors[idx],
              "& .MuiChip-label": { fontFamily: 'abril-display', fontSize: 14 }
            }}
            onClick={() => props.setSelected(category)}
          >
              {category}
          </Chip>
      ))}
      </Stack>
    </>
  )
}

export default CategoryList