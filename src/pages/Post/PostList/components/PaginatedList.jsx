import Button from '@mui/material/Button'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'


const PaginatedList = ({ loading, setLoading, seedPosts }) => {

  const skeleton = [...'placeholdr'].map((_, uuid) => (
    <Card 
      sx={{ maxWidth: 275, height: 325 }} 
      key={uuid} 
      style={{ padding: '1rem' }}
    >
      <CardContent style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0 16px 0'}}>
        <Skeleton animation="wave" height={30} width="60%" />
        <Skeleton animation="wave" height={30} width="30%" />
      </CardContent>
      <Skeleton variant="rectangular" animation="wave" width={245} height={180} />
      <Skeleton animation="wave" width={245} height={60} style={{ marginTop: '12px' }} />
    </Card>
  ))

  return ( 
    <>
        <Box style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          marginBottom: '1.5rem' 
        }}>
          { loading 
            ? skeleton
            : seedPosts
          }
        </Box>
        <Button onClick={() => setLoading(!loading)}> Toggle Loading </Button>
        <Pagination 
          count={5}
          color="primary"
        /> 
    </>
  );
}
 
export default PaginatedList;