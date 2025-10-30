"use client"
import Link from "next/link"
import * as React from "react"
import { User, Menu, X } from "lucide-react"
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
          <div className="text-sm leading-none font-medium">{title}</div>
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

  return (
    <>
      <div className="flex w-full max-w-[706px] h-[20px] justify-between items-center absolute top-10 left-1/2 -translate-x-1/2 mx-auto my-0 bg-transparent border-b border-border/20 z-50">
        {/* Logo Section */}
        <div className="flex w-auto gap-1 items-center shrink-0 flex-nowrap relative">
          <div className="w-5 h-5 shrink-0 bg-[ur[](https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-28/wU3i34HP3z.png)] bg-cover bg-no-repeat relative z-[1]" />
          <Button asChild variant="link">
            <Link href="/">
              <span className="flex w-[99px] h-5 justify-center items-start shrink-0 basis-auto font-pp-mondwest text-[20px] font-normal leading-[20px] text-foreground tracking-[-0.4px] relative text-center whitespace-nowrap z-[2]">
              MotionMagic
            </span>
            </Link>
          </Button>
          
        </div>

        {/* Desktop Nav + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav Items */}
          <div className="hidden md:flex w-[390px] gap-8 items-center shrink-0 relative z-[3]">
            {/* Products Dropdown */}
            <NavigationMenu>
              <NavigationMenuList className="m-0 p-0 list-none">
                <NavigationMenuItem className="m-0 p-0">
                  <NavigationMenuTrigger className=" ">
                    <span className="text-base leading-[20px]">Products</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-0 top-0 w-auto bg-popover text-popover-foreground border border-popover rounded-md shadow-lg p-0 min-w-[200px]">
                    <ul className="grid gap-2 p-4">
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
              <NavigationMenuList className="m-0 p-0 list-none">
                <NavigationMenuItem className="m-0 p-0">
                  <NavigationMenuTrigger>
                    <span className="text-base leading-[20px]">About</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-0 top-0 w-auto bg-popover text-popover-foreground border border-popover rounded-md shadow-lg p-0 min-w-[200px]">
                    <ul className="grid gap-2 p-4">
                      <li className="m-0 p-0">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about/team"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-sidebar-accent data-[active]:text-sidebar-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Team</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Meet the team behind MotionMagic.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="m-0 p-0">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about/careers"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-sidebar-accent data-[active]:text-sidebar-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Careers</div>
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

            {/* Pricing */}
            <Link
              href="/pricing"
              className="font-sans text-base font-medium leading-[20px] text-sidebar-foreground hover:text-sidebar-accent-foreground tracking-[-0.32px] no-underline outline-none"
            >
              Pricing
            </Link>
            <ThemeToggle/>

            {/* Divider */}
            <div className="w-px h-5 shrink-0 bg-foreground/80 relative" />

            {/* Login */}
            <Link
              href="/login"
              className="flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              <span className="text-base">Login</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-1"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-transparent border-b border-border/20">
          <div className="flex flex-col h-full pt-24 p-4 space-y-6">
            {/* Close Button */}
            <button
              className="self-end p-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Menu Items */}
            <ul className="space-y-6 flex-1">
              {/* Products */}
              <li>
                <h3 className="font-medium text-base mb-2">Products</h3>
                <ul className="ml-4 space-y-2">
                  {components.map((component) => (
                    <li key={component.title}>
                      <Link
                        href={component.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm hover:text-accent transition-colors"
                      >
                        {component.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* About */}
              <li>
                <h3 className="font-medium text-base mb-2">About</h3>
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/about/team"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm hover:text-accent transition-colors"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/careers"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm hover:text-accent transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Pricing */}
              <li>
                <Link
                  href="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium hover:text-accent transition-colors"
                >
                  Pricing
                </Link>
              </li>

              {/* Login */}
              <li>
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-base font-medium hover:text-accent transition-colors"
                >
                  <User className="w-4 h-4" />
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}