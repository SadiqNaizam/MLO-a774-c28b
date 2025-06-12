import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft, CreditCard } from 'lucide-react';

interface AccountActionsProps {
  className?: string;
}

const AccountActions: React.FC<AccountActionsProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 w-full", className)}>
      <Button 
        className="w-full sm:w-auto flex-1 bg-tsbAccent text-primary-foreground hover:bg-tsbAccent/90 rounded-full text-sm py-3 px-6"
        onClick={() => console.log('Move Money clicked')}
      >
        <ArrowRightLeft className="mr-2 h-4 w-4" />
        Move Money
      </Button>
      <Button 
        variant="outline"
        className="w-full sm:w-auto flex-1 border-tsbBorder text-tsbSecondaryText hover:bg-tsbAccent/10 hover:text-tsbAccent rounded-full text-sm py-3 px-6"
        onClick={() => console.log('Card Controls clicked')}
      >
        <CreditCard className="mr-2 h-4 w-4" />
        Card Controls
      </Button>
    </div>
  );
};

export default AccountActions;
