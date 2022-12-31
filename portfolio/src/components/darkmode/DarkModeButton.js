import {CiDark,CiLight} from 'react-icons/ci'
import { useState, useEffect } from "react";

function DarkModeButton() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <CiLight className={theme === "light" ? "hidden" : "flex w-[25px] h-[25px] lg:transition-color duration-200 hover:scale-[1.15] sm:w-[40px] sm:h-[40px] lg:w-[40px] lg:h-[40px] 2xl:w-[55px] 2xl:h-[55px] cursor-pointer dark:invert"} onClick={handleThemeSwitch}/>
      <CiDark className={theme === "dark" ? "hidden" : "flex w-[25px] h-[25px] lg:transition-color duration-200 hover:scale-[1.15] sm:w-[40px] sm:h-[40px] lg:w-[40px] lg:h-[40px] 2xl:w-[55px] 2xl:h-[55px] cursor-pointer "} onClick={handleThemeSwitch}/>
    </div> 
  );
}

export default DarkModeButton;