import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

const NewPostForm = ({ topicForm, submitTopic, setTopicForm, categories, setDropdown, selected }) => {
  return ( 
    <form onSubmit={submitTopic}>
      <h3>Enter your new topic</h3>
      <TextField 
        placeholder='Title' 
        name="title"
        value={topicForm.title} 
        onChange={(e) => setTopicForm({ ...topicForm, title: e.target.value })} 
      />
      <Select
        name="category"
        defaultValue={selected?.name || ''}
        sx={{ width: 120 }}
        onChange={(e) => setTopicForm({ ...topicForm, category: e.target.value })}>
        {categories.map((category, idx) => (
          <MenuItem key={idx} value={category.name}>{category.name}</MenuItem>
        ))}
      </Select>
      <Button 
        disabled={!topicForm.title} 
        type='submit' 
        onClick={submitTopic}
      >
        Submit
      </Button>
      <Button type='button' onClick={() => setDropdown(false)}>Cancel</Button>
    </form>
   );
}
 
export default NewPostForm;