"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonStar, Sun } from "lucide-react";

const DarkToggleBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Button
        className="cursor-pointer"
        size={"icon"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <MoonStar className="scale-0 dark:scale-100" />
        <Sun className="absolute scale-100 dark:scale-0" />
      </Button>
    </>
  );
};

export default DarkToggleBtn;
