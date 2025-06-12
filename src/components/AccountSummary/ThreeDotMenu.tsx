import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical, Settings, FileText, UserCircle } from 'lucide-react';

interface ThreeDotMenuProps {
  className?: string;
}

const ThreeDotMenu: React.FC<ThreeDotMenuProps> = ({ className }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("text-tsbSecondaryText hover:text-tsbAccent", className)}
        >
          <MoreVertical className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-tsbBorder">
        <DropdownMenuItem className="text-tsbPrimaryText hover:!bg-tsbAccent/10 focus:!bg-tsbAccent/10">
          <UserCircle className="mr-2 h-4 w-4 text-tsbAccent" />
          <span>Manage Account</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-tsbPrimaryText hover:!bg-tsbAccent/10 focus:!bg-tsbAccent/10">
          <FileText className="mr-2 h-4 w-4 text-tsbAccent" />
          <span>View Statements</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-tsbBorder/50" />
        <DropdownMenuItem className="text-tsbPrimaryText hover:!bg-tsbAccent/10 focus:!bg-tsbAccent/10">
          <Settings className="mr-2 h-4 w-4 text-tsbAccent" />
          <span>Account Settings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThreeDotMenu;
