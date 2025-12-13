"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skontaktuj się z Grey Bookings</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Masz pytania dotyczące rezerwacji? Jesteśmy tu, aby pomóc. Wypełnij formularz lub skontaktuj się z nami
            bezpośrednio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Temat</label>
                  <Input
                    placeholder="W czym możemy pomóc?"
                    className="bg-background border-primary/20"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
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

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+48 123 456 789</p>
                    <p className="text-sm text-muted-foreground mt-1">Pon-Pt: 8:00 - 20:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">kontakt@greybookings.pl</p>
                    <p className="text-sm text-muted-foreground mt-1">Odpowiadamy w ciągu 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Adres</h3>
                    <p className="text-muted-foreground">ul. Przykładowa 123</p>
                    <p className="text-muted-foreground">00-001 Warszawa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Godziny otwarcia</h3>
                    <p className="text-muted-foreground">Poniedziałek - Piątek: 8:00 - 20:00</p>
                    <p className="text-muted-foreground">Sobota - Niedziela: 10:00 - 18:00</p>
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
