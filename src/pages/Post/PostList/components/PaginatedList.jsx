import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import Skeleton from './mui/Skeleton'


const PaginatedList = ({ loading, postList, page, setPage }) => {
  

  return ( 
    <>
        <Box style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          marginBottom: '1.5rem' 
        }}>
          { loading 
            ? Skeleton
            : postList
          }
        </Box>
        <Pagination 
          count={page + 1}
          onChange={(e) => setPage(e.target.value)}
          color="primary"
        /> 
    </>
  );
}
 
export default PaginatedList;