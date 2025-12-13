import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-12 px-4 bg-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Grey Bookings</h3>
            <p className="text-white text-sm leading-relaxed mb-4">
              Twój zaufany partner w rezerwacji hoteli w całej Polsce. Najlepsze ceny i obsługa 24/7.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hotels" className="text-white hover:text-primary transition-colors text-sm">
                  Wszystkie hotele
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-white hover:text-primary transition-colors text-sm">
                  Oferty specjalne
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-primary transition-colors text-sm">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Wsparcie</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white hover:text-primary transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-primary transition-colors text-sm">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-primary transition-colors text-sm">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-white hover:text-primary transition-colors text-sm">
                  Polityka anulacji
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white text-sm">
                <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>
                  ul. Przykładowa 123
                  <br />
                  00-001 Warszawa
                </span>
              </li>
              <li className="flex items-center gap-2 text-white text-sm">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-white text-sm">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <span>kontakt@greybookings.pl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-white text-sm">
          <p>&copy; 2025 Grey Bookings. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
