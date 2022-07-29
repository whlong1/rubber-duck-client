import Skeleton from './mui/Skeleton'
import { StyledBox } from './mui/StyledBox'
import Pagination from '@mui/material/Pagination'

const PaginatedList = ({ loading, postList, page, setPage }) => {
  return (
    <>
      <StyledBox>
        {loading ? Skeleton : postList}
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