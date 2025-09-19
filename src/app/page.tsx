"use client";

import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import Landingpage from '@/components/Landingpage';

import '@solana/wallet-adapter-react-ui/styles.css';


export default function Home() {
  return (
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
        <Landingpage />
      </WalletModalProvider>
    </WalletProvider>
  )
}
