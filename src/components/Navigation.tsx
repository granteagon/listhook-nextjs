'use client'

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex py-5 items-center justify-between px-4 relative">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-2xl font-extrabold text-foreground">
          <Image
            src="/images/listhook.svg"
            alt="ListHook"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          ListHook
        </a>

        {/* Desktop Navigation - Centered */}
        <NavigationMenu className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/how-it-works" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm tracking-[-0.33px] font-extrabold uppercase transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                How It Works
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* DROPDOWN CODE - Kept for future use if needed
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">How It Works</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/how-it-works" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Overview</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          See how ListHook automates your marketing
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            */}

            <NavigationMenuItem>
              <NavigationMenuLink href="/features" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm tracking-[-0.33px] font-extrabold uppercase transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm tracking-[-0.33px] font-extrabold uppercase transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/book-call" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm tracking-[-0.33px] font-extrabold uppercase transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Book a Call
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild>
            <a href="/contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-card">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="/how-it-works" className="block py-2 text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="/features" className="block py-2 text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="/pricing" className="block py-2 text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="/book-call" className="block py-2 text-sm font-medium hover:text-primary">
              Book a Call
            </a>
            <div className="pt-4 space-y-2">
              <Button className="w-full" asChild>
                <a href="/contact">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
