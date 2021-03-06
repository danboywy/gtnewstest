import { createContext,useEffect, useState } from "react"
import netlifyIdentity from 'netlify-identity-widget'
import { HelpOutline } from "@mui/icons-material"
import app from '../stores/firebase'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRef, } from "react";
import { signup, login, logout, useAuth } from "../stores/firebase";
import { useRouter } from 'next/router'
import { Paper } from "@material-ui/core";
import Alert from '@mui/material/Alert';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          GT News
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();
  
  export default function SignUp() {
    const router = useRouter()
    const [error, setError] = useState('')
    const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
     try {
      await signup(emailRef.current.value, passwordRef.current.value);
      router.push('../gameSelection')
     } catch (err) {
      const msg = err.message;
      if (msg === "Firebase: Error (auth/wrong-password)." || msg === "Firebase: Error (auth/internal-error).") {
        setError("Wrong password. Try again.");
      }
      else if (msg === "Firebase: Error (auth/invalid-email).") {
        setError("Invalid email.");
      }
      else if (msg === "Firebase: Error (auth/user-not-found).") {
        setError("User not found.");
      }
      else {
        setError(err.message)
      }
    }
}
      
    return (
      <ThemeProvider theme={theme}>
         <Paper style={{ height: "100vh" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <Box component="form" noValidate  sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    inputRef={emailRef}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    inputRef={passwordRef}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password" 
                  />
                </Grid>
              </Grid>      
              <Button 
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={ loading || currentUser } 
                onClick={handleSignup}
              >
                Sign Up
              </Button>  
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="../login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container></Paper>
      </ThemeProvider>
    );
  }