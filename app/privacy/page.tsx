"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold text-foreground mb-8">Polityka Prywatności</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Postanowienia ogólne</h2>
              <p>
                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu Grey Bookings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Administrator Danych</h2>
              <p>
                Administratorem danych osobowych jest Grey Bookings Sp. z o.o. z siedzibą w Warszawie, przy ul. Złotej 44.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Cel przetwarzania danych</h2>
              <p>
                Dane osobowe przetwarzane są w celu:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Realizacji procesu rezerwacji usług hotelowych</li>
                <li>Kontaktu z Użytkownikiem</li>
                <li>Przesyłania informacji marketingowych (za zgodą Użytkownika)</li>
                <li>Zapewnienia bezpieczeństwa świadczonych usług</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Prawa Użytkownika</h2>
              <p>
                Użytkownik ma prawo do wglądu w swoje dane, ich poprawiania, żądania ich usunięcia oraz ograniczenia przetwarzania.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Pliki Cookies</h2>
              <p>
                Serwis używa plików cookies w celu zapewnienia poprawnego działania strony oraz w celach statystycznych i marketingowych.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
