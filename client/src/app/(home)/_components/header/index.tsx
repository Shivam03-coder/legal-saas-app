import { Button } from "@/components/ui/button";
import React from "react";
import NavMenuBar from "../nav-menu";

const Header = () => {
  return (
    <header className="absolute inset-0 top-3 flex h-min min-h-14 rounded-md p-2 text-primary">
      <nav className="flex flex-1 items-center justify-between px-5">
        {/* LOGO */}
        <h3>LAW-WISE</h3>
        <NavMenuBar />
        {/* USER ACTION */}
        <div className="flex gap-3">
          <Button variant={"outline"}>LOGIN</Button>
          <Button className="text-secondary">SIGN-IN</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
