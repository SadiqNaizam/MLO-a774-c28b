import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import AccountSummaryCard from '../components/AccountSummary/AccountSummaryCard';

// Interface for account details. This mirrors the structure expected by AccountSummaryCard.
// In a larger application, this might be imported from a shared types file or from the AccountSummaryCard module if exported.
interface AccountDetails {
  accountName: string;
  accountType: string;
  accountNumber: string;
  sortCode: string;
  balance: number;
  availableBalance: number;
  currencySymbol?: string;
}

const IndexPage: React.FC = () => {
  // Define dummy data directly in this page component
  const primaryAccountData: AccountDetails = {
    accountName: "TSB Everyday Account",
    accountType: "Current Account",
    accountNumber: "12345678",
    sortCode: "77-01-02",
    balance: 3050.75,
    availableBalance: 2875.50,
    currencySymbol: "£",
  };

  const secondaryAccountData: AccountDetails = {
    accountName: "TSB Smart Saver",
    accountType: "Savings Account",
    accountNumber: "87654321",
    sortCode: "77-01-03",
    balance: 10500.00,
    availableBalance: 10500.00,
    currencySymbol: "£",
  };

  const jointAccountData: AccountDetails = {
    accountName: "TSB Joint Account",
    accountType: "Joint Current Account",
    accountNumber: "11223344",
    sortCode: "77-01-04",
    balance: 780.20,
    availableBalance: 750.00,
    currencySymbol: "£",
  };

  return (
    <MainAppLayout>
      {/* 
        The MainAppLayout's content area uses 'space-y-4' for its children.
        Each AccountSummaryCard will be stacked vertically with spacing.
      */}
      <AccountSummaryCard account={primaryAccountData} />
      <AccountSummaryCard account={secondaryAccountData} />
      <AccountSummaryCard account={jointAccountData} />
    </MainAppLayout>
  );
};

export default IndexPage;
