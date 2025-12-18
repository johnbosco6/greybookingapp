export interface Destination {
    id: string
    name: string
    region: string
    description: string
    image: string
    propertyCount: number
    averagePrice: number
    popularActivities: string[]
    bestSeason: string
    coordinates: {
        lat: number
        lng: number
    }
}

export const polandDestinations: Destination[] = [
    {
        id: "warszawa",
        name: "Warszawa",
        region: "Mazowieckie",
        description: "Stolica Polski, pełna historii, kultury i nowoczesnej architektury",
        image: "/images/destinations/warsaw.jpg",
        propertyCount: 450,
        averagePrice: 420,
        popularActivities: ["Stare Miasto", "Pałac Kultury", "Łazienki Królewskie", "Muzea"],
        bestSeason: "Maj - Wrzesień",
        coordinates: { lat: 52.2297, lng: 21.0122 },
    },
    {
        id: "krakow",
        name: "Kraków",
        region: "Małopolskie",
        description: "Historyczna stolica Polski z przepięknym Rynkiem Głównym",
        image: "/images/destinations/krakow.jpg",
        propertyCount: 520,
        averagePrice: 480,
        popularActivities: ["Rynek Główny", "Wawel", "Kazimierz", "Kopalnia Soli"],
        bestSeason: "Kwiecień - Październik",
        coordinates: { lat: 50.0647, lng: 19.9450 },
    },
    {
        id: "gdansk",
        name: "Gdańsk",
        region: "Pomorskie",
        description: "Perła Bałtyku z bogatą historią morską",
        image: "/images/destinations/gdansk.jpg",
        propertyCount: 380,
        averagePrice: 450,
        popularActivities: ["Długi Targ", "Żuraw", "Plaża w Sopocie", "Molo"],
        bestSeason: "Czerwiec - Sierpień",
        coordinates: { lat: 54.3520, lng: 18.6466 },
    },
    {
        id: "zakopane",
        name: "Zakopane",
        region: "Małopolskie",
        description: "Zimowa stolica Polski u podnóża Tatr",
        image: "/images/destinations/zakopane.jpg",
        propertyCount: 650,
        averagePrice: 380,
        popularActivities: ["Narciarstwo", "Gubałówka", "Krupówki", "Morskie Oko"],
        bestSeason: "Grudzień - Marzec, Lipiec - Sierpień",
        coordinates: { lat: 49.2992, lng: 19.9496 },
    },
    {
        id: "wroclaw",
        name: "Wrocław",
        region: "Dolnośląskie",
        description: "Miasto krasnali i pięknych mostów",
        image: "/images/destinations/wroclaw.jpg",
        propertyCount: 420,
        averagePrice: 390,
        popularActivities: ["Rynek", "Ostrów Tumski", "Krasnale", "Panorama Racławicka"],
        bestSeason: "Maj - Wrzesień",
        coordinates: { lat: 51.1079, lng: 17.0385 },
    },
    {
        id: "poznan",
        name: "Poznań",
        region: "Wielkopolskie",
        description: "Kolebka państwa polskiego",
        image: "/images/destinations/poznan.jpg",
        propertyCount: 340,
        averagePrice: 360,
        popularActivities: ["Stary Rynek", "Ostrów Tumski", "Cytadela", "Jezioro Maltańskie"],
        bestSeason: "Maj - Wrzesień",
        coordinates: { lat: 52.4064, lng: 16.9252 },
    },
    {
        id: "mazury",
        name: "Mazury",
        region: "Warmińsko-Mazurskie",
        description: "Kraina tysiąca jezior",
        image: "/images/destinations/mazury.svg",
        propertyCount: 280,
        averagePrice: 320,
        popularActivities: ["Żeglarstwo", "Kajaki", "Rowerem", "Wędkarstwo"],
        bestSeason: "Czerwiec - Sierpień",
        coordinates: { lat: 53.8000, lng: 21.5000 },
    },
    {
        id: "bieszczady",
        name: "Bieszczady",
        region: "Podkarpackie",
        description: "Dzikie góry i niepowtarzalne połoniny",
        image: "/images/popular-3.png",
        propertyCount: 180,
        averagePrice: 280,
        popularActivities: ["Trekking", "Połoniny", "Obserwacja zwierząt", "Jezioro Solińskie"],
        bestSeason: "Maj - Październik",
        coordinates: { lat: 49.2000, lng: 22.5000 },
    },
    {
        id: "sopot",
        name: "Sopot",
        region: "Pomorskie",
        description: "Nadmorski kurort z najdłuższym drewnianym molo w Europie",
        image: "/images/destinations/sopot.svg",
        propertyCount: 220,
        averagePrice: 520,
        popularActivities: ["Plaża", "Molo", "Monte Cassino", "Opera Leśna"],
        bestSeason: "Czerwiec - Sierpień",
        coordinates: { lat: 54.4419, lng: 18.5602 },
    },
    {
        id: "lublin",
        name: "Lublin",
        region: "Lubelskie",
        description: "Brama do Wschodu z pięknym Starym Miastem",
        image: "/images/popular-3.png",
        propertyCount: 160,
        averagePrice: 300,
        popularActivities: ["Stare Miasto", "Zamek", "Majdanek", "Festiwale"],
        bestSeason: "Maj - Wrzesień",
        coordinates: { lat: 51.2465, lng: 22.5684 },
    },
    {
        id: "karpacz",
        name: "Karpacz",
        region: "Dolnośląskie",
        description: "Malownicze miasto w Karkonoszach u stóp Śnieżki",
        image: "/images/popular-4.jpg",
        propertyCount: 310,
        averagePrice: 350,
        popularActivities: ["Śnieżka", "Świątynia Wang", "Narty", "Wycieczki górskie"],
        bestSeason: "Zima, Lato",
        coordinates: { lat: 50.7766, lng: 15.7565 },
    },
    {
        id: "kolobrzeg",
        name: "Kołobrzeg",
        region: "Zachodniopomorskie",
        description: "Największe uzdrowisko nad polskim morzem",
        image: "/placeholder.svg?height=600&width=800&text=Kołobrzeg",
        propertyCount: 420,
        averagePrice: 460,
        popularActivities: ["Plaża", "Latarnia Morska", "Molo", "Uzdrowisko"],
        bestSeason: "Lato",
        coordinates: { lat: 54.1759, lng: 15.5833 },
    },
    {
        id: "torun",
        name: "Toruń",
        region: "Kujawsko-Pomorskie",
        description: "Miasto Kopernika słynące z pierników i gotyku",
        image: "/placeholder.svg?height=600&width=800&text=Toruń",
        propertyCount: 290,
        averagePrice: 340,
        popularActivities: ["Stare Miasto", "Muzeum Piernika", "Planetarium", "Dom Kopernika"],
        bestSeason: "Wiosna - Jesień",
        coordinates: { lat: 53.0138, lng: 18.5984 },
    },
]

export const seasonalRecommendations = {
    winter: ["zakopane", "karpacz", "bieszczady"],
    spring: ["krakow", "warszawa", "wroclaw", "torun"],
    summer: ["gdansk", "sopot", "kolobrzeg", "mazury"],
    autumn: ["poznan", "lublin", "bieszczady", "torun"],
}

export function getCurrentSeason(): keyof typeof seasonalRecommendations {
    const month = new Date().getMonth() + 1
    if (month >= 12 || month <= 2) return "winter"
    if (month >= 3 && month <= 5) return "spring"
    if (month >= 6 && month <= 8) return "summer"
    return "autumn"
}

export function getSeasonalDestinations(): Destination[] {
    const season = getCurrentSeason()
    const recommendedIds = seasonalRecommendations[season]
    return polandDestinations.filter((dest) => recommendedIds.includes(dest.id))
}
