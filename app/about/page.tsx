"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-dark/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1200&text=About+Us"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="container mx-auto px-4 relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">O nas</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Tworzymy przyszłość podróżowania, łącząc technologię z pasją do odkrywania Polski.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Story */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6">Nasza Historia</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Grey Bookings powstało z miłości do podróży i chęci pokazania, jak piękna jest Polska.
                Zaczynaliśmy jako mały zespół entuzjastów, a dziś jesteśmy jedną z wiodących platform rezerwacyjnych w kraju.
                Wierzymy, że każdy zasługuje na wyjątkowy wypoczynek, dlatego starannie selekcjonujemy ofertę hoteli i apartamentów.
              </p>
            </section>

            {/* Values */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ludzie są najważniejsi</h3>
                <p className="text-muted-foreground">Zarówno nasi klienci, jak i partnerzy hotelowi są w centrum wszystkiego, co robimy.</p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innowacja</h3>
                <p className="text-muted-foreground">Ciągle szukamy nowych rozwiązań, aby proces rezerwacji był prostszy i szybszy.</p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pasja</h3>
                <p className="text-muted-foreground">Podróże to nasza pasja, którą chcemy dzielić się z każdym użytkownikiem naszej platformy.</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
