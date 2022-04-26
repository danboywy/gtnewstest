import { useEffect, useState } from "react";
import { useAuth, upload } from "../stores/firebase";
import styles from "../styles/profile.module.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@material-ui/core";
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png");
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
    document.getElementById("retbutton").innerHTML = "Done";
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh" }}>
        <Container component="main" maxWidth="xs">
        <Box
         
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
            Change Avatar
          </Typography>
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >    
    <div className={styles.fields}>
    
      <input type="file" onChange={handleChange} />
      <img src={photoURL} alt="Avatar" className={styles.avatar} />
      <Button     
        disabled={loading || !photo}    
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleClick}
            >
          Upload
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
    </div> </Box></Box></Container></Paper></ThemeProvider>
  );
}