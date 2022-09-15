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
import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BotNav from '../components/bot-nav'
import withAuthenticatedUser from '../lib/auth'
import axios from 'axios'
import withAuthPage from '../lib/auth/withAuthPage'

export const getServerSideProps: GetServerSideProps = withAuthPage(
  async (context) => {
    const res = await axios('http://localhost:3000/categories', {
      headers: {
        cookie: String(context.req.headers.cookie),
      },
    })

    return {
      props: {
        categories: res.data,
      },
    }
  }
)

const Categories: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => (
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
        {props.categories.map((category) => (
          <ListItem key={category.id}>
            <ListItemAvatar>
              <Avatar>
                <ArrowBackIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Container>
    <BotNav />
  </>
)

export default Categories
