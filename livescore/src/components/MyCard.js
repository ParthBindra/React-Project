import { Button, Card, CardActions, CardContent, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiModal-paper": {
    backgroundColor: "#fff",
    color: "#333",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    border: "none",
    boxShadow: "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
    maxWidth: 600,
    width: "80%",
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#333",
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[300]}`,
  boxShadow: "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
}));

const StyledModalContent = styled("div")(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
}));

const MyCard = ({ match }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <StyledCard>
        <CardContent>
          <Grid container justifyContent="center" alignItems="center" spacing={6}>
            <Grid item>
              <Typography variant="h5" fontWeight="bold">
                {match.teams[0]}
              </Typography>
            </Grid>
            <Grid item>
              <img style={{ width: 85 }} src={require("../img/vs.png")} alt="" />
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight="bold">
                {match.teams[1]}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justifyContent="center">
            <Button variant="contained" color="secondary" onClick={handleOpen}>
              Show Details
            </Button>

            <Button variant="contained" color="primary">
              {new Date(match.dateTimeGMT).toString()}
            </Button>
          </Grid>
        </CardActions>

        <StyledModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <StyledModalContent>
            <Typography id="modal-title" variant="h5" component="h2" gutterBottom fontWeight="bold">
              Match Details
            </Typography>
            <Typography id="modal-description" variant="body1" fontWeight="bold">
              <p>Teams: {match.teams.join(" vs ")}</p>
              <p>Venue: {match.venue}</p>
             
              <p>Date: {new Date(match.dateTimeGMT).toLocaleString()}</p>
              <p>Status: {match.status}</p>
              {/* Add more match details as needed */}
            </Typography>
          </StyledModalContent>
        </StyledModal>
      </StyledCard>
    </ThemeProvider>
  );
};

export default MyCard;