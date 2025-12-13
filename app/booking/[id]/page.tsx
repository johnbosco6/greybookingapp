"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { getHotelById } from "@/lib/hotels-data"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import { notFound } from "next/navigation"

export default function BookingPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const hotel = getHotelById(params.id)
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  if (!hotel) {
    notFound()
  }

  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0
  const totalPrice = nights * hotel.price

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!checkIn || !checkOut) {
      alert("Proszę wybrać daty pobytu")
      return
    }

    // Navigate to checkout with booking details
    const params = new URLSearchParams({
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      firstName,
      lastName,
      email,
      phone,
    })

    router.push(`/checkout/${hotel.id}?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Finalizacja rezerwacji</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Daty pobytu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Zameldowanie</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-background/50 backdrop-blur-md border-border hover:bg-background/70 transition-all"
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

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Wymeldowanie</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-background/50 backdrop-blur-md border-border hover:bg-background/70 transition-all"
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
                            disabled={(date) => (checkIn ? date <= checkIn : false)}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Dane osobowe</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Imię</label>
                      <Input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Nazwisko</label>
                      <Input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Telefon</label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </CardContent>
              </Card>

              <Button
                type="submit"
                disabled={!checkIn || !checkOut}
                className="w-full bg-[#EDFF23]/90 backdrop-blur-md text-[#131313] hover:bg-[#EDFF23] font-semibold text-lg py-6 border border-[#EDFF23]/30 shadow-lg transition-all"
              >
                Przejdź do płatności
              </Button>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border sticky top-24">
              <CardHeader>
                <CardTitle>Podsumowanie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{hotel.name}</h3>
                  <p className="text-sm text-muted-foreground">{hotel.location}</p>
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cena za noc</span>
                    <span className="text-foreground">{hotel.price} zł</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Liczba nocy</span>
                    <span className="text-foreground">{nights || 0}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Suma</span>
                    <span className="text-2xl font-bold text-primary">{totalPrice || 0} zł</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Darmowa anulacja do 24 godzin przed zameldowaniem</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
