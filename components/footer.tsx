import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Globe, Shield } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                Grey Bookings
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Twój zaufany partner w podróży. Odkrywaj najpiękniejsze zakątki Polski z najlepszymi hotelami i unikalnymi doświadczeniami.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} label="YouTube" />
            </div>
          </div>

          {/* Column 2: Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              Destynacje
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/destinations/warszawa">Warszawa</FooterLink>
              <FooterLink href="/destinations/krakow">Kraków</FooterLink>
              <FooterLink href="/destinations/zakopane">Zakopane</FooterLink>
              <FooterLink href="/destinations/gdansk">Gdańsk</FooterLink>
              <FooterLink href="/destinations/wroclaw">Wrocław</FooterLink>
              <FooterLink href="/destinations/poznan">Poznań</FooterLink>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Usługi</h4>
            <ul className="space-y-3">
              <FooterLink href="/hotels">Wszystkie hotele</FooterLink>
              <FooterLink href="/apartments">Apartamenty</FooterLink>
              <FooterLink href="/experiences">Doświadczenia</FooterLink>
              <FooterLink href="/car-rental">Wynajem aut</FooterLink>
              <FooterLink href="/business">Dla Biznesu</FooterLink>
              <FooterLink href="/gift-cards">Karty podarunkowe</FooterLink>
            </ul>
          </div>

          {/* Column 4: Support & Community */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Wsparcie</h4>
            <ul className="space-y-3">
              <FooterLink href="/help">Centrum pomocy</FooterLink>
              <FooterLink href="/safety">Centrum bezpieczeństwa</FooterLink>
              <FooterLink href="/cancellation">Opcje anulowania</FooterLink>
              <FooterLink href="/covid">Informacje COVID-19</FooterLink>
              <FooterLink href="/community">Forum podróżnicze</FooterLink>
              <FooterLink href="/blog">Blog podróżniczy</FooterLink>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  ul. Złota 44/12
                  <br />
                  00-120 Warszawa, Polska
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">+48 22 123 45 67</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">kontakt@greybookings.pl</span>
              </li>
              <li className="pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-xs font-medium text-white/90">Gwarancja bezpiecznej rezerwacji</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            &copy; {currentYear} Grey Bookings. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-white/50 hover:text-white text-xs transition-colors">
              Prywatność
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white text-xs transition-colors">
              Regulamin
            </Link>
            <Link href="/cookies" className="text-white/50 hover:text-white text-xs transition-colors">
              Pliki cookie
            </Link>
            <Link href="/sitemap" className="text-white/50 hover:text-white text-xs transition-colors">
              Mapa strony
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
      >
        <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
        {children}
      </Link>
    </li>
  )
}
