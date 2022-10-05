import { AppBar, Button, Container, Grid, Tab, Tabs, Toolbar } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link';

import TransactionList from 'components/transaction/transaction-list'
import WalletBalance from 'components/wallet-balance'
import BotNav from 'components/bot-nav'
import withAuthPage from 'lib/auth/withAuthPage'
import Api from 'lib/api/api'


export const getServerSideProps: GetServerSideProps = withAuthPage(
  async (context) => {
    let apiServer = await Api.fromServer(context)
    let response = await apiServer.transactions.getCurrentMonth()
    return {
      props: {
        transactions: response.data,
      },
    }
  }
)

const Transactions: NextPage = (props: any) => {
  return (
    <div>
      <AppBar position='sticky' sx={{ px: 2 }}>
        <Toolbar>
          <WalletBalance balance={10000000} />
        </Toolbar>
        <Tabs variant='scrollable'>
          <Tab label='08.01 - 08.07' />
          <Tab label='08.08 - 08.14' />
          <Tab label='Last week' />
          <Tab label='This week' />
          <Tab label='Next week' />
        </Tabs>
      </AppBar>
      <Container>
        <TransactionList transactions={props.transactions} />
      </Container>
      <BotNav />

    </div>
  )
}

export default Transactions

function getRandomTimestampInCurrentMonth() {
  const today = new Date(Date.now())
  const firstDateOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  )
  const lastDateOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  )

  return new Date(
    firstDateOfCurrentMonth.getTime() +
    Math.random() *
    (lastDateOfCurrentMonth.getTime() - firstDateOfCurrentMonth.getTime())
  )
}
