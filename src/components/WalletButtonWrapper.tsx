"use client"

import dynamic from 'next/dynamic'

// Dynamically import the WalletButton with no SSR
const WalletButton = dynamic(() => import('./WalletButton'), {
  ssr: false,
  loading: () => (
    <div className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg py-3 px-10 rounded-lg transition-all duration-300 shadow-lg animate-pulse">
      Loading...
    </div>
  ),
})

export default WalletButton
