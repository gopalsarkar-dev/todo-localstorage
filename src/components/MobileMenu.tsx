"use client";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="block sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size={36} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu Bar</SheetTitle>
              <SheetDescription className="flex flex-col space-y-3 text-xl">
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
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileMenu;
