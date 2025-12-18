"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon, MapPinIcon, Heart } from "lucide-react"
import type { Hotel } from "@/lib/hotels-data"
import { useWishlist } from "@/lib/wishlist"

interface HotelCardProps {
  hotel: Hotel
}

export function HotelCard({ hotel }: HotelCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist()
  const inWishlist = isInWishlist(hotel.id)

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(hotel.id)
  }

  return (
    <Link href={`/hotels/${hotel.id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card border-2 border-[#EDFF23] h-full relative group">
        <div className="relative h-48 w-full">
          <Image
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <button
            onClick={handleWishlistClick}
            className="absolute top-3 right-3 w-10 h-10 bg-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-dark transition-colors z-10"
            aria-label={inWishlist ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
          >
            <Heart className={`h-5 w-5 transition-colors ${inWishlist ? "fill-primary text-primary" : "text-white"}`} />
          </button>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg text-foreground line-clamp-1">{hotel.name}</h3>
            <div className="flex items-center gap-1 bg-[#EDFF23] text-white px-2 py-1 rounded-md shrink-0">
              <StarIcon className="h-3 w-3 fill-current" />
              <span className="text-sm font-bold">{hotel.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPinIcon className="h-4 w-4" />
            <span className="line-clamp-1">{hotel.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">{hotel.reviewCount} opinii</div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{hotel.price} zł</div>
              <div className="text-xs text-muted-foreground">za noc</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
