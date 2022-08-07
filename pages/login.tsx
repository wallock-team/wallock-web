import { ReactNode } from "react";
import { NextPage } from "next";
import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

import Logo from "../components/logo";

const Login: NextPage = () =>  {
  return <>
    
    <CenterPositioned>
      <Logo />
    </CenterPositioned>

    <Button
      fullWidth
      variant="contained"
      startIcon={<GoogleIcon />}
    >
      Log in with Google
    </Button>
  </>
}

const CenterPositioned = ({ children }: { children: ReactNode }) => {
  return <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>;
}

export default Login