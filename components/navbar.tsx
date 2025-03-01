"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { BarChart3, TrendingUp, LineChart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Discover with Us",
      path: "/",
      icon: <TrendingUp className="h-4 w-4 mr-2" />,
    },
    {
      name: "Trend Analysis",
      path: "/trend-analysis",
      icon: <BarChart3 className="h-4 w-4 mr-2" />,
    },
    {
      name: "Stock Analysis",
      path: "/stock-analysis",
      icon: <LineChart className="h-4 w-4 mr-2" />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TrendingUp className="h-6 w-6" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-bold text-xl"
            >
              Trendlytics
            </motion.span>
          </Link>
        </div>

        <nav className="hidden md:flex mx-auto">
          <ul className="flex space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link href={item.path}>
                    <motion.div
                      className={`relative flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.icon}
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                          layoutId="navbar-indicator"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/auth">
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <motion.div
                        className={`relative flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.icon}
                        {item.name}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                            layoutId="navbar-indicator"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/auth">
                  <Button variant="default" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;