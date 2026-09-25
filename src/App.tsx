import React, { useEffect } from "react";
import { ThemeContext } from "./AppContext";
import Button from "./components/Button";

function App() {
    const useTheme = React.useContext(ThemeContext);
    const [theme, setTheme] = React.useState(useTheme);
    const [icon, setIcon] = React.useState(theme === 'light' ? '🌙' : '☀️');

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setIcon(theme === 'light' ? '☀️' : '🌙');
    }

    return (
        <React.Fragment>
            <p style={{ color: theme === 'light' ? 'black' : 'white' }}>Hello, World!</p>
            <Button icon={icon} className="themeBtn" onClick={toggleTheme}/>
        </React.Fragment>
    );
}
export default App;
