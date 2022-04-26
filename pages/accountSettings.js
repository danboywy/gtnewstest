import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@material-ui/core";
const theme = createTheme();
var retVal = "";

export function setRetVal(url) {
  retVal = url;
}

export default function AccountSettings() {
  console.log("retpage: ", retVal);
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Account Settings
            </Typography>
            <Button
              name="pic"
              fullWidth
              variant="contained"
              href="Profilepic"
              sx={{ mt: 3, mb: 2 }}
            >
              Profile Picture
            </Button>
            <Button
              name="password"
              fullWidth
              variant="contained"
              href="changePass"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Password
            </Button>
            <Button
              name="email"
              fullWidth
              variant="contained"
              href="changeEmail"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Email
            </Button>
            <Button
              name="likedGames"
              fullWidth
              variant="contained"
              href="changeGames"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Liked Games
            </Button>
            <Button
              name="likedTech"
              fullWidth
              variant="contained"
              href="changeTech"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Liked Tech
            </Button>
            <Button
              name="return"
              fullWidth
              variant="contained"
              href={retVal}
              sx={{ mt: 3, mb: 2 }}
            >
              Return
            </Button>
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}
