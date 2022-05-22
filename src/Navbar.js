// import { useAuthenticator } from "@aws-amplify/ui-react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useMatch, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Container = styled(AppBar)`
  padding: 0 5rem;
`;

function Logo() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <Typography variant="h5" sx={{ flexGrow: 1 }} to="/" onClick={handleClick}>
      বিলাই নিবা?
    </Typography>
  );
}

export default function Navbar() {
  // const { route, signOut } = useAuthenticator((context) => [
  //   context.route,
  //   context.signOut,
  // ]);
  const navigate = useNavigate();
  const match = useMatch("/");

  // function logOut() {
  //   signOut();
  //   navigate("/login");
  // }

  function handleLoginClick() {
    navigate("/login");
  }

  if (match) {
    return null;
  }

  return (
    <Container position="fixed">
      <Toolbar>
        <Logo />
        <Button color="inherit" onClick={handleLoginClick}>
          Login
        </Button>
      </Toolbar>
    </Container>
  );
}
