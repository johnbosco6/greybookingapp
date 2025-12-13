import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function FAQPage() {
  const faqs = [
    {
      question: "Jak mogę dokonać rezerwacji?",
      answer:
        "Wybierz hotel, który Cię interesuje, kliknij 'Zarezerwuj teraz', wybierz daty pobytu i wypełnij formularz rezerwacji. Po potwierdzeniu otrzymasz email z potwierdzeniem.",
    },
    {
      question: "Czy mogę anulować rezerwację?",
      answer:
        "Tak, większość naszych hoteli oferuje darmową anulację. Szczegóły polityki anulacji znajdziesz na stronie każdego hotelu przed dokonaniem rezerwacji.",
    },
    {
      question: "Kiedy zostanę obciążony za rezerwację?",
      answer:
        "Zależy to od wybranego hotelu. Niektóre hotele pobierają płatność od razu, inne przy zameldowaniu. Informacja o tym jest widoczna podczas procesu rezerwacji.",
    },
    {
      question: "Czy mogę zmienić daty rezerwacji?",
      answer:
        "Tak, możesz zmienić daty rezerwacji kontaktując się z nami lub bezpośrednio z hotelem. Pamiętaj, że mogą obowiązywać dodatkowe opłaty.",
    },
    {
      question: "Czy ceny zawierają podatki?",
      answer: "Tak, wszystkie ceny wyświetlane na naszej stronie zawierają wszystkie podatki i opłaty.",
    },
    {
      question: "Jak mogę skontaktować się z hotelem?",
      answer:
        "Na stronie każdego hotelu znajdziesz przycisk 'Skontaktuj się z hotelem', który pozwoli Ci wysłać wiadomość bezpośrednio do obiektu.",
    },
    {
      question: "Czy mogę dodać specjalne życzenia do rezerwacji?",
      answer:
        "Tak, podczas procesu rezerwacji możesz dodać specjalne życzenia w polu uwag. Hotel dołoży wszelkich starań, aby je spełnić.",
    },
    {
      question: "Co jeśli mam problem podczas pobytu?",
      answer:
        "Nasz zespół wsparcia jest dostępny 24/7. Możesz skontaktować się z nami telefonicznie lub przez email, a my pomożemy rozwiązać każdy problem.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Najczęściej zadawane pytania</h1>
            <p className="text-lg text-muted-foreground">Znajdź odpowiedzi na najczęstsze pytania</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-primary/30 mt-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Nie znalazłeś odpowiedzi?</h2>
              <p className="text-muted-foreground mb-6">
                Skontaktuj się z naszym zespołem wsparcia, a chętnie pomożemy!
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#EDFF23]/90 backdrop-blur-md text-white hover:bg-[#EDFF23] font-semibold px-8 py-3 rounded-lg border border-[#EDFF23]/30 shadow-lg transition-all"
              >
                Skontaktuj się z nami
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
