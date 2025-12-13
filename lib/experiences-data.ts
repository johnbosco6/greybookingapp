export interface Experience {
    id: string
    title: string
    city: string
    category: string
    description: string
    image: string
    price: number
    duration: string
    rating: number
    reviewCount: number
    hostName: string
    hostAvatar: string
    maxGuests: number
    included: string[]
}

export const experiences: Experience[] = [
    {
        id: "1",
        title: "Wycieczka po Starym Mieście w Krakowie",
        city: "Kraków",
        category: "Kultura i Historia",
        description: "Odkryj tajemnice średniowiecznego Krakowa z lokalnym przewodnikiem. Zwiedzisz Rynek Główny, Sukiennice i Bazylikę Mariacką.",
        image: "/images/experiences/krakow-tour.svg",
        price: 120,
        duration: "3 godziny",
        rating: 4.9,
        reviewCount: 342,
        hostName: "Anna Kowalska",
        hostAvatar: "/images/hosts/anna.jpg",
        maxGuests: 15,
        included: ["Przewodnik", "Wejście do bazyliki", "Degustacja obwarzanka"],
    },
    {
        id: "2",
        title: "Spływ kajakowy Krutynią",
        city: "Mazury",
        category: "Przyroda i Outdoor",
        description: "Niezapomniana przygoda na najpiękniejszej rzece Mazur. Idealne dla rodzin i grup przyjaciół.",
        image: "/images/experiences/kayaking.svg",
        price: 180,
        duration: "Cały dzień",
        rating: 4.8,
        reviewCount: 156,
        hostName: "Piotr Nowak",
        hostAvatar: "/images/hosts/piotr.jpg",
        maxGuests: 20,
        included: ["Kajak", "Kamizelka", "Instruktaż", "Lunch"],
    },
    {
        id: "3",
        title: "Degustacja pierników w Toruniu",
        city: "Toruń",
        category: "Jedzenie i Napoje",
        description: "Poznaj historię słynnych toruńskich pierników i sam upiecz tradycyjne ciastka.",
        image: "/images/experiences/gingerbread.svg",
        price: 90,
        duration: "2 godziny",
        rating: 4.7,
        reviewCount: 89,
        hostName: "Maria Wiśniewska",
        hostAvatar: "/images/hosts/maria.jpg",
        maxGuests: 12,
        included: ["Warsztaty", "Degustacja", "Przepis", "Własne pierniki"],
    },
    {
        id: "4",
        title: "Wycieczka do Kopalni Soli w Wieliczce",
        city: "Wieliczka",
        category: "Kultura i Historia",
        description: "Zejdź 135 metrów pod ziemię i odkryj podziemne królestwo soli. UNESCO World Heritage.",
        image: "/images/experiences/salt-mine.svg",
        price: 150,
        duration: "3 godziny",
        rating: 4.9,
        reviewCount: 567,
        hostName: "Jan Kowalczyk",
        hostAvatar: "/images/hosts/jan.jpg",
        maxGuests: 30,
        included: ["Bilet wstępu", "Przewodnik", "Transport"],
    },
    {
        id: "5",
        title: "Rejs statkiem po Motławie",
        city: "Gdańsk",
        category: "Przyroda i Outdoor",
        description: "Podziwiaj Gdańsk z perspektywy wody. Rejs z komentarzem przewodnika.",
        image: "/images/experiences/boat-tour.svg",
        price: 80,
        duration: "1.5 godziny",
        rating: 4.6,
        reviewCount: 234,
        hostName: "Tomasz Lewandowski",
        hostAvatar: "/images/hosts/tomasz.jpg",
        maxGuests: 50,
        included: ["Rejs", "Przewodnik", "Napoje"],
    },
    {
        id: "6",
        title: "Trekking na Giewont",
        city: "Zakopane",
        category: "Przyroda i Outdoor",
        description: "Wejdź na jeden z najbardziej rozpoznawalnych szczytów Tatr. Dla doświadczonych turystów.",
        image: "/images/experiences/giewont.svg",
        price: 200,
        duration: "8 godzin",
        rating: 4.8,
        reviewCount: 178,
        hostName: "Marek Górski",
        hostAvatar: "/images/hosts/marek.jpg",
        maxGuests: 10,
        included: ["Przewodnik górski", "Ubezpieczenie", "Przekąski"],
    },
    {
        id: "7",
        title: "Warsztaty garncarskie",
        city: "Kazimierz Dolny",
        category: "Sztuka i Rękodzieło",
        description: "Naucz się tradycyjnego garncarstwa i stwórz własne dzieło na kole garncarskim.",
        image: "/images/experiences/pottery.svg",
        price: 110,
        duration: "2.5 godziny",
        rating: 4.7,
        reviewCount: 92,
        hostName: "Ewa Ceramiczna",
        hostAvatar: "/images/hosts/ewa.jpg",
        maxGuests: 8,
        included: ["Materiały", "Wypalenie", "Kawa i ciastka"],
    },
    {
        id: "8",
        title: "Nocny spacer po Warszawie",
        city: "Warszawa",
        category: "Kultura i Historia",
        description: "Zobacz Warszawę w magicznym nocnym oświetleniu. Trasa obejmuje najważniejsze zabytki.",
        image: "/images/experiences/warsaw-night.svg",
        price: 70,
        duration: "2 godziny",
        rating: 4.5,
        reviewCount: 145,
        hostName: "Katarzyna Nowacka",
        hostAvatar: "/images/hosts/katarzyna.jpg",
        maxGuests: 20,
        included: ["Przewodnik", "Mapa", "Zdjęcia"],
    },
]

export const experienceCategories = [
    "Wszystkie",
    "Kultura i Historia",
    "Przyroda i Outdoor",
    "Jedzenie i Napoje",
    "Sztuka i Rękodzieło",
    "Sport i Fitness",
    "Wellness",
]

export function filterExperiences(category: string, city?: string): Experience[] {
    let filtered = experiences

    if (category !== "Wszystkie") {
        filtered = filtered.filter((exp) => exp.category === category)
    }

    if (city) {
        filtered = filtered.filter((exp) => exp.city === city)
    }

    return filtered
}
