import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef } from "react";
import { getDatabase, ref, get, child, set, onValue } from "firebase/database"
import { getAuth, updateEmail } from "firebase/auth";
const theme = createTheme();

export default function ChangeEmail() {
  var oldEmail = "";
  var newEmail = "";
  const auth = getAuth();
  const handleSubmit = (event) => {
    console.log("test123\n")
    console.log("Email before:", auth.currentUser.email, '\n')
    updateEmail(auth.currentUser, newEmail).then(() => {
      //Updated
      console.log("New email: ", user, '\n')
    }).catch((error) => {
      console.log("error\n")
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={handleSubmit()}
          sx={{
            marginTop: 8,
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="old-email"
            label="Old Email"
            type="old-email"
            autoComplete="old-email"
            value={oldEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="new-email"
            label="New Email"
            type="new-email"
            autoComplete="new-email"
            value={newEmail}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          <Button
            name="return"
            fullWidth
            variant="contained"
            href="accountSettings"
            sx={{ mt: 3, mb: 2 }}
          >
            Return
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
