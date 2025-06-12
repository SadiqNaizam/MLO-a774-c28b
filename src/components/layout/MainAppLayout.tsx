import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("flex min-h-screen flex-col bg-background", className)}>
      <Header />
      <main 
        className={cn(
          "flex-1 flex flex-col", // Ensures main content area takes available space and allows vertical flex
          "pt-16" // Padding top to account for the fixed header (h-16 from Header.tsx)
        )}
      >
        {/* 
          The 'container' class centers content and applies responsive max-widths.
          'mx-auto' is crucial for centering the container.
          'p-4' provides padding inside the content area as per mainContent.container requirement.
          'flex-1' allows this div to grow if main itself has other fixed-height siblings (e.g. a footer within main).
          'flex flex-col space-y-4' applies vertical stacking and spacing for direct children, 
          aligning with mainContent.layout requirement.
        */}
        <div 
          className={cn(
            "container mx-auto flex-1 p-4", 
            "flex flex-col space-y-4"
          )}
        >
          {children}
        </div>
      </main>
      {/* Optional: A footer could be added here, outside or inside the main tag depending on desired stickiness */}
      {/* <footer className="border-t border-tsbBorder bg-background p-4 text-center text-sm text-tsbSecondaryText">
        © {new Date().getFullYear()} TSB Bank. All rights reserved.
      </footer> */}
    </div>
  );
};

export default MainAppLayout;
