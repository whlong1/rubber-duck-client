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
      {props.categories.map(({name, color, icon}, idx) => (
          <Chip
            key={idx} 
            variant="contained"
            label={name}
            icon={icon}
            sx={{ 
              height: { lg: 85 },
              width: { lg: 250, md: 150 }, 
              backgroundColor: color,
              "& .MuiChip-label": { fontFamily: 'abril-display', fontSize: 14 }
            }}
            onClick={() => props.setSelected(name)}
          >
              {name}
          </Chip>
      ))}
      </Stack>
    </>
  )
}

export default CategoryList