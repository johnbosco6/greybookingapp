"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HotelCard } from "@/components/hotel-card"
import { HotelFilters } from "@/components/hotel-filters"
import { hotels, filterHotels, type FilterOptions } from "@/lib/hotels-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Map, List, LayoutGrid } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import map to avoid SSR issues
const MapView = dynamic(() => import("@/components/map-view").then((mod) => ({ default: mod.MapView })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-card rounded-lg animate-pulse" />,
})

type SortOption = "recommended" | "price-low" | "price-high" | "rating" | "reviews"
type ViewMode = "grid" | "list" | "map" | "split"

export default function HotelsPage() {
  const searchParams = useSearchParams()
  const cityParam = searchParams.get("city")

  const [filteredHotels, setFilteredHotels] = useState(hotels)
  const [sortBy, setSortBy] = useState<SortOption>("recommended")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [selectedHotel, setSelectedHotel] = useState<typeof hotels[0] | null>(null)
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    city: cityParam || "Wszystkie",
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    stars: [],
    amenities: [],
  })

  useEffect(() => {
    let filtered = filterHotels(filterOptions)

    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating)
        break
      case "reviews":
        filtered = [...filtered].sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        break
    }

    setFilteredHotels(filtered)
  }, [filterOptions, sortBy])

  useEffect(() => {
    if (cityParam) {
      setFilterOptions((prev) => ({ ...prev, city: cityParam }))
    }
  }, [cityParam])

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilterOptions(newFilters)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Hotele w Polsce</h1>
          <p className="text-muted-foreground">
            Znaleziono {filteredHotels.length} {filteredHotels.length === 1 ? "hotel" : "hoteli"}
          </p>
        </div>

        {/* View Controls */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-primary text-dark" : ""}
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              Siatka
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-primary text-dark" : ""}
            >
              <List className="w-4 h-4 mr-2" />
              Lista
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
              className={viewMode === "map" ? "bg-primary text-dark" : ""}
            >
              <Map className="w-4 h-4 mr-2" />
              Mapa
            </Button>
            <Button
              variant={viewMode === "split" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("split")}
              className={viewMode === "split" ? "bg-primary text-dark" : ""}
            >
              <Map className="w-4 h-4 mr-2" />
              Podziel
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Sortuj:</span>
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger className="w-[200px] bg-card border-primary/30">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Polecane</SelectItem>
                <SelectItem value="price-low">Cena: od najniższej</SelectItem>
                <SelectItem value="price-high">Cena: od najwyższej</SelectItem>
                <SelectItem value="rating">Ocena: od najwyższej</SelectItem>
                <SelectItem value="reviews">Liczba opinii</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          {viewMode !== "map" && (
            <div className="lg:col-span-1">
              <HotelFilters onFilterChange={handleFilterChange} />
            </div>
          )}

          {/* Content Area */}
          <div className={viewMode === "map" ? "lg:col-span-4" : viewMode === "split" ? "lg:col-span-3" : "lg:col-span-3"}>
            {viewMode === "map" ? (
              <div className="h-[calc(100vh-250px)] rounded-lg overflow-hidden">
                <Suspense fallback={<div className="w-full h-full bg-card rounded-lg animate-pulse" />}>
                  <MapView hotels={filteredHotels} selectedHotel={selectedHotel} onHotelSelect={setSelectedHotel} />
                </Suspense>
              </div>
            ) : viewMode === "split" ? (
              <div className="grid grid-cols-2 gap-4 h-[calc(100vh-250px)]">
                <div className="overflow-y-auto pr-2 space-y-4">
                  {filteredHotels.map((hotel) => (
                    <div key={hotel.id} onClick={() => setSelectedHotel(hotel)}>
                      <HotelCard hotel={hotel} />
                    </div>
                  ))}
                </div>
                <div className="rounded-lg overflow-hidden sticky top-0">
                  <Suspense fallback={<div className="w-full h-full bg-card rounded-lg animate-pulse" />}>
                    <MapView hotels={filteredHotels} selectedHotel={selectedHotel} onHotelSelect={setSelectedHotel} />
                  </Suspense>
                </div>
              </div>
            ) : (
              <>
                <div className={`grid ${viewMode === "list" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"} gap-6`}>
                  {filteredHotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>

                {filteredHotels.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">Nie znaleziono hoteli spełniających wybrane kryteria.</p>
                    <p className="text-muted-foreground text-sm mt-2">Spróbuj zmienić filtry wyszukiwania.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
