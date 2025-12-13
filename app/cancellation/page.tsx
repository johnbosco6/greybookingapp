import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Polityka Anulacji</h1>

          <Card className="bg-card border-primary/30 mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Ogólne zasady anulacji</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Grey Bookings oferuje elastyczne opcje anulacji rezerwacji. Polityka anulacji zależy od wybranego
                  hotelu i typu rezerwacji. Poniżej przedstawiamy najczęstsze warianty.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Typy polityki anulacji</h2>

                <div className="space-y-4">
                  <Card className="bg-background border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Darmowa anulacja</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                            Możesz anulować rezerwację bez żadnych opłat do 24-48 godzin przed planowanym zameldowaniem.
                            Pełny zwrot kosztów.
                          </p>
                          <p className="text-sm text-green-500 font-medium">Dostępne w większości hoteli</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-background border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <AlertCircle className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Częściowy zwrot</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                            Anulacja możliwa z opłatą w wysokości 20-50% wartości rezerwacji, w zależności od terminu
                            anulacji.
                          </p>
                          <p className="text-sm text-yellow-500 font-medium">Dotyczy niektórych ofert specjalnych</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-background border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <XCircle className="h-6 w-6 text-red-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Brak zwrotu</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                            Rezerwacje nierefundowalne - brak możliwości zwrotu kosztów po dokonaniu rezerwacji. Zwykle
                            oferowane w najniższych cenach.
                          </p>
                          <p className="text-sm text-red-500 font-medium">Oferty promocyjne z najniższą ceną</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Jak anulować rezerwację</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Zaloguj się na swoje konto Grey Bookings</li>
                  <li>Przejdź do sekcji "Moje rezerwacje"</li>
                  <li>Wybierz rezerwację, którą chcesz anulować</li>
                  <li>Kliknij przycisk "Anuluj rezerwację"</li>
                  <li>Potwierdź anulację</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Możesz również skontaktować się z naszym zespołem wsparcia pod numerem +48 123 456 789 lub emailem
                  kontakt@greybookings.pl
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Zwrot środków</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Zwrot środków następuje w ciągu 5-10 dni roboczych na kartę lub konto, z którego dokonano płatności.
                  Czas przetworzenia może się różnić w zależności od banku.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Zmiana rezerwacji</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jeśli chcesz zmienić daty pobytu zamiast anulować rezerwację, skontaktuj się z nami. W wielu
                  przypadkach możliwa jest bezpłatna zmiana terminu, pod warunkiem dostępności.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Sytuacje wyjątkowe</h2>
                <p className="text-muted-foreground leading-relaxed">
                  W przypadku sytuacji nadzwyczajnych (np. pandemia, klęski żywiołowe), możemy wprowadzić bardziej
                  elastyczne zasady anulacji. Skontaktuj się z nami, aby omówić Twoją sytuację.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Masz pytania dotyczące anulacji? Skontaktuj się z nami:
                  <br />
                  Email: kontakt@greybookings.pl
                  <br />
                  Telefon: +48 123 456 789
                  <br />
                  Dostępni 24/7
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
