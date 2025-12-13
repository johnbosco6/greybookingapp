import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReviewSection } from "@/components/review-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getHotelById } from "@/lib/hotels-data"
import { StarIcon, MapPinIcon, WifiIcon, CarIcon, UtensilsIcon, WindIcon, PhoneIcon } from "lucide-react"

export default function HotelDetailsPage({ params }: { params: { id: string } }) {
  const hotel = getHotelById(params.id)

  if (!hotel) {
    notFound()
  }

  const amenityIcons: Record<string, any> = {
    "Darmowe WiFi": WifiIcon,
    Parking: CarIcon,
    Restauracja: UtensilsIcon,
    Klimatyzacja: WindIcon,
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-primary/30">
            <Image src={hotel.images[0] || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {hotel.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-[192px] rounded-lg overflow-hidden border border-primary/30">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${hotel.name} - zdjęcie ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{hotel.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{hotel.address}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#EDFF23] px-4 py-2 rounded-lg text-white">
                  <StarIcon className="h-5 w-5 fill-current" />
                  <span className="text-xl font-bold">{hotel.rating}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{hotel.reviewCount} opinii gości</p>
            </div>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Opis</h2>
                <p className="text-muted-foreground leading-relaxed">{hotel.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Udogodnienia</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || WifiIcon
                    return (
                      <div key={amenity} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-foreground">{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <ReviewSection hotelId={hotel.id} hotelName={hotel.name} />
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-primary/30 sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Cena za noc od</div>
                  <div className="text-4xl font-bold text-primary">{hotel.price} zł</div>
                </div>

                <Link href={`/contact-hotel/${hotel.id}`} className="block mb-3">
                  <Button className="w-full bg-[#EDFF23]/90 backdrop-blur-md text-white hover:bg-[#EDFF23] font-semibold py-6 border border-[#EDFF23]/30 shadow-lg transition-all">
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Skontaktuj się z hotelem
                  </Button>
                </Link>

                <Link href={`/booking/${hotel.id}`}>
                  <Button className="w-full bg-[#EDFF23]/90 backdrop-blur-md text-white hover:bg-[#EDFF23] font-semibold text-lg py-6 border border-[#EDFF23]/30 shadow-lg transition-all">
                    Zarezerwuj teraz
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Darmowa anulacja</span>
                    <span className="text-foreground font-medium">Tak</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Płatność przy zameldowaniu</span>
                    <span className="text-foreground font-medium">Dostępna</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Natychmiastowe potwierdzenie</span>
                    <span className="text-foreground font-medium">Tak</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
