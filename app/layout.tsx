"use client";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define routes where you want to HIDE the sidebar & navbar
  const hideSidebarRoutes = ["/sign-in", "/login", "/register"];

  // Check if current path matches
  const shouldHideSidebar = hideSidebarRoutes.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
        >
          {shouldHideSidebar ? (
            // No sidebar/navbar for specific routes
            <div>{children}</div>
          ) : (
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full">
                <Navbar />
                <div className="px-4">{children}</div>
              </main>
            </SidebarProvider>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
