// THIS IS TEMPORARY
// In the future, the Logo component should be a image (preferably .svg) file.

import { NextComponentType } from 'next'
import {
  Box,
  Components,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid'
import CategoryIcon from '@mui/icons-material/Category'
import DescriptionIcon from '@mui/icons-material/Description'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers'
import { Component, Element } from 'react'

const NewTransactionForm: NextComponentType = (props) => {
  const { transaction, setTransaction } = props
  const handleDateChange = (newValue: any) => {
    setTransaction((prev) => ({ ...prev, date: newValue }))
  }

  const handleOnChange = (e: any) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'cateId')
      setTransaction((prev) => ({
        ...prev,
        categories: { ...prev.categories, id: value },
      }))
    else setTransaction((prev) => ({ ...prev, [name]: value }))
  }

  console.log(transaction)

  return transaction ? (
    <Container>
      <Stack spacing={1}>
        <Field
          icon={<PaidIcon />}
          field={
            <TextField
              name='amount'
              onChange={(e) => handleOnChange(e)}
              type='number'
              variant='outlined'
              fullWidth
              value={transaction.amount}
            />
          }
        />
        <Field
          icon={<CategoryIcon />}
          field={
            <Select
              value={transaction.categories ? transaction.categories.id : 1}
              name='cateId'
              onChange={(e) => handleOnChange(e)}
              fullWidth
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
            </Select>
          }
        />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs='auto'>
          <PaidIcon />
        </Grid>
        <Grid item xs>
          <TextField
            name='amount'
            onChange={(e) => handleOnChange(e)}
            type='number'
            variant='outlined'
            fullWidth
            value={transaction.amount}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs='auto'>
          <CategoryIcon />
        </Grid>
        <Grid item xs>
          <Select
            value={transaction.categories ? transaction.categories.id : 1}
            name='cateId'
            onChange={(e) => handleOnChange(e)}
            fullWidth
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <DescriptionIcon />
            <TextField
              name='note'
              onChange={(e) => handleOnChange(e)}
              variant='outlined'
              value={transaction.note}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <CalendarMonthIcon />
            <MobileDatePicker
              value={transaction.date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <></>
  )
}

type FieldProps = {
  icon: Element
  field: Element
}

const Field = (props: FieldProps) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs='auto'>
        {props.icon}
      </Grid>
      <Grid item xs>
        {props.field}
      </Grid>
    </Grid>
  )
}

export default NewTransactionForm
