import { useRouter } from 'next/router'
import React from 'react'

export default function CoinDetails() {
  const {query, back} = useRouter()
  return (
    <div>CoinDetails</div>
  )
}
