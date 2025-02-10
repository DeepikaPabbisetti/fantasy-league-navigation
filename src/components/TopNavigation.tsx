
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  CircleUserRound,
  Swords,
  Users,
  Settings,
  HelpCircle,
  Send,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { useTheme } from "./ui/theme-provider";
import { ModeToggle } from "./ui/mode-toogle";
import Cookies from 'js-cookie';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import Signout from './Signout';

const navigationItems = [
  { title: "Home", url: "/home", icon: Home },
  { title: "My Profile", url: "/profile", icon: CircleUserRound },
  { title: "Matches", url: "/matches", icon: Swords },
  { title: "Groups", url: "/groups", icon: Users },
  { title: "Friends", url: "/friends", icon: Users },
];

const supportItems = [
  { title: "Support", url: "/support", icon: HelpCircle },
  { title: "Feedback", url: "/feedback", icon: Send },
];

export function TopNavigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenuItem = navigationItems.find((item) => item.url === currentPath);
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.title);
    }
  }, [location]);

  const handleSignOut = () => {
    const token = Cookies.get('authToken');
    if (token) {
      Cookies.remove('authToken');
    }
    navigate('/login');
  };

  const confirmSignOut = () => {
    setShowDialog(true);
  };

  const handleDialogConfirm = () => {
    handleSignOut();
    setShowDialog(false);
  };

  const handleDialogCancel = () => {
    setShowDialog(false);
  };

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all",
        theme === "dark" 
          ? "border-gray-800/40 bg-gray-900/80" 
          : "border-gray-200/40 bg-white/80"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6_t3ve2CECe9DUpoG7xdyh5xYDFP6B8kJQ&s"
                  alt="Logo"
                  className="h-8 w-8 rounded-full border-2 border-gray-200"
                />
                <span className={cn(
                  "hidden font-semibold sm:inline-block",
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                )}>
                  Cricket Fantasy League
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    activeItem === item.title
                      ? theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                      : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  )}
                  onClick={() => setActiveItem(item.title)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <ModeToggle />
              
              {/* Profile & Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className={cn(
                    theme === "dark" 
                      ? "bg-gray-900 text-gray-100" 
                      : "bg-white text-gray-900"
                  )}
                >
                  <div className="flex flex-col space-y-4 mt-6">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                          activeItem === item.title
                            ? theme === "dark"
                              ? "bg-gray-800 text-white"
                              : "bg-gray-100 text-gray-900"
                            : theme === "dark"
                            ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        )}
                        onClick={() => {
                          setActiveItem(item.title);
                          setIsOpen(false);
                        }}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    ))}
                    
                    <Separator className="my-4" />
                    
                    {supportItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                          theme === "dark"
                            ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Profile Button */}
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full",
                  theme === "dark" 
                    ? "hover:bg-gray-800" 
                    : "hover:bg-gray-100"
                )}
                onClick={confirmSignOut}
              >
                <CircleUserRound className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Signout
        showDialog={showDialog}
        onConfirm={handleDialogConfirm}
        onCancel={handleDialogCancel}
      />
    </>
  );
}
