// import { useAuthenticator } from "@aws-amplify/ui-react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Container = styled(AppBar)`
  padding: 0 5rem;
`;

function Logo() {
  return (
    <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} to="/">
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
