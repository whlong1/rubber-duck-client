import './UserCard.css'
import Box from '@mui/material/Box'
import PersonIcon from '@mui/icons-material/Person'

const profileIconStyle = {
  width: '36px',
  height: '36px',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgb(88, 88, 88)',
}

const UserCard = ({ author }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Box style={profileIconStyle}><PersonIcon style={{ opacity: .75 }} /></Box>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px' }}>
        <h5 className='author'>
          {author.name.toUpperCase()}
        </h5>
        <h5 className='occupation'>
          {author.occupation.toUpperCase()}
        </h5>
      </div>
    </div>
  )
}

export default UserCard