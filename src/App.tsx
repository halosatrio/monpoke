import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SoundContextProvider>
        <Toaster />
        <Routes />
        <NavigationMenu />
      </SoundContextProvider>
    </ThemeProvider>
  );
}

export default App;
