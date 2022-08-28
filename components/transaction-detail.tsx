import { Typography, Grid, Avatar, Box } from '@mui/material'
import styles from '../styles/Transaction.module.css'
import { LunchDining, Payment, Subject, CalendarMonth } from '@mui/icons-material'
const TransactionDetail = () => (
    <Grid className={styles.body} container>
        <Grid className={styles.item} item xs={12}>
            <Grid item xs={1}>
                <LunchDining ></LunchDining>
            </Grid>
            <Grid item xs={11} >
                <Typography variant='h5'> FOOD </Typography>
            </Grid> 
        </Grid>
        <Grid className={styles.item} item xs={12}>
            <Grid item xs={1}>
                <Payment></Payment>
            </Grid>
            <Grid item xs={11} >
                <Typography variant='h5'> 100.000 đ </Typography>
            </Grid>
        </Grid >
        <Grid className={styles.item} item xs={12}>
            <Grid item xs={1}>
                <Subject></Subject>
            </Grid>
            <Grid item xs={11} >
                <Typography variant='h5'>  Bun Dau Mam Tom </Typography>
            </Grid>
        </Grid>
        <Grid className={styles.item} item xs={12}>
            <Grid item xs={1}>
                <CalendarMonth></CalendarMonth>
            </Grid>
            <Grid item xs={11} >
                <Typography variant='h5'> 27/08/2022 </Typography>
            </Grid>
        </Grid>
    </Grid>
)
export default TransactionDetail