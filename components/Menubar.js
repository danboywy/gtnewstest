import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Grid from "@mui/material/Grid";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import Datetime from "./Datetime";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import LoginIcon from '@mui/icons-material/Login';
import {useContext} from 'react'
import {useAuth, logout, upload} from '../stores/firebase'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import { useRouter } from 'next/router'
export default function Menubar({ check, change }) {
  const currentUser = useAuth();
  const router = useRouter()
  const [ loading, setLoading ] = useState(false);
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      router.push('/');
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png");
  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])


  async function  wrapperFunction() {
    setAnchorElUser(null);
    handleLogout();
}
  return (
    <Container component="main" maxWidth="fixed">
    <div className={styles.meum_bar}>
      <Box sx={{ mx: "auto" }}>
        <Grid item xs={12} container>
          <Grid item xs={0.5} container></Grid>
          <Grid item md={2} lg={1} container alignItems="center">
            <Link href="/">
              <div className={styles.gtnews_logo}>
                <img
                  className={styles.gtnewslogo}
                  src="GTNEWS.png"
                  alt="GTNews"
                ></img>
              </div>
            </Link>
          </Grid>
          <Grid item md={3.5} lg={4.5} container alignItems="center">
            <Datetime />
          </Grid>
          <Grid item xs={1} container alignItems="center">
            <Switch checked={check} onChange={change} />
            <span className={styles.switchtext}>Dark mode</span>
          </Grid>        
          {currentUser &&
            <ActiveLink href="/gameNews">
                <SportsEsportsOutlinedIcon
                  sx={{ color: "#2196f3", fontSize: 50 }}
                />          
              <br></br>      
                <span className={styles.icongametext}>Game</span>
            </ActiveLink>
          }  
          {currentUser &&
            <ActiveLink href="/techNews">
              <PublicOutlinedIcon sx={{ color: "#2196f3", fontSize: 50 }} />
              <br></br>
              <span className={styles.icontechtext}>Tech</span>
            </ActiveLink>
          }    
          {currentUser &&
            <ActiveLink href="/favorite">
              <StarOutlinedIcon sx={{ color: "#2196f3", fontSize: 50 }} />
              <br></br>
              <span className={styles.iconaccounttext}>Favorite</span>
              </ActiveLink>
          }
          {!currentUser &&<Grid item xs={3} container></Grid>}
          <Grid
            item
            xs={1}
            container
            alignItems="center"
            justifyContent="center"
            > {currentUser &&
            <div className={styles.account} >
              <IconButton  onClick={handleOpenUserMenu}  sx={{ p: 0,  marginTop:0.5, marginBottom:0.5 }}>
                {" "}
                <img src={photoURL} alt="Avatar" className={styles.avatar} />
              </IconButton>
              <br></br>
              <span className={styles.iconaccounttext}>Account</span>
            </div>}

             {/*-----------login----------*/}
          
             {!currentUser &&
             <Link href="/login">
            <div className={styles.notice}>
              <LoginIcon  sx={{ color: "#2196f3", fontSize: 50 }} />
              <br></br>
              <span className={styles.iconaccounttext}>Login</span>
              
            </div></Link>}
            <Menu
              sx={{ mt: "80px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
             >
                <Link href="/accountSettings">
            <MenuItem onClick={handleCloseUserMenu}>
              <ListItemIcon>        
                <ManageAccountsIcon fontSize="small" />
              </ListItemIcon>
              Setting
            </MenuItem></Link>
            <MenuItem onClick={wrapperFunction}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
        
            </Menu>
          </Grid>
        
   </Grid>
      </Box>
    </div></Container>
  );
}