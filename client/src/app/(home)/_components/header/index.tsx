import { Button } from "@/components/ui/button";
import React from "react";
import NavMenuBar from "../nav-menu";

const Header = () => {
  return (
    <header className="absolute inset-0 top-3 mx-auto flex h-min min-h-14 w-[95%] rounded-md bg-dark p-2 text-secondary">
      <nav className="flex flex-1 items-center justify-between px-5">
        {/* LOGO */}
        <div>
          <h3>LAW-WISE</h3>
        </div>
        {/* USER ACTION */}
        <div className="flex gap-3">
          <NavMenuBar />
          <Button className="bg-secondary text-primary">ABOUT</Button>
          <Button className="bg-secondary text-primary">LOGIN</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
