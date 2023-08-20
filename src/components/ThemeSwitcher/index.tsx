"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import * as Switch from "@radix-ui/react-switch";
import { IconButton } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <form>
      <div className="flex items-center">
        <label
          className="text-black dark:text-white text-[15px] leading-none pr-[15px]"
          htmlFor="airplane-mode"
        >
          {theme === "dark" ? "Dark" : "Light"}
        </label>
        <Switch.Root
          className="w-[42px] h-[25px] bg-blackA7 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 data-[state=checked]:bg-black outline-none hover:cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Switch.Thumb className="flex items-center justify-center bg-white dark:bg-[#232323] w-[20px] h-[20px] rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]">
            {theme === "dark" ? (
              <MoonIcon className="text-white" />
            ) : (
              <SunIcon className="w-4 h-4 text-black dark:text-white" />
            )}
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </form>
  );
};
