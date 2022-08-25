import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Toolbar,
} from '@mui/material'
import { NextPage } from 'next'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Categories: NextPage = () => (
  <>
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton edge='start' color='inherit'>
          <ArrowBackIcon />
        </IconButton>
        <TextField
          placeholder='Find a category'
          variant='outlined'
          size='small'
          sx={{ m: 1, flexGrow: 1 }}
        />
      </Toolbar>
    </AppBar>
    <Container>
      <List>
        {Array.from(Array(20).keys()).map((_, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <ArrowBackIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={'Category ' + index} />
          </ListItem>
        ))}
      </List>
    </Container>
  </>
)

export default Categories
