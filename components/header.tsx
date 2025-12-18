"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Heart, User, Home, Building2, Tag, Mail, Info, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 backdrop-blur-xl bg-dark/70 supports-[backdrop-filter]:bg-dark/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-white">Grey Bookings</div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Strona główna
          </Link>
          <Link href="/hotels" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Hotele
          </Link>
          <Link href="/deals" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Oferty specjalne
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-primary transition-colors">
            O nas
          </Link>
          <Link href="/faq" className="text-sm font-medium text-white hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Kontakt
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-primary/10">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-primary/10">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-dark/80 backdrop-blur-2xl animate-in slide-in-from-top-4 fade-in duration-300">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            <Link
              href="/"
              className="flex items-center gap-3 text-sm font-medium text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 p-3 rounded-lg group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Strona główna</span>
            </Link>
            <Link
              href="/hotels"
              className="flex items-center gap-3 text-sm font-medium text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 p-3 rounded-lg group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Building2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Hotele</span>
            </Link>
            <Link
              href="/deals"
              className="flex items-center gap-3 text-sm font-medium text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 p-3 rounded-lg group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Tag className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Oferty specjalne</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-3 text-sm font-medium text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 p-3 rounded-lg group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Info className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>O nas</span>
            </Link>
            <Link
              href="/faq"
              className="flex items-center gap-3 text-sm font-medium text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 p-3 rounded-lg group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HelpCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>FAQ</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 text-sm font-medium text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 p-3 rounded-lg group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Kontakt</span>
            </Link>
            <div className="flex items-center gap-2 pt-4 mt-2 border-t border-primary/20">
              <Link href="/wishlist" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-white hover:text-primary hover:bg-primary/10 justify-start"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Ulubione
                </Button>
              </Link>
              <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-white hover:text-primary hover:bg-primary/10 justify-start"
                >
                  <User className="h-5 w-5 mr-2" />
                  Konto
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
