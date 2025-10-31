"use client"
import Link from "next/link"
import * as React from "react"
import { User, Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import Sheet from "@/components/ui/native-swipeable-sheets"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-semibold tracking-tight">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export function SiteNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* Fixed navbar container - no padding here */}
      <div className="fixed top-0 left-0 right-0 w-full bg-transparent z-50">
        {/* Inner container with padding and max-width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-28/wU3i34HP3z.png)] bg-cover bg-no-repeat" />
              <Button asChild variant="link" className="p-0">
                <Link href="/">
                  <span className="font-pp-mondwest text-xl font-normal leading-5 tracking-tight whitespace-nowrap">
                    MotionMagic
                  </span>
                </Link>
              </Button>
            </div>

            {/* Desktop Nav + Actions */}
            <div className="flex items-center gap-6">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                {/* Products Dropdown */}
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <span className="text-base leading-5">Products</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 p-4 w-[400px]">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {/* About Dropdown */}
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <span className="text-base leading-5">About</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 p-4 w-[300px]">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/about/team"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-semibold leading-none">Team</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Meet the team behind MotionMagic.
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/about/careers"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-semibold leading-none">Careers</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Join our mission to revolutionize motion design.
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {/* Pricing Link */}
                <Link
                  href="/pricing"
                  className="text-base font-medium leading-5 hover:text-accent-foreground transition-colors"
                >
                  Pricing
                </Link>

                <ThemeToggle />

                {/* Divider */}
                <div className="w-px h-5 bg-border" />

                {/* Login Link */}
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-base hover:text-accent-foreground transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              </nav>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sheet Menu */}
      <Sheet
        open={isMobileMenuOpen}
        close={closeMobileMenu}
        title="Menu"
        className="min-h-[380px] bg-muted"
      >
        <nav className="flex flex-col px-8 pt-12 space-y-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                onClick={closeMobileMenu}
                className="block text-4xl font-semibold tracking-tight hover:text-accent transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block text-4xl font-semibold tracking-tight hover:text-accent transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="block text-4xl font-semibold tracking-tight hover:text-accent transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                onClick={closeMobileMenu}
                className="block text-4xl font-semibold tracking-tight hover:text-accent transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 text-4xl font-semibold tracking-tight hover:text-accent transition-colors"
              >
                <User className="w-8 h-8" />
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </Sheet>
    </>
  )
}