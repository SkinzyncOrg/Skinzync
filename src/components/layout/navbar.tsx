"use client";
import { ArrowRight, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RouteProps {
  path: string;
  label: string;
}

interface FeatureProps {
  title: string;
  path: string;
}

const leftRouteList: RouteProps[] = [
  {
    path: "/raw-materials",
    label: "Raw Materials",
  },
];

const rightRouteList: RouteProps[] = [
  {
    path: "/about-us",
    label: "About Us",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "AI Formulation",
    path: "/ai-formulation",
  },
  {
    title: "Ingredient Hub",
    path: "/ingredient-hub",

  },
  {
    title: "Match Your OEM",
    path: "/oem",

  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="flex items-center">
          <Image src="/logo-text.svg" alt="logo" width="124" height="43"/>
      </Link>
      
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image src="/logo-text.svg" alt="logo" width="138" height="48"/>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {leftRouteList.map(({ path, label }) => (
                  <Button
                    key={path}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={path}>{label}</Link>
                  </Button>
                ))}
                {rightRouteList.map(({ path, label }) => (
                  <Button
                    key={path}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={path}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <Button className="w-full mr-2 font-bold group/arrow bg-customPurple-300 hover:bg-customPurple-200">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
        <NavigationMenuItem>
            {leftRouteList.map(({ path, label }) => (
              <NavigationMenuLink key={path} asChild>
                <Link href={path} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[200px] p-4">
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, path }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted cursor-pointer"
                      onClick={() => router.push(path)}
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {rightRouteList.map(({ path, label }) => (
              <NavigationMenuLink key={path} asChild>
                <Link href={path} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex pr-1">
        <Button className="font-bold group/arrow bg-customPurple-300 hover:bg-customPurple-200" style={{ width: '174px' }}>
            Get Started
            <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
        </Button>
      </div>
    </header>
  );
};
