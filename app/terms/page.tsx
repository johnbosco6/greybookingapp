"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold text-foreground mb-8">Regulamin Serwisu</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Definicje</h2>
              <p>
                Serwis - platforma rezerwacyjna Grey Bookings dostępna pod adresem greybookings.pl.<br />
                Użytkownik - każda osoba fizyczna lub prawna korzystająca z Serwisu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Ogólne warunki korzystania</h2>
              <p>
                Korzystanie z Serwisu jest dobrowolne i bezpłatne. Użytkownik zobowiązany jest do korzystania z Serwisu w sposób zgodny z prawem i dobrymi obyczajami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Rezerwacje</h2>
              <p>
                Rezerwacji usług hotelowych dokonuje się poprzez formularz dostępny w Serwisie. Potwierdzenie rezerwacji następuje drogą elektroniczną.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Płatności</h2>
              <p>
                Serwis umożliwia dokonywanie płatności online za pośrednictwem zintegrowanych operatorów płatności.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Reklamacje</h2>
              <p>
                Wszelkie reklamacje dotyczące działania Serwisu można zgłaszać na adres email: kontakt@greybookings.pl.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
