import "../styles/globals.css";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Menubar from "../components/Menubar";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // Darkmode
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Menubar check={darkMode} change={() => setDarkMode(!darkMode)} />

        <Component {...pageProps} />
      </Paper>
    </ThemeProvider>
  );
}

export default MyApp;
