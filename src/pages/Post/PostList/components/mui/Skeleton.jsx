import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'


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

export default skeleton