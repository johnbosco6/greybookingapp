"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Skontaktuj się z nami</h1>
            <p className="text-muted-foreground text-lg">Masz pytania? Jesteśmy tutaj, aby Ci pomóc.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-6">Dane kontaktowe</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:kontakt@greybookings.pl" className="text-muted-foreground hover:text-primary transition-colors">kontakt@greybookings.pl</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a href="tel:+48123456789" className="text-muted-foreground hover:text-primary transition-colors">+48 123 456 789</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Adres</p>
                      <p className="text-muted-foreground">ul. Złota 44<br />00-120 Warszawa<br />Polska</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Godziny otwarcia</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between"><span>Poniedziałek - Piątek:</span> <span>8:00 - 20:00</span></p>
                  <p className="flex justify-between"><span>Sobota:</span> <span>9:00 - 18:00</span></p>
                  <p className="flex justify-between"><span>Niedziela:</span> <span>10:00 - 16:00</span></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-6">Napisz do nas</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Imię</label>
                    <Input id="name" placeholder="Jan" required className="bg-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="surname" className="text-sm font-medium">Nazwisko</label>
                    <Input id="surname" placeholder="Kowalski" required className="bg-background border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="jan@example.com" required className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Temat</label>
                  <Input id="subject" placeholder="W czym możemy pomóc?" required className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Wiadomość</label>
                  <Textarea id="message" placeholder="Twoja wiadomość..." rows={5} required className="bg-background border-border" />
                </div>

                <Button type="submit" className="w-full bg-primary text-dark hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
