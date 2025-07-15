"use client";

import Link from "next/link";
import DarkToggleBtn from "./DarkToggleBtn";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu";

const TopBar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="border-b-foreground/20 fixed top-0 w-full border-b">
        <section className="container mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold">Todo || </div>
          <div className="flex items-center justify-center gap-3">
            <div className="hidden space-x-3 sm:block">
              <Link href="/" className={pathname === "/" ? "font-light" : ""}>
                Todos
              </Link>
              <Link
                href="/complete"
                className={pathname === "/complete" ? "font-light" : ""}
              >
                Complete
              </Link>
              <Link
                href="/incomplete"
                className={pathname === "/incomplete" ? "font-light" : ""}
              >
                InComplet
              </Link>
            </div>
            <DarkToggleBtn />
            <MobileMenu />
          </div>
        </section>
      </nav>
    </>
  );
};

export default TopBar;
