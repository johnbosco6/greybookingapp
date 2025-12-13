"use client"

import Link from "next/link"
import Image from "next/image"
import { Hotel } from "@/lib/hotels-data"
import { Star, Heart, MapPin, Users } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface HotelCardProps {
    hotel: Hotel
}

export function HotelCard({ hotel }: HotelCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isWishlisted, setIsWishlisted] = useState(false)
    const images = hotel.images.length > 0 ? hotel.images : [hotel.image]

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const toggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsWishlisted(!isWishlisted)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
        >
            <Link href={`/hotels/${hotel.id}`}>
                <div className="group bg-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/50">
                    {/* Image Carousel */}
                    <div className="relative h-64 w-full overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-full w-full"
                            >
                                <Image
                                    src={images[currentImageIndex]}
                                    alt={hotel.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Wishlist Heart */}
                        <button
                            onClick={toggleWishlist}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-dark/60 backdrop-blur-sm hover:bg-dark/80 transition-colors"
                        >
                            <Heart
                                className={`w-5 h-5 transition-all duration-300 ${isWishlisted ? "fill-primary text-primary scale-110" : "text-white"
                                    }`}
                            />
                        </button>

                        {/* Image Navigation */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Image Indicators */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                                    {images.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-1 rounded-full transition-all ${index === currentImageIndex ? "w-6 bg-white" : "w-1 bg-white/50"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Star Rating Badge */}
                        <div className="absolute top-3 left-3 bg-dark/80 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                            {[...Array(hotel.stars)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                    {hotel.name}
                                </h3>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{hotel.location}, {hotel.city}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-primary text-primary" />
                                <span className="text-sm font-semibold">{hotel.rating}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">({hotel.reviewCount} opinii)</span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {hotel.description}
                        </p>

                        {/* Amenities Preview */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {hotel.amenities.slice(0, 3).map((amenity, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                >
                                    {amenity}
                                </span>
                            ))}
                            {hotel.amenities.length > 3 && (
                                <span className="text-xs text-muted-foreground px-2 py-1">
                                    +{hotel.amenities.length - 3} więcej
                                </span>
                            )}
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div>
                                <span className="text-2xl font-bold text-foreground">{hotel.price} zł</span>
                                <span className="text-sm text-muted-foreground"> / noc</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Users className="w-3 h-3" />
                                <span>2 osoby</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
