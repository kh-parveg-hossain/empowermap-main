
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 py-12 mt-12">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">
              <span className="text-primary">Empower</span>Map
            </h3>
            <p className="text-sm text-muted-foreground">
              Educating and empowering people on social causes around the world.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-3">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/library" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Content Library
                </Link>
              </li>
              <li>
                <Link 
                  to="/map" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link 
                  to="/discover" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Discovery Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contributors
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EmpowerMap. Open source platform for social causes.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Discord"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
