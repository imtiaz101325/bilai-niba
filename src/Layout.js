// components/Layout.js
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthenticator, Button } from "@aws-amplify/ui-react";
import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';

import background from "./background.jpg";

const LayoutContainer = styled(Container)`
  min-height: 100vh;
  min-width: 100vw;
  background-image: 
  linear-gradient(to bottom, rgba(245, 246, 252, 0.52), black),
  url(${background});
  background-size: cover;
`;

export default function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate("/login");
  }

  return (
    <LayoutContainer>
      <nav>
        <Button onClick={() => navigate('/')}>Home</Button>
        {route !== 'authenticated' ? (
          <Button onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button onClick={() => logOut()}>Logout</Button>
        )}
      </nav>
      <Outlet />
    </LayoutContainer>
  );
}
