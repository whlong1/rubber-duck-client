import Pagination from '@mui/material/Pagination'
import { StyledBox } from './mui/StyledBox'
import Skeleton from './mui/Skeleton'

const PaginatedList = ({ loading, postList, page, setPage }) => {
  return ( 
    <>
        <StyledBox>
          { loading ? Skeleton : postList }
        </StyledBox>
        <Pagination 
          count={page + 1}
          onChange={(e) => setPage(e.target.value)}
          color="primary"
        /> 
    </>
  );
}
 
export default PaginatedList