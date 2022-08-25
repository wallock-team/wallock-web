import {
  AppBar,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

const NewCategory = () => (
  <>
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton edge='start' color='inherit' sx={{ mr: 1 }}>
          <ClearIcon />
        </IconButton>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Create new category
        </Typography>
        <Button variant='contained' sx={{ ml: 1 }}>
          Save
        </Button>
      </Toolbar>
    </AppBar>
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label='Category name' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel>Type</FormLabel>
            <RadioGroup row>
              <FormControlLabel label='Income' control={<Radio />} />
              <FormControlLabel label='Expense' control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Group' fullWidth />
        </Grid>
      </Grid>
    </Container>
  </>
)

export default NewCategory
