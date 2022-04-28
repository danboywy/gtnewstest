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
import { createContext,useEffect, useState } from "react"
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

export default function SignIn() {
    const router = useRouter()
    
    const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  const [error, setError] = useState('')
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      router.push('../gameNews')
    } catch (err) {
      setError(err.message)
    }
    setLoading(false);
}
    

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      setError(err.message)
    }
    setLoading(false);
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
            Sign in
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
            />
            <Button            
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={ loading || currentUser } 
                onClick={handleLogin}
            >
              Sign In
            </Button>
            <Link href="/" variant="body2"> 
              <Button 
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={ loading || !currentUser } 
                onClick={handleLogout}
              >
                Log out
              </Button></Link>
            <Grid container>
              <Grid item xs>
                <Link href="../resetpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="../authContext" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container></Paper>
    </ThemeProvider>
  );
}