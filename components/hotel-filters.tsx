"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getCities, getAllAmenities } from "@/lib/hotels-data"
import { Star } from "lucide-react"

interface HotelFiltersProps {
  onFilterChange: (filters: {
    city: string
    minPrice: number
    maxPrice: number
    minRating: number
    stars: number[]
    amenities: string[]
  }) => void
}

export function HotelFilters({ onFilterChange }: HotelFiltersProps) {
  const [city, setCity] = useState("Wszystkie")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [minRating, setMinRating] = useState(0)
  const [selectedStars, setSelectedStars] = useState<number[]>([])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])

  const cities = getCities()
  const amenities = getAllAmenities()

  const handleStarToggle = (star: number) => {
    setSelectedStars((prev) => (prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]))
  }

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  const applyFilters = () => {
    onFilterChange({
      city,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minRating,
      stars: selectedStars,
      amenities: selectedAmenities,
    })
  }

  const resetFilters = () => {
    setCity("Wszystkie")
    setPriceRange([0, 1000])
    setMinRating(0)
    setSelectedStars([])
    setSelectedAmenities([])
    onFilterChange({
      city: "Wszystkie",
      minPrice: 0,
      maxPrice: 1000,
      minRating: 0,
      stars: [],
      amenities: [],
    })
  }

  return (
    <Card className="bg-card border-border sticky top-24">
      <CardHeader>
        <CardTitle className="text-foreground">Filtry</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* City Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Miasto</Label>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Wszystkie">Wszystkie miasta</SelectItem>
              {cities.map((cityName) => (
                <SelectItem key={cityName} value={cityName}>
                  {cityName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-foreground">Cena za noc</Label>
          <div className="px-2">
            <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={1000} step={50} className="w-full" />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{priceRange[0]} zł</span>
            <span>{priceRange[1]} zł</span>
          </div>
        </div>

        {/* Star Rating */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-foreground">Kategoria hotelu</Label>
          <div className="space-y-2">
            {[5, 4, 3].map((star) => (
              <div key={star} className="flex items-center space-x-2">
                <Checkbox
                  id={`star-${star}`}
                  checked={selectedStars.includes(star)}
                  onCheckedChange={() => handleStarToggle(star)}
                />
                <label
                  htmlFor={`star-${star}`}
                  className="flex items-center gap-1 text-sm text-foreground cursor-pointer"
                >
                  {Array.from({ length: star }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Minimum Rating */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-foreground">Minimalna ocena</Label>
          <Select value={minRating.toString()} onValueChange={(v) => setMinRating(Number(v))}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Wszystkie</SelectItem>
              <SelectItem value="4">4.0+</SelectItem>
              <SelectItem value="4.5">4.5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amenities */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-foreground">Udogodnienia</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={`amenity-${amenity}`}
                  checked={selectedAmenities.includes(amenity)}
                  onCheckedChange={() => handleAmenityToggle(amenity)}
                />
                <label htmlFor={`amenity-${amenity}`} className="text-sm text-foreground cursor-pointer">
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-4 border-t border-border">
          <Button onClick={applyFilters} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Zastosuj filtry
          </Button>
          <Button onClick={resetFilters} variant="outline" className="w-full border-border bg-transparent">
            Wyczyść filtry
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
