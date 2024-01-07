"use client";
import makeStore from "store/store";
import { Provider } from "react-redux";
import Bootstrap from "./bootstrap";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import theme from "styles/theme/theme";

const App = ({ children }) => {
  return (
    <Provider store={makeStore}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <Bootstrap>{children}</Bootstrap>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
