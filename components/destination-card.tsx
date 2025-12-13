"use client"

import Link from "next/link"
import { Destination } from "@/lib/poland-destinations"
import Image from "next/image"
import { MapPin, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

interface DestinationCardProps {
    destination: Destination
    index?: number
}

export function DestinationCard({ destination, index = 0 }: DestinationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Link href={`/hotels?city=${destination.name}`}>
                <div className="group relative overflow-hidden rounded-xl bg-card hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <div className="relative h-64 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-10" />
                        <Image
                            src={destination.image}
                            alt={destination.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-xs text-primary font-medium">{destination.region}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {destination.name}
                        </h3>

                        <p className="text-sm text-white/80 mb-3 line-clamp-2">
                            {destination.description}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-white/60" />
                                <span className="text-sm text-white/80">
                                    {destination.propertyCount} obiektów
                                </span>
                            </div>
                            <div className="text-sm text-white/80">
                                od <span className="text-primary font-bold">{destination.averagePrice} zł</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
