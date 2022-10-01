import {
  AppBar,
  Container,
  Typography,
  Button,
  Toolbar,
  IconButton,
} from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { Close } from '@mui/icons-material'
import withAuthPage from 'lib/auth/withAuthPage'
import Api from 'lib/api/api'
import { useRouter } from 'next/router'
import EditIcon from '@mui/icons-material/Edit'

export const getServerSideProps: GetServerSideProps = withAuthPage(
  async (context) => {
    const api = await Api.fromServer(context)

    const transaction = await api.transactions.getById(context.params?.id)
    console.log(transaction)

    return {
      props: {
        transaction,
      },
    }
  }
)
const TransactionDetail: NextPage = (props) => {
  const router = useRouter()
  return (
    <>
      <AppBar position='sticky' sx={{ px: 2 }}>
        <Toolbar>
          <IconButton onClick={() => router.push('/transactions')}>
            <Close />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>Transaction detail</Typography>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container></Container>
    </>
  )
}

export default TransactionDetail
