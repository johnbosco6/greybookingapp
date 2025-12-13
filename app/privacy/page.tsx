import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Polityka Prywatności</h1>

          <Card className="bg-card border-primary/30 mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">1. Informacje ogólne</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Grey Bookings szanuje prywatność swoich użytkowników i zobowiązuje się do ochrony danych osobowych
                  zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
                  (RODO).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">2. Administrator danych</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Administratorem danych osobowych jest Grey Bookings z siedzibą w Warszawie, ul. Przykładowa 123,
                  00-001 Warszawa. Kontakt: kontakt@greybookings.pl
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">3. Jakie dane zbieramy</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">Zbieramy następujące dane osobowe:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Imię i nazwisko</li>
                  <li>Adres email</li>
                  <li>Numer telefonu</li>
                  <li>Dane dotyczące rezerwacji (daty pobytu, wybrane hotele)</li>
                  <li>Dane płatności (przetwarzane przez bezpiecznych dostawców płatności)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">4. Cel przetwarzania danych</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Przetwarzamy dane osobowe w następujących celach:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Realizacja rezerwacji hotelowych</li>
                  <li>Komunikacja z klientami</li>
                  <li>Obsługa płatności</li>
                  <li>Marketing (za zgodą użytkownika)</li>
                  <li>Wypełnienie obowiązków prawnych</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">5. Udostępnianie danych</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dane osobowe mogą być udostępniane hotelom, z którymi dokonujesz rezerwacji, oraz dostawcom usług
                  płatniczych. Nie sprzedajemy danych osobowych osobom trzecim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">6. Prawa użytkownika</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">Masz prawo do:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Dostępu do swoich danych osobowych</li>
                  <li>Sprostowania danych</li>
                  <li>Usunięcia danych</li>
                  <li>Ograniczenia przetwarzania</li>
                  <li>Przenoszenia danych</li>
                  <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">7. Bezpieczeństwo danych</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed
                  nieuprawnionym dostępem, utratą lub zniszczeniem.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">8. Pliki cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nasza strona wykorzystuje pliki cookies w celu poprawy funkcjonalności i analizy ruchu. Możesz
                  zarządzać ustawieniami cookies w swojej przeglądarce.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">9. Zmiany w polityce prywatności</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. O wszelkich zmianach
                  poinformujemy na tej stronie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">10. Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed">
                  W sprawach dotyczących ochrony danych osobowych prosimy o kontakt: kontakt@greybookings.pl
                </p>
              </section>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground text-center">Ostatnia aktualizacja: Styczeń 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
