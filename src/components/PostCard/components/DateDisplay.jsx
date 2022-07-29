import { DateTypography } from '../../../styles/mui/StyledComponents'

const DateDisplay = ({ createdAt }) => {
  return <DateTypography>{createdAt.slice(0, 10)}</DateTypography>
}

export default DateDisplay