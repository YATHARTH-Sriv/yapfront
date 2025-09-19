"use client"

import { useEffect, useState } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'

export default function WalletButton() {
  const [mounted, setMounted] = useState(false)
  const { publicKey } = useWallet()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (publicKey) {
      console.log('Wallet connected:', publicKey.toBase58())
    }
  }, [publicKey])

  // Prevent hydration mismatch by not rendering on server
  if (!mounted) {
    return (
      <div className="bg-white text-black hover:bg-gray-100 font-medium px-6 py-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20 rounded-md">
        Connect Wallet
      </div>
    )
  }

  return (
    <WalletMultiButton className="!bg-white hover:!bg-gray-100 !text-black !font-medium !px-6 !py-2 !transition-all !duration-200 hover:!scale-105 hover:!shadow-lg hover:!shadow-lime-400/20 !rounded-md !border-0 !outline-none" />
  )
}
