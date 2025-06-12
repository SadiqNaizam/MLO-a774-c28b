import React from 'react';
import { cn } from '@/lib/utils';
import { Landmark } from 'lucide-react';
// import { Button } from '@/components/ui/button'; // Example if a button like mobile menu toggle is needed
// import { Menu } from 'lucide-react'; // Example icon for a mobile menu toggle

interface HeaderProps {
  className?: string;
  // Example prop for a potential mobile menu functionality:
  // onMobileMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className /*, onMobileMenuToggle */ }) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-tsbBorder bg-background px-4 shadow-sm",
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <Landmark className="h-7 w-7 text-tsbAccent" />
        <h1 className="text-xl font-semibold text-tsbPrimaryText">
          TSB Bank
        </h1>
      </div>
      
      {/* Placeholder for future elements like user profile, navigation links, or a mobile menu toggle */}
      {/* Example: Mobile menu toggle (uncomment and implement if needed) 
      <Button 
        variant="ghost" 
        size="icon" 
        className="sm:hidden text-tsbPrimaryText hover:bg-tsbAccent/10" 
        onClick={onMobileMenuToggle}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      */}

      {/* Example: Desktop navigation or actions could go here 
      <nav className="hidden sm:flex items-center space-x-4">
        <a href="#" className="text-sm font-medium text-tsbSecondaryText hover:text-tsbAccent">
          Dashboard
        </a>
        <a href="#" className="text-sm font-medium text-tsbSecondaryText hover:text-tsbAccent">
          Accounts
        </a>
      </nav>
      */}
    </header>
  );
};

export default Header;
