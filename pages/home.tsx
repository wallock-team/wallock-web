import { Button, Container, Grid, Typography } from '@mui/material'

import { NextPage } from 'next'
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'
import BotNav from '../components/bot-nav'
import TopCategoriesSpent from '../components/top-categories-spent'

const Home: NextPage = () => {
  return (
    <Container>
      <Grid container justifyContent='space-between' sx={{ my: 2 }}>
        <Grid item xs='auto'>
          <Typography variant='h5'>{(5000000).toLocaleString()}</Typography>
        </Grid>

        <Grid item xs='auto'>
          <Button variant='contained'>Wallet</Button>
        </Grid>
      </Grid>

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
          <TopCategoriesSpent transactions={fakeCategoriesReports} />
        </Grid>
      </Grid>

      <BotNav />
    </Container>
  )
}

export default Home

const fakeCategoriesReports = [
  {
    id: 1,
    isExpense: true,
    amount: 1_000_000,
    name: 'Category 1',
    percentage: 10,
  },
  {
    id: 2,
    isExpense: true,
    amount: 2_000_000,
    name: 'Category 2',
    percentage: 20,
  },
  {
    id: 3,
    isExpense: true,
    amount: 3_000_000,
    name: 'Category 3',
    percentage: 30,
  },
  {
    id: 4,
    isExpense: true,
    amount: 4_000_000,
    name: 'Category 4',
    percentage: 40,
  },
  {
    id: 5,
    isExpense: true,
    amount: 5_000_000,
    name: 'Category 5',
    percentage: 50,
  },
  {
    id: 6,
    isExpense: true,
    amount: 6_000_000,
    name: 'Category 6',
    percentage: 60,
  },
]
