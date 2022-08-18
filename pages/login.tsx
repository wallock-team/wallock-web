import { ReactNode } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

import Logo from '../components/logo';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      baseUrl: process.env.BASE_URL,
      backendBaseUrl: process.env.BACKEND_URL,
    },
  };
};

const Login: NextPage = ({
  baseUrl,
  backendBaseUrl,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CenterPositioned>
        <Logo />
      </CenterPositioned>

      <Button
        fullWidth
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={redirectToGoogleLogin}
      >
        Log in with Google
      </Button>
    </>
  );

  function redirectToGoogleLogin() {
    window.location.href = `${backendBaseUrl}/auth/login/social-login/google?authorized_uri=${baseUrl}`;
  }
};

const CenterPositioned = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default Login;
