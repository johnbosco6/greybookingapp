import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Regulamin</h1>

          <Card className="bg-card border-primary/30 mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">1. Postanowienia ogólne</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Niniejszy regulamin określa zasady korzystania z platformy Grey Bookings oraz dokonywania rezerwacji
                  hoteli. Korzystając z naszych usług, akceptujesz warunki określone w tym regulaminie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">2. Rezerwacje</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Rezerwacja jest wiążąca po otrzymaniu potwierdzenia na adres email podany podczas procesu rezerwacji.
                  Użytkownik zobowiązuje się do podania prawdziwych danych osobowych.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ceny hoteli mogą ulec zmianie bez wcześniejszego powiadomienia. Cena obowiązująca w momencie dokonania
                  rezerwacji jest ceną ostateczną.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">3. Płatności</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Akceptujemy płatności kartą kredytową, BLIK oraz przelewem bankowym. Wszystkie transakcje są
                  zabezpieczone i szyfrowane. Szczegóły dotyczące momentu obciążenia karty zależą od polityki wybranego
                  hotelu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">4. Anulacje i zmiany</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Polityka anulacji zależy od wybranego hotelu i jest wyraźnie określona podczas procesu rezerwacji.
                  Zmiany w rezerwacji mogą być możliwe po skontaktowaniu się z naszym zespołem lub bezpośrednio z
                  hotelem.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">5. Odpowiedzialność</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Grey Bookings działa jako pośrednik między klientem a hotelem. Nie ponosimy odpowiedzialności za
                  jakość usług świadczonych przez hotele. W przypadku problemów, prosimy o kontakt z naszym zespołem
                  wsparcia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">6. Ochrona danych osobowych</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Przetwarzamy dane osobowe zgodnie z RODO. Szczegółowe informacje znajdują się w naszej Polityce
                  Prywatności.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">7. Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed">
                  W przypadku pytań dotyczących regulaminu, prosimy o kontakt: kontakt@greybookings.pl
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
