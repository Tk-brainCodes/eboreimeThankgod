import { createContext, useState , ReactNode } from "react";


interface ThemeProp {
  children: ReactNode;
}

export const ThemeContext = createContext({
  dark: true,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProp) => {
  const [dark, setToggle] = useState(true);

  const toggleTheme = () => {
    setToggle(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
