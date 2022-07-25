import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const PostTopMenu = ({ postTitles }) => {
  return ( 
    <Box style={{ display: 'flex', justifyContent: 'space-between', marginBotton: '1rem', width: '100%' }}>
      <Box>
        <Stack>
          <Typography variant='h5'>
            Literature
          </Typography>
          <Typography variant='h2'>
            PostModernism
          </Typography>
        </Stack>
      </Box>
      <Box style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="contained" endIcon={<AddCircleOutlineIcon />}>New Post</Button>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Filter by:
            </InputLabel>
            <NativeSelect
              defaultValue={10}
              inputProps={{
                name: 'filterBy',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>New</option>
              <option value={20}>Popular</option>
              <option value={30}>Top</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Autocomplete
        id="post-search"
        freeSolo
        options={postTitles?.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Search input" />}
        disablePortal
        sx={{ width: 200 }}
      />
      </Box>
    </Box>
   );
}
 
export default PostTopMenu;