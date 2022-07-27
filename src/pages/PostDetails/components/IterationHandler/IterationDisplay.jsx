import { ReactComponent as Diamond } from '../../../../assets/diamond-icon.svg'

import Rating from '@mui/material/Rating'
import SvgIcon from '@mui/material/SvgIcon'

import { styled } from '@mui/material/styles'
import { ratingOptions } from '../../../../styles/theme'

const StyledRating = styled(Rating)(ratingOptions)

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
        style={{ display: 'flex', alignItems: 'center' }}
        icon={<SvgIcon fontSize='inherit'><Diamond /></SvgIcon>}
        emptyIcon={< SvgIcon fontSize='inherit'> <Diamond /> </SvgIcon>}
      />
      <p className='iteration-text'>{iteration.text}</p>
      <p className='iteration-date'>{iteration.createdAt?.slice(0, 10)}</p>
    </div>
  )
}

export default IterationDisplay