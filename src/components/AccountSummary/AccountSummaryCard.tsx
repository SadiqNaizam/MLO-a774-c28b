import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  // CardDescription, // Not used directly, but available
  // CardFooter, // Not used directly, but available
  // CardHeader, // Not used directly, but available
  // CardTitle, // Not used directly, but available
} from '@/components/ui/card';
import ThreeDotMenu from './ThreeDotMenu';
import AccountActions from './AccountActions';
import ExpandableRecentActivity from './ExpandableRecentActivity';
import { Landmark } from 'lucide-react'; // Using Landmark as a generic bank/account icon

interface AccountDetails {
  accountName: string;
  accountType: string; // e.g., "Current Account", "Savings Account"
  accountNumber: string;
  sortCode: string;
  balance: number;
  availableBalance: number;
  currencySymbol?: string;
}

interface AccountSummaryCardProps {
  account: AccountDetails;
  className?: string;
}

const formatCurrency = (amount: number, symbol: string = '£') => {
  return `${symbol}${amount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const AccountSummaryCard: React.FC<AccountSummaryCardProps> = ({ account, className }) => {
  const currencySymbol = account.currencySymbol || '£';

  return (
    <Card className={cn("w-full max-w-md mx-auto bg-card text-card-foreground border-tsbBorder shadow-lg rounded-lg overflow-hidden", className)}>
      {/* Card Header Section */}
      <div className="flex justify-between items-start p-4 bg-tsbAccent/5 border-b border-tsbBorder/30">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-tsbAccent/10 rounded-full flex items-center justify-center">
            <Landmark className="h-6 w-6 text-tsbAccent" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-tsbPrimaryText">{account.accountName}</h2>
            <p className="text-sm text-tsbSecondaryText">{account.accountType}</p>
          </div>
        </div>
        <ThreeDotMenu />
      </div>

      {/* Main Card Content Section */}
      <CardContent className="p-4 space-y-6">
        <div className="text-left">
          <p className="text-xs text-tsbSecondaryText">
            Sort Code: <span className="font-medium text-tsbPrimaryText">{account.sortCode}</span> | Account No: <span className="font-medium text-tsbPrimaryText">{account.accountNumber}</span>
          </p>
        </div>
        
        <div className="text-center space-y-1">
          <p className="text-sm text-tsbSecondaryText">Available Balance</p>
          <p className="text-4xl font-bold text-tsbPrimaryText tracking-tight">
            {formatCurrency(account.availableBalance, currencySymbol)}
          </p>
          <p className="text-sm text-tsbSecondaryText">
            Current Balance: {formatCurrency(account.balance, currencySymbol)}
          </p>
        </div>

        <AccountActions />
      </CardContent>

      {/* Expandable Recent Activity Section */}
      <ExpandableRecentActivity currencySymbol={currencySymbol} />

    </Card>
  );
};

export default AccountSummaryCard;
