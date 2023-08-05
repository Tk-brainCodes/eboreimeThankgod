import lightMode from "../../assets/icons/light.png";
import darkMode from "../../assets/icons/dark.png";

interface ThemeProps {
  dark: boolean;
  toggleTheme: () => void;
}

const Toggle = ({ dark, toggleTheme }: ThemeProps) => {
  return (
    <div
      style={{ color: "white" }}
      onClick={toggleTheme}
      className='light-dark-mode'
    >
      {dark ? (
        <div className='light-mode'>
          Dark <img src={darkMode} alt='dark-mode-icon' />
        </div>
      ) : (
        <div className='dark-mode'>
          Light
          <img
            width='27px'
            height='27px'
            src={lightMode}
            alt='dark-mode-icon'
          />
        </div>
      )}
    </div>
  );
};

export default Toggle;
