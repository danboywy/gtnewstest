import { color, fontWeight } from '@mui/system'
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
const ActiveLink = ({ router, href, children }) => {
  (function prefetchPages(){
    if (typeof window !=="undefined"){
      router.prefetch(router.pathname)
    }
  })()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  const isCurrentPath = router.pathname === href || router.asPath === href;
  
  return (
    <Grid
      className={styles.gridgame}
        item
        xs={1}
        container
        alignItems="center"
        justifyContent="center"
        style={{background:isCurrentPath ? "#cefdf3" : "",
        borderRadius:isCurrentPath ? "50%" : "" }}
      > 
      <div className={styles.game}>
        <a href={href} onClick={handleClick} style={{
        fontWeight: isCurrentPath ? "bold" : "normal", 
        color: isCurrentPath ? "#ff1744" : "",
        }}>
        {children}
        </a>
      </div>
    </Grid>
  )
}

export default withRouter(ActiveLink)