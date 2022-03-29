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

export default function changePassword() {
  const handleSubmit = (event) => {
    console.log("test1234");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={handleSubmit}
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
            name="old-password"
            label="Old Password"
            type="old-password"
            autoComplete="old-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="new-password"
            label="New Password"
            type="new-password"
            autoComplete="new-password"
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
            href="https://tc00kd.sse.codesandbox.io/"
            sx={{ mt: 3, mb: 2 }}
          >
            Return
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
