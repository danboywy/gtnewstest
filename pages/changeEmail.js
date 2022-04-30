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
import { useAuth, changeEmail } from "../stores/firebase";
import { setRetVal } from "../pages/accountSettings";
import { useRouter } from "next/router";
import { Paper } from "@material-ui/core";
const theme = createTheme();
var eRetVal = "";

export function emailRetVal(url) {
  eRetVal = url;
  console.log("eRetVal: ", eRetVal);
}

export default function ChangeEmail() {
  const router = useRouter();
  var newEmail = "";
  const auth = useAuth();
  const newEmailUpdate = (e) => {
    //newEmail = e
    console.log("E: ", e.target.value);
    newEmail = e.target.value;
  };

  const HandleSubmit = async (event) => {
    console.log("test123\n");
    var pass = document.getElementById("pass").value;
    var result = await changeEmail(auth, newEmail, pass);
    console.log("after change email: ", result);
    if (result) {
      document.getElementById("retbutton").innerHTML = "Done";
      console.log("after email change: ", result);
      document.getElementById("errmsg").innerHTML =
        "Email Successfully Updated";
      router.reload();
    } else {
      document.getElementById("errmsg").innerHTML = "Invalid Password";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            onSubmit={HandleSubmit}
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
              Change Email
            </Typography>
            {auth && <span>Current: {auth.email}</span>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="new-email"
              label="New Email"
              type="new-email"
              autoComplete="new-email"
              onChange={newEmailUpdate}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              name="Password"
              type="password"
              autoComplete="pass"
              id="pass"
            />
            <Typography component="h1" variant="h5" id="errmsg"></Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={HandleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Button
              name="return"
              fullWidth
              variant="contained"
              href="accountSettings"
              id="retbutton"
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
