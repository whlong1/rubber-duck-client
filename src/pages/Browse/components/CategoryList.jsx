import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'

const CategoryList = (props) => {
  return (
    <>
      Categories:
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: 'flex', justifyContent: { md: 'space-evenly', xs: 'space-around' } }}
      >
      {props.categories.map((category, idx) => (
          <Card
            key={idx} 
            variant="contained"
            sx={{ height: { md: 250, xs: 150 }, width: { md: 200, xs: 100}, cursor: 'pointer' }}
            onClick={() => props.setSelected(category)}
          >
              {category}
          </Card>
      ))}
      </Stack>
    </>
  )
}

export default CategoryList