import SvgIcon from '@mui/material/SvgIcon'
import { StyledRating } from '../../../styles/mui/StyledComponents'
import { ReactComponent as Diamond } from '../../../assets/diamond-icon.svg'


const Rating = ({rating}) => {
  return (
    <StyledRating
      readOnly
      max={4}
      name="rating"
      value={rating}
      defaultValue={4}
      icon={<SvgIcon fontSize='inherit'><Diamond /></SvgIcon>}
      emptyIcon={< SvgIcon fontSize='inherit'><Diamond /></SvgIcon>}
    />
  )
}

export default Rating