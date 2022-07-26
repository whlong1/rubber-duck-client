export const themeOptions = {
  palette: {
    type: 'dark',
    mode: 'dark',
    primary: {
      main: '#ffc82f',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#232327',
      paper: 'rgb(66,66,66)',
    },
    success: {
      main: '#4caf50',
    }
  },
  typography: {
    fontFamily: 'realistnarrow, san-serif'
  }
}

export const ratingOptions = {
  '& .MuiRating-iconFilled': {
    color: '#4caf50',
    marginRight: '-5px',
  },
  '& .MuiRating-iconEmpty': {
    color: '#5d5d5d',
    marginRight: '-5px',
  },
  '& .MuiRating-iconHover': {
    color: '#307a49'
  },
}