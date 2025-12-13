"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, Calendar, MapPin, CreditCard, Heart, LogOut, Settings } from "lucide-react"

export default function AccountPage() {
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

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Moje konto</h1>
          <p className="text-muted-foreground">Zarządzaj swoim profilem i rezerwacjami</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-1">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <div className="space-y-3">
                <Link href="/account/bookings">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/20 hover:bg-primary/10 hover:text-primary bg-transparent"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Moje rezerwacje
                  </Button>
                </Link>
                <Link href="/wishlist">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/20 hover:bg-primary/10 hover:text-primary bg-transparent"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Ulubione
                  </Button>
                </Link>
                <Link href="/account/settings">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/20 hover:bg-primary/10 hover:text-primary bg-transparent"
                  >
                    <Settings className="h-5 w-5 mr-2" />
                    Ustawienia
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full justify-start border-red-500/20 text-red-500 hover:bg-red-500/10 bg-transparent"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Wyloguj się
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Informacje osobiste</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Imię i nazwisko</p>
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Telefon</p>
                    <p className="text-sm font-medium text-foreground">+48 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Lokalizacja</p>
                    <p className="text-sm font-medium text-foreground">Warszawa, Polska</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Ostatnie rezerwacje</h3>
                <Link href="/account/bookings">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                    Zobacz wszystkie
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-primary/10">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Hotel Bristol Warsaw</h4>
                    <p className="text-sm text-muted-foreground">15-17 Marca 2025 • 2 noce</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">Potwierdzona</p>
                    <p className="text-xs text-muted-foreground">Rezerwacja #12345</p>
                  </div>
                </div>
                <div className="text-center py-8 text-muted-foreground">
                  <p>Nie masz więcej rezerwacji</p>
                  <Link href="/hotels">
                    <Button className="mt-4 bg-primary text-dark hover:bg-primary/90">Zarezerwuj hotel</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Metody płatności</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-primary/10">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Wygasa 12/25</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                    Edytuj
                  </Button>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary bg-transparent"
                >
                  + Dodaj nową kartę
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
