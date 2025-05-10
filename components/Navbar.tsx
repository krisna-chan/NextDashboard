"use client"
import Link from "next/link";
import {LogOut, Moon, Settings, User , Sun} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "@/components/ui/sidebar";


export default function Navbar() {
    const { setTheme } = useTheme();
    
    return (
        <nav className="flex items-center justify-between w-full h-16 shadow-md px-4">
            {/* LEFT */}
            <SidebarTrigger />
            {/* RIGHT */}
            <div className="flex items-center gap-4">
            <Link href="/">Polymer</Link>

            {/* THEME MENU */}
                <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

            {/* USER MENU */}
            <DropdownMenu>
  <DropdownMenuTrigger>
                <Avatar>
                <AvatarImage src={`https://avatars.githubusercontent.com/u/151432350?v=4&size=64`}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10} >
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><User/> Profile</DropdownMenuItem>
    <DropdownMenuItem><Settings/> Setting</DropdownMenuItem>
    <Link href="/sign-in">
        <DropdownMenuItem variant="destructive"><LogOut/> Logout</DropdownMenuItem>
    </Link>
    
  </DropdownMenuContent>
</DropdownMenu>

            </div>
        </nav>
    )
}