import { ReactComponent as Diamond } from '../../../../assets/diamond-icon.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { StyledRating } from '../../../../styles/mui/StyledComponents'

const IterationDisplay = ({ iteration }) => {
  const { rating } = iteration
  return (
    <div className='iteration-display'>
      <StyledRating
        readOnly
        max={4}
        name="rating"
        value={rating}
        defaultValue={4}
        icon={<SvgIcon fontSize='inherit'><Diamond /></SvgIcon>}
        emptyIcon={< SvgIcon fontSize='inherit'> <Diamond /> </SvgIcon>}
      />
      <p className='iteration-text'>{iteration.text}</p>
      <p className='iteration-date'>{iteration.createdAt?.slice(0, 10)}</p>
    </div>
  )
}

export default IterationDisplay