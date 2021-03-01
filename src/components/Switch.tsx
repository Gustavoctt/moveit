import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import SwitchReact from "react-switch";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Switch() {
  const { theme, setTheme } = useTheme();
  const [isActiveThemeDark, setIsActiveThemeDark] = useState(false);
  const [themeLocalStorage, setThemeLocalStorage] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setThemeLocalStorage(localStorage.getItem("light"));
    }
  }, [theme]);

  function changeTheme() {
    if (isActiveThemeDark) {
      localStorage.setItem("light", "light");
      setTheme("ligth");
      setIsActiveThemeDark(false);
    } else {
      localStorage.setItem("light", "dark");
      setTheme("dark");
      setIsActiveThemeDark(true);
    }
  }

  return (
    <SwitchReact
      checkedIcon={
        <FiSun 
          size={15} 
          color="#fff" 
          style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingLeft: 2
          }}
        />
      }
      uncheckedIcon={
        <FiMoon 
          size={15} 
          color="#fff" 
          style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingRight: 2
          }}
        />
      }
      onChange={changeTheme}
      checked={themeLocalStorage === "dark" ? true : false}
      height={25}
      width={40}
      handleDiameter={28}
      offColor="#666666"
      onColor="#4953b8"
    />
  );
}
