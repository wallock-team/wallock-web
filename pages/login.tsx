import {
  NextPage
} from "next";

import {
  Button, Container, Typography
} from "@mui/material";

const Login: NextPage = () =>  {
  return (
    <Container>
      <Typography>Hello! You are in Login page!</Typography>
      <Button>Click me!</Button>
    </Container>
  );
}

export default Login