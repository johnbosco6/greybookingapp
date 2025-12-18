"use client"


import { SearchForm } from "@/components/search-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HotelCard } from "@/components/hotel-card"
import { DestinationCard } from "@/components/destination-card"
import { ExperienceCard } from "@/components/experience-card"
import { hotels } from "@/lib/hotels-data"
import { polandDestinations, getSeasonalDestinations } from "@/lib/poland-destinations"
import { experiences } from "@/lib/experiences-data"
import Image from "next/image"
import { StarIcon, ShieldCheckIcon, HeadphonesIcon, Sparkles, TrendingUp, Heart } from "lucide-react"

export default function HomePage() {
  const featuredHotels = hotels.slice(0, 6)
  const topDestinations = polandDestinations.slice(0, 6)
  const seasonalDestinations = getSeasonalDestinations()
  const featuredExperiences = experiences.slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/Gemini_Generated_Image_mdx29imdx29imdx2.png"
            alt="Luksusowy hotel"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/90" />
        </div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mx-auto animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-primary font-medium">Odkryj Polskę z Grey Bookings</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up delay-100">
              Znajdź idealny hotel w <span className="text-primary">Polsce</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-10 drop-shadow-md animate-fade-in-up delay-200">
              Porównuj ceny, czytaj opinie i rezerwuj najlepsze hotele w całej Polsce.
              Twoja wymarzona podróż zaczyna się tutaj.
            </p>

            <div className="animate-fade-in-up delay-300">
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Destinations */}
      {seasonalDestinations.length > 0 && (
        <section className="py-16 px-4 bg-dark-lighter">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-3xl font-bold text-white">Popularne teraz</h2>
                <p className="text-white/80">Najlepsze miejsca na ten sezon</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasonalDestinations.map((destination, index) => (
                <DestinationCard key={destination.id} destination={destination} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Hotels */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Polecane hotele</h2>
              <p className="text-muted-foreground">Najlepiej oceniane obiekty w Polsce</p>
            </div>
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Poland */}
      <section className="py-16 px-4 bg-dark-lighter">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Odkryj <span className="text-primary">Polskę</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Od gór po morze, od historycznych miast po dziką przyrodę
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topDestinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Przeżyj niezapomniane chwile</h2>
            <p className="text-muted-foreground">Odkryj unikalne aktywności i doświadczenia w Polsce</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredExperiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-dark-lighter">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Dlaczego Grey Bookings?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow">
                <StarIcon className="w-10 h-10 text-white fill-current" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Najlepsze ceny</h3>
              <p className="text-white/80">Gwarantujemy najniższe ceny na rynku</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Bezpieczne płatności</h3>
              <p className="text-white/80">Twoje dane są u nas bezpieczne</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow">
                <HeadphonesIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Wsparcie 24/7</h3>
              <p className="text-white/80">Jesteśmy dostępni przez całą dobę</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
