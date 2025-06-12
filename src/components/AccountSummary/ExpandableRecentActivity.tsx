import React from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit' as const;
  currencySymbol: string;
}

const transactionsData: Transaction[] = [
  {
    id: 'txn1',
    date: '2024-07-28',
    description: 'Online Shopping - Tech Gadgets',
    amount: 79.99,
    type: 'debit' as const,
    currencySymbol: '£',
  },
  {
    id: 'txn2',
    date: '2024-07-27',
    description: 'Salary Deposit - July',
    amount: 2500.0,
    type: 'credit' as const,
    currencySymbol: '£',
  },
  {
    id: 'txn3',
    date: '2024-07-26',
    description: 'Restaurant - The Italian Place',
    amount: 45.50,
    type: 'debit' as const,
    currencySymbol: '£',
  },
  {
    id: 'txn4',
    date: '2024-07-25',
    description: 'Gym Membership - Monthly Fee',
    amount: 30.00,
    type: 'debit' as const,
    currencySymbol: '£',
  },
  {
    id: 'txn5',
    date: '2024-07-24',
    description: 'Refund - Returned Item',
    amount: 19.99,
    type: 'credit' as const,
    currencySymbol: '£',
  },
];

interface ExpandableRecentActivityProps {
  className?: string;
  currencySymbol?: string;
}

const formatCurrency = (amount: number, currencyCode: string = 'GBP', symbol: string = '£') => {
  return `${symbol}${amount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const ExpandableRecentActivity: React.FC<ExpandableRecentActivityProps> = ({ 
  className,
  currencySymbol = '£'
}) => {
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

  return (
    <Accordion 
      type="single" 
      collapsible 
      className={cn("w-full", className)}
      value={openItem}
      onValueChange={setOpenItem}
    >
      <AccordionItem value="recent-activity" className="border-t border-tsbBorder/30">
        <AccordionTrigger 
          className="py-4 px-4 text-tsbPrimaryText hover:no-underline hover:bg-tsbAccent/5 data-[state=open]:text-tsbAccent"
        >
          <div className="flex justify-between items-center w-full">
            <span className="font-medium">Recent Activity</span>
            <ChevronDown 
              className={cn("h-5 w-5 shrink-0 transition-transform duration-200", openItem === "recent-activity" && "text-tsbAccent")} 
            />
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4 pt-0">
          {transactionsData.length > 0 ? (
            <ul className="space-y-3">
              {transactionsData.map((transaction) => (
                <li key={transaction.id} className="flex items-center justify-between py-2 border-b border-tsbBorder/20 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    {transaction.type === 'credit' ? (
                      <ArrowUpCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <ArrowDownCircle className="h-5 w-5 text-tsbError" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-tsbPrimaryText">{transaction.description}</p>
                      <p className="text-xs text-tsbSecondaryText">
                        {new Date(transaction.date).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'short', year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <p 
                    className={cn(
                      "text-sm font-semibold",
                      transaction.type === 'credit' ? 'text-green-600' : 'text-tsbError'
                    )}
                  >
                    {transaction.type === 'credit' ? '+' : '-'}
                    {formatCurrency(transaction.amount, undefined, transaction.currencySymbol)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-tsbSecondaryText text-center py-4">No recent activity.</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExpandableRecentActivity;
