"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, X, Star, Shield } from "lucide-react"
import { Hotel } from "@/lib/hotels-data"

interface BookingWidgetProps {
    hotel: Hotel
}

export function BookingWidget({ hotel }: BookingWidgetProps) {
    const [checkIn, setCheckIn] = useState<Date>()
    const [checkOut, setCheckOut] = useState<Date>()
    const [guests, setGuests] = useState({ adults: 2, children: 0 })
    const [showGuestPicker, setShowGuestPicker] = useState(false)

    const nights = checkIn && checkOut
        ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
        : 0

    const subtotal = hotel.price * nights
    const serviceFee = Math.round(subtotal * 0.1)
    const total = subtotal + serviceFee

    return (
        <Card className="sticky top-24 p-6 border-2 border-primary/20 shadow-xl">
            <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">{hotel.price} zł</span>
                    <span className="text-muted-foreground">/ noc</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-semibold">{hotel.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({hotel.reviewCount} opinii)</span>
                </div>
            </div>

            <div className="space-y-4">
                {/* Date Selection */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="border border-border rounded-lg p-3 cursor-pointer hover:border-primary transition-colors">
                        <label className="text-xs font-semibold text-foreground block mb-1">ZAMELDOWANIE</label>
                        <div className="text-sm text-muted-foreground">
                            {checkIn ? checkIn.toLocaleDateString('pl-PL') : 'Dodaj datę'}
                        </div>
                    </div>
                    <div className="border border-border rounded-lg p-3 cursor-pointer hover:border-primary transition-colors">
                        <label className="text-xs font-semibold text-foreground block mb-1">WYMELDOWANIE</label>
                        <div className="text-sm text-muted-foreground">
                            {checkOut ? checkOut.toLocaleDateString('pl-PL') : 'Dodaj datę'}
                        </div>
                    </div>
                </div>

                {/* Guest Picker */}
                <div className="relative">
                    <div
                        className="border border-border rounded-lg p-3 cursor-pointer hover:border-primary transition-colors"
                        onClick={() => setShowGuestPicker(!showGuestPicker)}
                    >
                        <label className="text-xs font-semibold text-foreground block mb-1">GOŚCIE</label>
                        <div className="text-sm text-muted-foreground">
                            {guests.adults + guests.children} {guests.adults + guests.children === 1 ? 'gość' : 'gości'}
                        </div>
                    </div>

                    {showGuestPicker && (
                        <Card className="absolute top-full mt-2 w-full z-50 p-4 shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-semibold">Goście</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setShowGuestPicker(false)}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Dorośli</div>
                                        <div className="text-sm text-muted-foreground">Od 13 lat</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setGuests(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                                            disabled={guests.adults <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </Button>
                                        <span className="w-8 text-center font-semibold">{guests.adults}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setGuests(prev => ({ ...prev, adults: prev.adults + 1 }))}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Dzieci</div>
                                        <div className="text-sm text-muted-foreground">0-12 lat</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setGuests(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                                            disabled={guests.children <= 0}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </Button>
                                        <span className="w-8 text-center font-semibold">{guests.children}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setGuests(prev => ({ ...prev, children: prev.children + 1 }))}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>

                {/* Reserve Button */}
                <Button
                    className="w-full bg-primary hover:bg-primary/90 text-dark font-bold py-6 text-lg"
                    disabled={!checkIn || !checkOut}
                >
                    {checkIn && checkOut ? 'Zarezerwuj' : 'Sprawdź dostępność'}
                </Button>

                {checkIn && checkOut && (
                    <>
                        <p className="text-center text-sm text-muted-foreground">
                            Nie zostaniesz obciążony opłatą
                        </p>

                        {/* Price Breakdown */}
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="underline">{hotel.price} zł x {nights} {nights === 1 ? 'noc' : 'nocy'}</span>
                                <span className="font-semibold">{subtotal} zł</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="underline">Opłata serwisowa</span>
                                <span className="font-semibold">{serviceFee} zł</span>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between font-bold">
                                <span>Razem</span>
                                <span className="text-lg">{total} zł</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Bezpieczna rezerwacja</span>
                </div>
            </div>
        </Card>
    )
}
