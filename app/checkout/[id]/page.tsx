"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { getHotelById } from "@/lib/hotels-data"
import { CreditCard, Wallet, Building2, CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import Image from "next/image"

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const hotel = getHotelById(params.id)

  const checkInParam = searchParams.get("checkIn")
  const checkOutParam = searchParams.get("checkOut")
  const firstNameParam = searchParams.get("firstName")
  const lastNameParam = searchParams.get("lastName")
  const emailParam = searchParams.get("email")
  const phoneParam = searchParams.get("phone")

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  if (!hotel) {
    notFound()
  }

  const checkIn = checkInParam ? new Date(checkInParam) : new Date()
  const checkOut = checkOutParam ? new Date(checkOutParam) : new Date()
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
  const subtotal = nights * hotel.price
  const serviceFee = Math.round(subtotal * 0.1)
  const tax = Math.round(subtotal * 0.08)
  const total = subtotal + serviceFee + tax

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptTerms) {
      alert("Musisz zaakceptować warunki rezerwacji")
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const params = new URLSearchParams()
    if (hotel?.name) params.append("hotel", hotel.name)
    if (checkInParam) params.append("checkIn", checkInParam)
    if (checkOutParam) params.append("checkOut", checkOutParam)
    params.append("amount", total.toString())
    if (emailParam) params.append("email", emailParam)

    router.push(`/booking/success?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="text-foreground hover:text-[#EDFF23] hover:bg-[#EDFF23]/10 backdrop-blur-sm transition-all"
          >
            ← Powrót
          </Button>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-8">Płatność</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Guest Information Summary */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Dane gościa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Imię i nazwisko</p>
                    <p className="text-foreground font-medium">
                      {firstNameParam} {lastNameParam}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">{emailParam}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Telefon</p>
                    <p className="text-foreground font-medium">{phoneParam}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Daty pobytu</p>
                    <p className="text-foreground font-medium">
                      {format(checkIn, "dd MMM", { locale: pl })} - {format(checkOut, "dd MMM yyyy", { locale: pl })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Metoda płatności</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <div className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">Karta kredytowa / debetowa</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="blik" id="blik" />
                    <Label htmlFor="blik" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Wallet className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">BLIK</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="transfer" id="transfer" />
                    <Label htmlFor="transfer" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">Przelew bankowy</span>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Details */}
            {paymentMethod === "card" && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Dane karty</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-foreground">
                        Numer karty
                      </Label>
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        maxLength={19}
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="text-foreground">
                        Imię i nazwisko na karcie
                      </Label>
                      <Input
                        id="cardName"
                        type="text"
                        placeholder="Jan Kowalski"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate" className="text-foreground">
                          Data ważności
                        </Label>
                        <Input
                          id="expiryDate"
                          type="text"
                          placeholder="MM/RR"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          maxLength={5}
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-foreground">
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          maxLength={3}
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 pt-4">
                      <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Akceptuję warunki rezerwacji i politykę prywatności. Rozumiem, że płatność zostanie pobrana
                        natychmiast.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isProcessing || !acceptTerms}
                      className="w-full bg-[#EDFF23]/90 backdrop-blur-md text-[#131313] hover:bg-[#EDFF23] font-semibold text-lg py-6 border border-[#EDFF23]/30 shadow-lg transition-all mt-6"
                    >
                      {isProcessing ? "Przetwarzanie..." : `Zapłać ${total} zł`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {paymentMethod === "blik" && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Płatność BLIK</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="blikCode" className="text-foreground">
                        Kod BLIK
                      </Label>
                      <Input
                        id="blikCode"
                        type="text"
                        placeholder="123 456"
                        maxLength={6}
                        required
                        className="bg-background border-border text-center text-2xl tracking-widest"
                      />
                      <p className="text-xs text-muted-foreground">
                        Wygeneruj kod BLIK w aplikacji bankowej i wpisz go powyżej
                      </p>
                    </div>

                    <div className="flex items-start space-x-2 pt-4">
                      <Checkbox
                        id="terms-blik"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      />
                      <label
                        htmlFor="terms-blik"
                        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        Akceptuję warunki rezerwacji i politykę prywatności.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isProcessing || !acceptTerms}
                      className="w-full bg-[#EDFF23]/90 backdrop-blur-md text-[#131313] hover:bg-[#EDFF23] font-semibold text-lg py-6 border border-[#EDFF23]/30 shadow-lg transition-all mt-6"
                    >
                      {isProcessing ? "Przetwarzanie..." : `Zapłać ${total} zł`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {paymentMethod === "transfer" && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Przelew bankowy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Po potwierdzeniu rezerwacji otrzymasz dane do przelewu na podany adres email. Rezerwacja zostanie
                      potwierdzona po zaksięgowaniu płatności (do 2 dni roboczych).
                    </p>

                    <div className="flex items-start space-x-2 pt-4">
                      <Checkbox
                        id="terms-transfer"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      />
                      <label
                        htmlFor="terms-transfer"
                        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        Akceptuję warunki rezerwacji i politykę prywatności.
                      </label>
                    </div>

                    <Button
                      onClick={handlePayment}
                      disabled={isProcessing || !acceptTerms}
                      className="w-full bg-[#EDFF23]/90 backdrop-blur-md text-[#131313] hover:bg-[#EDFF23] font-semibold text-lg py-6 border border-[#EDFF23]/30 shadow-lg transition-all mt-6"
                    >
                      {isProcessing ? "Przetwarzanie..." : "Potwierdź rezerwację"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border sticky top-24">
              <CardHeader>
                <CardTitle>Podsumowanie zamówienia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden relative">
                  <Image
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">{hotel.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {hotel.city}, {hotel.location}
                  </p>
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {hotel.price} zł × {nights} {nights === 1 ? "noc" : "noce"}
                    </span>
                    <span className="text-foreground">{subtotal} zł</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Opłata serwisowa</span>
                    <span className="text-foreground">{serviceFee} zł</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Podatek</span>
                    <span className="text-foreground">{tax} zł</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Suma całkowita</span>
                    <span className="text-2xl font-bold text-primary">{total} zł</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Darmowa anulacja do 24h przed przyjazdem</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Natychmiastowe potwierdzenie</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Bezpieczna płatność</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
