import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function AutoComplete({ posts, setSearch }) {
  return (
    <Autocomplete
      disablePortal
      freeSolo
      disableClearable
      id="combo-box-demo"
      options={ posts.map((post) => post.text) }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Posts" />}
    />
  );
}