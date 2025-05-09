"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import { GraduationCap, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Resources", path: "/resources" },
  { name: "Media", path: "/media" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 10) { // Reduced from 50 to 10 for more immediate effect
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300", // Changed from sticky to fixed
        scrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" : "bg-background/95 backdrop-blur-none" // Increased blur and added backdrop-blur-none for unscrolled state
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="hidden font-bold sm:inline-block">Minhajul Islam Milon</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-1">
            {routes.map((route) => (
              <NavigationMenuItem key={route.path}>
                <Link href={route.path} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      pathname === route.path && "bg-accent/50 font-semibold",
                    )}
                  >
                    {route.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="/admin">Admin</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
              <div className="mt-6 flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent",
                      pathname === route.path && "bg-accent font-semibold",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
                <Link
                  href="/admin"
                  className="mt-4 flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Admin
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
