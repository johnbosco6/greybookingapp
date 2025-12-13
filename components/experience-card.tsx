"use client"

import Link from "next/link"
import { Experience } from "@/lib/experiences-data"
import Image from "next/image"
import { Star, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

interface ExperienceCardProps {
    experience: Experience
    index?: number
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Link href={`/experiences/${experience.id}`}>
                <div className="group bg-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/50">
                    <div className="relative h-56 w-full overflow-hidden">
                        <Image
                            src={experience.image}
                            alt={experience.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-xs font-medium text-primary">{experience.category}</span>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-primary text-primary" />
                                <span className="text-sm font-semibold">{experience.rating}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">({experience.reviewCount})</span>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {experience.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {experience.description}
                        </p>

                        <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{experience.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                <span>do {experience.maxGuests} osób</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-border">
                            <div>
                                <span className="text-xs text-muted-foreground">Od </span>
                                <span className="text-lg font-bold text-foreground">{experience.price} zł</span>
                                <span className="text-xs text-muted-foreground"> / osoba</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
