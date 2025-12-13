"use client"

import { useState, useEffect } from "react"

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([])

  useEffect(() => {
    // Load wishlist from localStorage
    const saved = localStorage.getItem("grey-bookings-wishlist")
    if (saved) {
      setWishlist(JSON.parse(saved))
    }
  }, [])

  const toggleWishlist = (hotelId: string) => {
    setWishlist((prev) => {
      const newWishlist = prev.includes(hotelId) ? prev.filter((id) => id !== hotelId) : [...prev, hotelId]

      localStorage.setItem("grey-bookings-wishlist", JSON.stringify(newWishlist))
      return newWishlist
    })
  }

  const isInWishlist = (hotelId: string) => wishlist.includes(hotelId)

  return { wishlist, toggleWishlist, isInWishlist }
}
