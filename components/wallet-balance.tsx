import { Typography, Button, Grid } from '@mui/material'

type Props = {
  balance: number
}

const WalletBalance = (props: Props) => (
  <Grid container justifyContent='space-between' sx={{ my: 2 }}>
    <Grid item xs='auto'>
      <Typography variant='body2'>Balance</Typography>
      <Typography variant='h5'>{props.balance.toLocaleString()}</Typography>
    </Grid>
    <Grid item xs='auto'>
      <Button variant='contained'>Wallet 1</Button>
    </Grid>
  </Grid>
)

export default WalletBalance
