import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const CategoryList = (props) => {
  const categoryColors = ['#F75847', '#00B1C6', '#7E7568', '#0CBA6E', '#FFB201']
  return (
    <>
      Categories:
      <Stack
        direction="row"
        spacing={1}
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-evenly',
          flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' }
        }}
      >
      {props.categories.map((category, idx) => (
          <Card
            key={idx} 
            variant="contained"
            sx={{ height: { lg: 250, md: 150 }, width: { lg: 350, md: 200 }, cursor: 'pointer' }}
            onClick={() => props.setSelected(category)}
          >
            <Paper elevation={5} style={{ height: '100%', padding: '.5rem', marginLeft: '0' }} sx={{ backgroundColor: categoryColors[idx] }}>
              <Typography variant='h3' style={{ fontFamily: 'abril-display', textShadow: '0px 1px 0px rgba(0,0,0,.2)' }}>
                {category}
              </Typography>
            </Paper>
          </Card>
      ))}
      </Stack>
    </>
  )
}

export default CategoryList