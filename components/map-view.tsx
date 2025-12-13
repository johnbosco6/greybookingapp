"use client"

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { Hotel } from "@/lib/hotels-data"
import { useEffect, useState } from "react"
import L from "leaflet"
import Link from "next/link"
import { Star } from "lucide-react"

// Fix for default marker icons in React-Leaflet
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
})

// Custom price marker
function createPriceMarker(price: number) {
    return L.divIcon({
        className: "custom-price-marker",
        html: `
      <div class="bg-white border-2 border-dark rounded-full px-3 py-1 font-bold text-dark shadow-lg hover:scale-110 transition-transform cursor-pointer">
        ${price} zł
      </div>
    `,
        iconSize: [60, 30],
        iconAnchor: [30, 15],
    })
}

interface MapViewProps {
    hotels: Hotel[]
    selectedHotel?: Hotel | null
    onHotelSelect?: (hotel: Hotel) => void
}

function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap()

    useEffect(() => {
        map.setView(center, zoom)
    }, [center, zoom, map])

    return null
}

export function MapView({ hotels, selectedHotel, onHotelSelect }: MapViewProps) {
    const [mounted, setMounted] = useState(false)

    // Poland center coordinates
    const defaultCenter: [number, number] = [52.0693, 19.4803]
    const defaultZoom = 6

    const center = selectedHotel
        ? [selectedHotel.coordinates.lat, selectedHotel.coordinates.lng] as [number, number]
        : defaultCenter

    const zoom = selectedHotel ? 13 : defaultZoom

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Ładowanie mapy...</p>
            </div>
        )
    }

    return (
        <div className="w-full h-full rounded-lg overflow-hidden">
            <MapContainer
                center={defaultCenter}
                zoom={defaultZoom}
                className="w-full h-full"
                scrollWheelZoom={true}
            >
                <MapController center={center} zoom={zoom} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {hotels.map((hotel) => (
                    <Marker
                        key={hotel.id}
                        position={[hotel.coordinates.lat, hotel.coordinates.lng]}
                        icon={createPriceMarker(hotel.price)}
                        eventHandlers={{
                            click: () => onHotelSelect?.(hotel),
                        }}
                    >
                        <Popup>
                            <div className="p-2 min-w-[200px]">
                                <Link href={`/hotels/${hotel.id}`} className="block">
                                    <h3 className="font-bold text-sm mb-1 hover:text-primary">{hotel.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-2">{hotel.location}, {hotel.city}</p>
                                    <div className="flex items-center gap-1 mb-2">
                                        <Star className="w-3 h-3 fill-primary text-primary" />
                                        <span className="text-xs font-semibold">{hotel.rating}</span>
                                        <span className="text-xs text-muted-foreground">({hotel.reviewCount})</span>
                                    </div>
                                    <p className="text-sm font-bold">{hotel.price} zł <span className="text-xs font-normal">/ noc</span></p>
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
