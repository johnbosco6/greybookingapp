"use client"

import type React from "react"

import { useState } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getHotelById } from "@/lib/hotels-data"
import { PhoneIcon, MailIcon, MapPinIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function ContactHotelPage({ params }: { params: { id: string } }) {
  const hotel = getHotelById(params.id)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  if (!hotel) {
    notFound()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Dziękujemy! Twoja wiadomość do ${hotel.name} została wysłana.`)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <Link
          href={`/hotels/${hotel.id}`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Powrót do hotelu
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Skontaktuj się z {hotel.name}</h1>
            <p className="text-lg text-muted-foreground">Masz pytania? Napisz bezpośrednio do hotelu</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-card border-primary/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Formularz kontaktowy</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Imię i nazwisko</label>
                      <Input
                        placeholder="Jan Kowalski"
                        className="bg-background border-primary/20"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="jan@example.com"
                        className="bg-background border-primary/20"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Telefon</label>
                      <Input
                        type="tel"
                        placeholder="+48 123 456 789"
                        className="bg-background border-primary/20"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Wiadomość</label>
                      <Textarea
                        placeholder="Opisz swoją sprawę..."
                        className="min-h-[150px] bg-background border-primary/20"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#EDFF23]/90 backdrop-blur-md text-white hover:bg-[#EDFF23] font-semibold py-6 border border-[#EDFF23]/30 shadow-lg transition-all"
                    >
                      Wyślij wiadomość
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Informacje kontaktowe</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Telefon</p>
                        <p className="text-foreground font-medium">+48 123 456 789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MailIcon className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground font-medium">
                          kontakt@{hotel.name.toLowerCase().replace(/\s+/g, "")}.pl
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Adres</p>
                        <p className="text-foreground font-medium">{hotel.address}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Szybka odpowiedź</h3>
                  <p className="text-sm text-muted-foreground">
                    Hotel zazwyczaj odpowiada w ciągu 24 godzin. W pilnych sprawach zalecamy kontakt telefoniczny.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
