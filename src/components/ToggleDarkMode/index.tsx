import { Moon, Sun } from "@phosphor-icons/react";
import { ToggleDarkModeContainer } from "./styles";

interface ToggleDarkModeProps {
  darkMode: boolean;
  onHandleDarkMode: () => void;
  width: 'small' | 'large';
}

export function ToggleDarkMode({ width, darkMode, onHandleDarkMode }: ToggleDarkModeProps) {
  return (
    <ToggleDarkModeContainer width={width} className="toggle-switch">
      <label>
        <input type="checkbox" onClick={onHandleDarkMode}/>
        <Sun className={`sun-icon ${!darkMode && 'light-selected'}`} />
        <Moon className={`moon-icon ${darkMode && 'dark-selected'}`} />       
      </label>
    </ToggleDarkModeContainer>
  )
}
