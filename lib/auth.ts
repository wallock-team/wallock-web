import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import { jwtVerify, importJWK } from 'jose'
import googleOidcInfomation from './google-oidc-information'

type User = {
  iss: string
  sub: string
  [key: string]: any
}

const withAuthenticatedUser = async <
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
>(
  context: GetServerSidePropsContext<Q, D>,
  getServerSidePropsFunction?: GetServerSideProps<P & { user: User }, Q, D>
): Promise<GetServerSidePropsResult<{ user: User }>> => {
  const idToken = context.req.cookies.id_token
  const user = await verify(idToken)

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  } else {
    return {
      props: {
        user,
      },
    }
  }
}

const verify = async (idToken?: string): Promise<User | false> => {
  if (!idToken) {
    return false
  }

  const decodedIdToken = decodeIdToken(idToken)

  const key = googleOidcInfomation.jwks.keys.find(
    (key) => key.kid === decodedIdToken.header.kid
  )

  if (!key) {
    return false
  }

  await jwtVerify(idToken, await importJWK(key, 'RS256'))

  return decodedIdToken.payload as User
}

const decodeIdToken = (idToken: string) => {
  const [header, payload, signature] = idToken.split('.')

  return {
    header: JSON.parse(Buffer.from(header, 'base64').toString('utf-8')),
    payload: JSON.parse(Buffer.from(payload, 'base64').toString('utf-8')),
    signature,
  }
}

export default withAuthenticatedUser
