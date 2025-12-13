import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheckIcon, HeartIcon, TrophyIcon, UsersIcon } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">O Grey Bookings</h1>
            <p className="text-lg text-muted-foreground">Twój zaufany partner w rezerwacji hoteli w całej Polsce</p>
          </div>

          <Card className="bg-card border-primary/30 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Nasza historia</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Grey Bookings powstało z pasji do podróżowania i chęci ułatwienia Polakom znajdowania idealnych miejsc
                noclegowych. Od 2024 roku pomagamy tysiącom klientów w rezerwacji hoteli w najpiękniejszych zakątkach
                Polski.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nasza platforma łączy najlepsze hotele z podróżnikami, oferując konkurencyjne ceny, przejrzysty system
                rezerwacji i wsparcie na każdym etapie podróży.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Bezpieczeństwo</h3>
                <p className="text-muted-foreground">
                  Gwarantujemy bezpieczne płatności i ochronę Twoich danych osobowych zgodnie z najwyższymi standardami.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <HeartIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Pasja</h3>
                <p className="text-muted-foreground">
                  Kochamy to, co robimy. Każda rezerwacja to dla nas możliwość stworzenia niezapomnianego doświadczenia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrophyIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Jakość</h3>
                <p className="text-muted-foreground">
                  Współpracujemy tylko z najlepszymi hotelami, które spełniają nasze wysokie standardy jakości.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Wsparcie</h3>
                <p className="text-muted-foreground">
                  Nasz zespół jest dostępny 24/7, aby pomóc Ci w każdej sytuacji i odpowiedzieć na wszystkie pytania.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-primary/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Dlaczego Grey Bookings?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Ponad 50 hoteli w całej Polsce</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Najlepsze ceny gwarantowane</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Darmowa anulacja rezerwacji</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Natychmiastowe potwierdzenie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Wsparcie klienta 24/7</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
