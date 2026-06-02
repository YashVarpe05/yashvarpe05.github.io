"use client"

import classNames from "classnames";
import SunIcon from "./lottie-ui/sun-icon";
import MoonIcon from "./lottie-ui/moon-icon";
import { useTheme } from "next-themes";
import CardWrapper from "./cards/card-wrapper";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isLightMode = resolvedTheme === "light";

  const toggleTheme = () => {
    setTheme(isLightMode ? "dark" : "light");
  };

  return (
    <CardWrapper>
      <div className={classNames("relative h-full flex flex-col justify-center p-1")}>
        <div className="flex items-center justify-around h-full">
          <button
            className={`relative flex items-center justify-center rounded-[24px] h-full w-2/4 z-10
              ${isLightMode ? "shadow-verylight bg-white z-10 before:bg-gradient-to-br before:from-from before:from-0% before:to-100% before:to-to before:-z-10 before:opacity-40 before:h-full before:w-full before:absolute before:rounded-[20px] before:transition-all before:duration-300 before:ease-in-out" : ""}`}
            onClick={toggleTheme}
          >
            <SunIcon />
          </button>
          <button
            className={`relative flex items-center justify-center rounded-[24px] h-full w-2/4 z-10
              ${!isLightMode ? "shadow-darkmode bg-[#04040d29] z-10 before:bg-gradient-to-br before:from-from before:from-0% before:to-100% before:to-to before:-z-10 before:opacity-40 before:h-full before:w-full before:absolute before:rounded-[20px] before:transition-all before:duration-300 before:ease-in-out" : ""}`}
            onClick={toggleTheme}
          >
            <MoonIcon />
          </button>
        </div>
      </div>
    </CardWrapper>
  )
}

export default ThemeToggle
