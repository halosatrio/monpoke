import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { Toaster } from "react-hot-toast";
import NavigationMenu from "components/NavigationMenu";
import Routes from "routes";
import { theme } from "theme";
import { SoundContextProvider } from "utils/sound-context";

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
