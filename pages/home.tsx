import {
  Avatar,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import WorkIcon from '@mui/icons-material/Work'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'

import { NextPage } from 'next'
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'
import BotNav from '../components/bot-nav'

const Home: NextPage = () => {
  return (
    <Container>
      <Grid container justifyContent='space-between' sx={{ my: 2 }}>
        <Grid item xs='auto'>
          <Typography variant='h5'>5.000.000</Typography>
        </Grid>

        <Grid item xs='auto'>
          <Button variant='contained'>Wallet</Button>
        </Grid>
      </Grid>

      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='body1'>Total spent this month</Typography>
            <VictoryChart domainPadding={{ x: 100 }}>
              <VictoryBar
                cornerRadius={8}
                categories={{ x: ['Last month', 'This month'] }}
                data={[
                  { label: 'This month', spending: 1_000_000 },
                  { label: 'Last month', spending: 900_000 },
                ]}
                x='label'
                y='spending'
              />
              <VictoryAxis />
            </VictoryChart>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>Top spending</Typography>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Photos' secondary='Jan 9, 2014' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Work' secondary='Jan 7, 2014' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Vacation' secondary='July 20, 2014' />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>

      <BotNav />
    </Container>
  )
}

export default Home
