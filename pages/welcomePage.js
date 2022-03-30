import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function welcomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome to GTNews!
          </Typography>
          <Typography textAlign="center">
            The go-to hub for news about your favorite games and tech companies!
            Create an account to begin personalizing your news.
          </Typography>
          <Container maxWidth="xs">
            <Button
              name="LogIn"
              fullWidth
              variant="contained"
              href="signIn"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Button
              name="createAccount"
              fullWidth
              variant="contained"
              href="signUp"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
