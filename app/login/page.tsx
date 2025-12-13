"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - in production, this would call an API
    localStorage.setItem("user", JSON.stringify({ email, name: "Jan Kowalski" }))
    router.push("/account")
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Powrót do strony głównej
        </Link>

        <div className="bg-card border border-primary/20 rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Zaloguj się</h1>
            <p className="text-muted-foreground">Witaj ponownie w Grey Bookings</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Adres email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="twoj@email.pl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-primary/20 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Hasło
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-primary/20 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                <input type="checkbox" className="rounded border-primary/20" />
                Zapamiętaj mnie
              </label>
              <Link href="#" className="text-primary hover:underline">
                Zapomniałeś hasła?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#EDFF23]/90 backdrop-blur-md text-[#131313] hover:bg-[#EDFF23] font-semibold border border-[#EDFF23]/30 shadow-lg transition-all"
            >
              Zaloguj się
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Nie masz konta?{" "}
            <Link href="/register" className="text-primary hover:underline font-medium">
              Zarejestruj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
