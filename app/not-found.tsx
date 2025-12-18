"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
                <div className="absolute z-10">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Strona nie znaleziona</h2>
                    <p className="text-muted-foreground mb-8">Przepraszamy, ale strona, której szukasz nie istnieje.</p>
                    <Link href="/">
                        <Button size="lg" className="bg-primary text-dark hover:bg-primary/90">
                            <Home className="w-4 h-4 mr-2" />
                            Wróć do strony głównej
                        </Button>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    )
}
