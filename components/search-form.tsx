"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import { getCities } from "@/lib/hotels-data"

export function SearchForm() {
  const router = useRouter()
  const [city, setCity] = useState("Wszystkie")
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState("2")

  const cities = getCities()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (city && city !== "Wszystkie") {
      params.set("city", city)
    }
    router.push(`/hotels?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-5xl mx-auto">
      <div className="bg-card border-2 border-[#EDFF23] rounded-lg p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Miasto</label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="bg-background border-border">
                <MapPinIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Wybierz miasto" />
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

          {/* Check-in */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Zameldowanie</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-background border-border"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "dd MMM yyyy", { locale: pl }) : "Wybierz datę"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus locale={pl} />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Wymeldowanie</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-background border-border"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "dd MMM yyyy", { locale: pl }) : "Wybierz datę"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  locale={pl}
                  disabled={(date) => (checkIn ? date < checkIn : false)}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Goście</label>
            <div className="relative">
              <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-6 bg-[#EDFF23]/90 backdrop-blur-md text-[#131313] hover:bg-[#EDFF23] font-semibold border border-[#EDFF23]/30 shadow-lg transition-all"
        >
          Szukaj hoteli
        </Button>
      </div>
    </form>
  )
}
