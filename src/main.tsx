import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeContext } from './AppContext.tsx'

createRoot(document.getElementById("root")!).render(
  <ThemeContext.Provider value="dark">
    <App />
  </ThemeContext.Provider>
);
