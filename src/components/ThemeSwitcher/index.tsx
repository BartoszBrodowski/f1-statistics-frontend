"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import * as Switch from "@radix-ui/react-switch";

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
          className="w-[42px] h-[25px] bg-blackA9 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
          id="airplane-mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
      </div>
    </form>
  );
};
