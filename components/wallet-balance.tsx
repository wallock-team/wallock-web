import { Typography, Button, Grid } from '@mui/material'
import { Wallet, Menu, ArrowDropDown, Search, Today, Visibility } from '@mui/icons-material';
type Props = {
  balance: number
}

const WalletBalance = (props: Props) => (
  <Grid container justifyContent='space-between' sx={{ my: 2, pd: 0, mg: 0 }}>
    <Grid container justifyContent='flex-start' align-items='center' item xs='auto'>
      <Wallet sx={{ fontSize: 50, marginLeft: 2 }} ></Wallet>
      <Grid sx={{ margin: 'auto', marginLeft: 1 }} item xs='auto' >
        <Typography variant='h6'>{props.balance}</Typography>
      </Grid>
    </Grid>
  </Grid>
)

export default WalletBalance
