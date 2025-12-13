"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save } from "lucide-react"

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ email: string; name: string } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+48 123 456 789",
    address: "Warszawa, Polska",
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
      setFormData({ ...formData, name: parsedUser.name, email: parsedUser.email })
    } else {
      router.push("/login")
    }
  }, [router])

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify({ email: formData.email, name: formData.name }))
    alert("Ustawienia zostały zapisane!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Link
          href="/account"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Powrót do konta
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Ustawienia konta</h1>
          <p className="text-muted-foreground">Zarządzaj swoimi danymi osobowymi</p>
        </div>

        <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSave} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Imię i nazwisko
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Adres email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Numer telefonu
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-foreground">
                Adres
              </Label>
              <Input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="pt-4 border-t border-primary/10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Zmiana hasła</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-foreground">
                    Obecne hasło
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-foreground">
                    Nowe hasło
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmNewPassword" className="text-foreground">
                    Potwierdź nowe hasło
                  </Label>
                  <Input
                    id="confirmNewPassword"
                    type="password"
                    placeholder="••••••••"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary text-dark hover:bg-primary/90 font-semibold">
              <Save className="h-5 w-5 mr-2" />
              Zapisz zmiany
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
