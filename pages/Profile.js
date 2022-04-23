import { useEffect, useState } from "react";
import { useAuth, upload } from "../stores/firebase";
import styles from "../styles/profile.module.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@material-ui/core";
import Container from '@mui/material/Container';
export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
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
    <div className={styles.fields}>
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="Avatar" className={styles.avatar} />
    </div></Container></Paper></ThemeProvider>
  );
}