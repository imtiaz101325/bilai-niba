import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import background from "./background.jpg";

const LayoutContainer = styled(Container)`
  min-height: 100vh;
  min-width: 100vw;
  background: rgb(0, 110, 127);
  display: flex;
  color: white;
`;

const TextContainer = styled(Container)`
  margin: auto;
  text-align: center;
`;

const ImageContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled("img")`
  width: auto;
  height: 50vh;
  border-radius: 10px;
`;

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/adopt");
    }, 10000)
  }, [navigate]);

  function redirectToAdopt() {
    navigate("/adopt");
  }

  return (
    <LayoutContainer disableGutters>
      <TextContainer>
        <Typography variant="h1">বিলাই নিবা?</Typography>
        <Button variant="contained" onClick={redirectToAdopt}>
          <Typography variant="h4">বিড়াল দত্তক নিতে চান?</Typography>
        </Button>
        <Typography variant="h4" mt={2} mb={2}>অথবা</Typography>
        <Button variant="contained">
          <Typography variant="h4">বিড়াল দত্তক দিতে চান?</Typography>
        </Button>
      </TextContainer>
      <ImageContainer>
        <Image src={background} alt="background" />
      </ImageContainer>
    </LayoutContainer>
  );
}
