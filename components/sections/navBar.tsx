import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function NavBar() {
  return (
    <div className="bg-muted/20 sticky top-0 z-10 mt-5 flex w-full justify-center py-5 backdrop-blur-md">
      <NavigationMenu>
        <NavigationMenuList className="uppercase">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"#about"}>About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"#project"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"#experience"}>Experiences</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"#contact"}>Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBar;
