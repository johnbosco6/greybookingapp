"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowLeft, Download, X } from "lucide-react"

export default function BookingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ email: string; name: string } | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/login")
    }
  }, [router])

  if (!user) return null

  const bookings = [
    {
      id: "12345",
      hotel: "Hotel Bristol Warsaw",
      city: "Warszawa",
      checkIn: "15 Marca 2025",
      checkOut: "17 Marca 2025",
      nights: 2,
      guests: 2,
      status: "Potwierdzona",
      total: "1200 zł",
    },
    {
      id: "12344",
      hotel: "Grand Hotel Kraków",
      city: "Kraków",
      checkIn: "1 Lutego 2025",
      checkOut: "3 Lutego 2025",
      nights: 2,
      guests: 2,
      status: "Zakończona",
      total: "980 zł",
    },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/account"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Powrót do konta
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Moje rezerwacje</h1>
          <p className="text-muted-foreground">Zarządzaj swoimi aktualnymi i przeszłymi rezerwacjami</p>
        </div>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{booking.hotel}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {booking.city}
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === "Potwierdzona"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {booking.status}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">#{booking.id}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Zameldowanie</p>
                    <p className="text-sm font-medium text-foreground">{booking.checkIn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Wymeldowanie</p>
                    <p className="text-sm font-medium text-foreground">{booking.checkOut}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Goście</p>
                    <p className="text-sm font-medium text-foreground">
                      {booking.guests} osoby • {booking.nights} noce
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                <div>
                  <p className="text-sm text-muted-foreground">Całkowity koszt</p>
                  <p className="text-2xl font-bold text-primary">{booking.total}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:bg-primary/10 hover:text-primary bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Pobierz
                  </Button>
                  {booking.status === "Potwierdzona" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500/20 text-red-500 hover:bg-red-500/10 bg-transparent"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Anuluj
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Brak rezerwacji</h3>
            <p className="text-muted-foreground mb-6">Nie masz jeszcze żadnych rezerwacji</p>
            <Link href="/hotels">
              <Button className="bg-primary text-dark hover:bg-primary/90">Zarezerwuj hotel</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
