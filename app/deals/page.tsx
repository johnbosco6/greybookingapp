import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HotelCard } from "@/components/hotel-card"
import { hotels } from "@/lib/hotels-data"
import { Percent } from "lucide-react"

export default function DealsPage() {
  // Show hotels with best ratings as "deals"
  const dealHotels = hotels.filter((hotel) => hotel.rating >= 4.6).slice(0, 9)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Percent className="h-5 w-5" />
            <span className="font-semibold">Oferty specjalne</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Najlepsze oferty hoteli</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odkryj nasze najlepiej oceniane hotele w atrakcyjnych cenach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
