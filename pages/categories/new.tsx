import {
  AppBar,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import CategoryIcon from '@mui/icons-material/Category'
import TopicIcon from '@mui/icons-material/Topic'

const NewCategory = () => (
  <>
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton edge='start' color='inherit' sx={{ mr: 1 }}>
          <ClearIcon />
        </IconButton>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          New category
        </Typography>
        <Button variant='contained' sx={{ ml: 1 }}>
          Save
        </Button>
      </Toolbar>
    </AppBar>
    <Container sx={{ mt: 2 }}>
      <Stack spacing={2}>
        <TextField
          name='name'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <CategoryIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='income'
              control={<Radio />}
              label='Income'
            />
            <FormControlLabel
              value='expense'
              control={<Radio />}
              label='Expense'
            />
          </RadioGroup>
        </FormControl>
        <TextField
          name='group'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <TopicIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Container>
  </>
)

export default NewCategory
