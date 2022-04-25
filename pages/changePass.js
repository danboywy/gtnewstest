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
import { useAuth, changePass } from "../stores/firebase";


const theme = createTheme();
var pRetVal = "";

export function passRetVal(url) {
  pRetVal = url;
  console.log("pRetVal: ", pRetVal);
}
export default function ChangePass() {
  var oldPass = "";
  var newPass = "";
  const auth = useAuth();
  const newPassUpdate = (e) => {
    console.log("E: ", e.target.value);
    newPass = e.target.value;
  };

  const oldPassUpdate = (e) => {
    console.log("E: ", e.target.value);
    oldPass = e.target.value;
  };

  const HandleSubmit = async (event) => {
    var result = await changePass(auth, newPass, oldPass);
    console.log("result: ", result);
    if (result) {
      document.getElementById("retbutton").innerHTML = "Done";
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
            Account Settings
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="old-pass"
            label="Old Password"
            type="old-pass"
            autoComplete="old-pass"
            onChange={oldPassUpdate}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="new-pass"
            label="New Password"
            type="new-pass"
            autoComplete="new-pass"
            onChange={newPassUpdate}
          />

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
            sx={{ mt: 3, mb: 2 }}
            id="retbutton"
            
          >
            Return
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
