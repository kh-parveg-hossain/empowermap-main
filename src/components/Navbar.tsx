
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Library', path: '/library' },
    { name: 'Map', path: '/map' },
    { name: 'Discover', path: '/discover' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "frosted" : "bg-transparent"
      )}
    >
      <div className="container-content">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-semibold tracking-tight transition-opacity duration-200 hover:opacity-80"
          >
            <span className="text-primary">Empower</span>Map
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary relative py-2",
                  isActive(link.path) 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
            
            <Button 
              size="sm" 
              className="transition-all duration-300 bg-primary/10 text-primary hover:bg-primary/20"
            >
              Get Involved
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium py-2 px-3 rounded-md transition-colors",
                  isActive(link.path) 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-accent text-foreground/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Button size="sm" className="mt-2 w-full">
              Get Involved
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
