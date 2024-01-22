"use client";
import makeStore from "store/store";
import { Provider } from "react-redux";
import Bootstrap from "./bootstrap";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import theme from "styles/theme/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId="1092960991760-7ih57lpsujsf5at6toka7o0vd24ogm21.apps.googleusercontent.com">
      <Provider store={makeStore}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            <Bootstrap>{children}</Bootstrap>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
