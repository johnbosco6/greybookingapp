"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HotelCard } from "@/components/hotel-card"
import { hotels } from "@/lib/hotels-data"
import { useWishlist } from "@/lib/wishlist"
import { Heart } from "lucide-react"

export default function WishlistPage() {
  const { wishlist } = useWishlist()
  const wishlistHotels = hotels.filter((hotel) => wishlist.includes(hotel.id))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Heart className="h-5 w-5 fill-current" />
            <span className="font-semibold">Twoje ulubione</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Lista ulubionych hoteli</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {wishlistHotels.length > 0
              ? `Masz ${wishlistHotels.length} ${wishlistHotels.length === 1 ? "hotel" : "hoteli"} na liście ulubionych`
              : "Nie masz jeszcze żadnych ulubionych hoteli"}
          </p>
        </div>

        {wishlistHotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {wishlistHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-24 w-24 text-muted-foreground/30 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Brak ulubionych hoteli</h2>
            <p className="text-muted-foreground mb-6">
              Dodaj hotele do ulubionych, klikając ikonę serca na karcie hotelu
            </p>
            <a
              href="/hotels"
              className="inline-flex items-center gap-2 bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Przeglądaj hotele
            </a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
