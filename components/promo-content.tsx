"use client"
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("flex flex-col gap-4 bg-muted/20 p-3", className)}>
        <div className="flex items-center gap-3">
          {/* <img
            src="/magicui-logo.png"
            alt="Magic UI"
            className="w-8 h-8 rounded object-cover flex-shrink-0"
          /> */}
          <div className="flex-1 min-w-0">
            <p className="text-xl font-medium text-foreground/90">
              Land More Deals
            </p>
            <p className="text-xs text-muted-foreground">
              Motion+ gives you templates, snippets, code that convert to users.
            </p>
          </div>
          
        </div>
        <Button
            variant={"shiny"}
            className="w-24"
          >
            <Link href="#" className="font-semibold">
              Visit
            </Link>
          </Button>
      </div>
    );
  }

  return (
    <div
      className={cn("border border-border rounded-lg p-4 bg-card", className)}
    >
      <div className="flex flex-col gap-4">
        <img
          src="/magicui-pro.png"
          alt="Magic UI"
          className="w-full h-40 rounded-md object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            Try Magic UI Pro
          </h3>
          <p className="text-sm text-muted-foreground">
            Magic UI Pro is a design system for building beautiful and
            responsive web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
