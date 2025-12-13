"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface PropertyGalleryProps {
    images: string[]
    hotelName: string
}

export function PropertyGallery({ images, hotelName }: PropertyGalleryProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openGallery = (index: number) => {
        setCurrentIndex(index)
        setIsOpen(true)
    }

    const closeGallery = () => {
        setIsOpen(false)
    }

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-xl overflow-hidden">
                {/* Main Image */}
                <div
                    className="col-span-2 row-span-2 relative cursor-pointer group overflow-hidden"
                    onClick={() => openGallery(0)}
                >
                    <Image
                        src={images[0]}
                        alt={`${hotelName} - główne zdjęcie`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Secondary Images */}
                {images.slice(1, 5).map((image, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer group overflow-hidden"
                        onClick={() => openGallery(index + 1)}
                    >
                        <Image
                            src={image}
                            alt={`${hotelName} - zdjęcie ${index + 2}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        {index === 3 && images.length > 5 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">+{images.length - 5} zdjęć</span>
                            </div>
                        )}
                    </div>
                ))}

                {/* Show All Button */}
                <Button
                    onClick={() => openGallery(0)}
                    variant="outline"
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                    Pokaż wszystkie zdjęcia
                </Button>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    >
                        {/* Close Button */}
                        <Button
                            onClick={closeGallery}
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-white hover:bg-white/10"
                        >
                            <X className="w-6 h-6" />
                        </Button>

                        {/* Navigation */}
                        <Button
                            onClick={prevImage}
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </Button>

                        <Button
                            onClick={nextImage}
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </Button>

                        {/* Image Counter */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                            {currentIndex + 1} / {images.length}
                        </div>

                        {/* Main Image */}
                        <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto p-8">
                            <Image
                                src={images[currentIndex]}
                                alt={`${hotelName} - zdjęcie ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${index === currentIndex ? "ring-2 ring-primary" : "opacity-50 hover:opacity-100"
                                        }`}
                                >
                                    <Image src={image} alt={`Miniatura ${index + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
