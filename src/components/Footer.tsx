
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "./ui/theme-provider";

export function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={cn(
      "w-full border-t py-6 mt-auto",
      theme === "dark" 
        ? "border-gray-800/40 bg-gray-900/80" 
        : "border-gray-200/40 bg-white/80"
    )}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="font-semibold">About Us</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link to="/press" className="text-sm text-muted-foreground hover:text-foreground">Press</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link to="/safety" className="text-sm text-muted-foreground hover:text-foreground">Safety Center</Link></li>
              <li><Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">Community Guidelines</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@example.com" className="text-sm text-muted-foreground hover:text-foreground">Email Us</a></li>
              <li><Link to="/advertise" className="text-sm text-muted-foreground hover:text-foreground">Advertise with Us</Link></li>
              <li><Link to="/partnerships" className="text-sm text-muted-foreground hover:text-foreground">Partnerships</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cricket Fantasy League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
