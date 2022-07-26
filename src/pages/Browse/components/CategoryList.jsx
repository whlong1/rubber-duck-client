import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'

const CategoryList = (props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
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
      {props.categories.map(({name, color, icon}, idx) => (
          <Chip
            key={idx} 
            variant="contained"
            label={name}
            icon={icon}
            sx={{ 
              height: 34,
              width: { lg: 150, md: 150, sm: 250, xs: 250 }, 
              backgroundColor: color,
              "& .MuiChip-root": { position: 'relative' },
              "& .MuiChip-label": { fontWeight: 700, fontSize: 15 },
              "& .MuiChip-icon": { position: 'absolute', left: 2 }
            }}
            onClick={() => props.setSelected(name)}
          >
              {name}
          </Chip>
      ))}
      </Stack>
    </Box>
  )
}

export default CategoryList