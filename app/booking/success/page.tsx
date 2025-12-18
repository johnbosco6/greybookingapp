"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Home, MapPin, Calendar, Receipt } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function BookingSuccessPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [mounted, setMounted] = useState(false)

    const hotelName = searchParams.get("hotel")
    const checkIn = searchParams.get("checkIn")
    const checkOut = searchParams.get("checkOut")
    const amount = searchParams.get("amount")
    const email = searchParams.get("email")

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-16 flex items-center justify-center">
                <div className="max-w-2xl w-full">
                    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl">
                        <CardHeader className="text-center pb-2">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <CheckCircle2 className="w-10 h-10 text-primary" />
                            </div>
                            <CardTitle className="text-3xl font-bold text-foreground">Rezerwacja potwierdzona!</CardTitle>
                            <p className="text-muted-foreground mt-2">Dziękujemy za złożenie rezerwacji w Grey Bookings.</p>
                        </CardHeader>
                        <CardContent className="space-y-8 mt-6">
                            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                                <h3 className="font-semibold text-lg border-b border-border pb-2 mb-4">Szczegóły rezerwacji</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <Home className="w-4 h-4" />
                                            <span>Obiekt</span>
                                        </div>
                                        <p className="font-medium text-foreground">{hotelName || "Hotel"}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <Receipt className="w-4 h-4" />
                                            <span>Całkowity koszt</span>
                                        </div>
                                        <p className="font-medium text-primary">{amount ? `${amount} zł` : "-"}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>Zameldowanie</span>
                                        </div>
                                        <p className="font-medium text-foreground">{checkIn || "-"}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>Wymeldowanie</span>
                                        </div>
                                        <p className="font-medium text-foreground">{checkOut || "-"}</p>
                                    </div>
                                </div>

                                {email && (
                                    <div className="mt-6 pt-4 border-t border-border">
                                        <p className="text-sm text-center text-muted-foreground">
                                            Potwierdzenie rezerwacji zostało wysłane na adres <span className="text-foreground font-medium">{email}</span>
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => router.push("/")}
                                    size="lg"
                                    className="bg-primary text-dark hover:bg-primary/90 font-semibold"
                                >
                                    <Home className="w-4 h-4 mr-2" />
                                    Wróć do strony głównej
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => window.print()}
                                >
                                    Pobierz potwierdzenie
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    )
}
