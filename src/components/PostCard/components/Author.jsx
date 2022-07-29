import { AuthTypography } from '../../../styles/mui/StyledComponents'

const Author = ({ author }) => {
  return (
    <AuthTypography color="text.secondary" gutterBottom>
      {author?.name}
    </AuthTypography>
  )
}

export default Author