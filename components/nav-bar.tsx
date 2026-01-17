import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import IconSearch from "./icons/icon-search";
import IconMessage from "./icons/icon-message";
import IconHamburger from "./icons/icon-hamburger";

const NavBar = () => {
  return (
    <div className="bg-background w-full shadow sticky top-0 z-50">
      <nav className="py-5 px-4 container mx-auto flex justify-between items-center gap-4">
        <Image src="/images/logo.png" alt="logo" width={108} height={45} />
        <div className="flex gap-4">
          <Button variant={"ghost"} size={"icon-lg"}>
            <IconSearch className="size-6" />
          </Button>
          <Button variant={"ghost"} size={"icon-lg"}>
            <IconMessage className="size-6" />
          </Button>
          <Button variant={"ghost"} size={"icon-lg"}>
            <IconHamburger className="size-6" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
