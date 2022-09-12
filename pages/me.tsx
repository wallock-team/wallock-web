import { Container, Typography } from '@mui/material'
import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import withAuthenticatedUser from '../lib/auth'
import BotNav from './../components/bot-nav'

export const getServerSideProps: GetServerSideProps = async (context) =>
  withAuthenticatedUser(context)

const Me: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <>
      <Container>
        <Typography variant='h5'>Hello {props.user.name}!</Typography>
      </Container>
      <BotNav />
    </>
  )
}

export default Me
