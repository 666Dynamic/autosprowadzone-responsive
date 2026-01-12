export interface Post {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    content?: string;
}

export const posts: Post[] = [
    {
        title: "BCA Europe – Największy wybór aut w UE",
        excerpt: "Ponad 1.3 mln pojazdów rocznie. Dowiedz się, dlaczego system EuroShop to rewolucja w zakupach B2B.",
        date: "11.01.2026",
        slug: "bca-europe-przewodnik",
        content: `
            <p>BCA Europe to niekwestionowany lider na rynku aukcji samochodów używanych w Europie. Obsługując ponad 1.3 miliona pojazdów rocznie, platforma ta stała się kluczowym punktem dla profesjonalnych dealerów i importerów.</p>
            <h3>Dlaczego BCA?</h3>
            <ul>
                <li><strong>Ogromna skala:</strong> Dostęp do pojazdów z całej Europy w jednym miejscu.</li>
                <li><strong>EuroShop:</strong> System, który pozwala na łatwe przeglądanie i licytowanie ofert z różnych krajów bez konieczności przełączania się między lokalnymi stronami.</li>
                <li><strong>Transparentność:</strong> Każdy pojazd posiada szczegółowy raport techniczny i dokumentację zdjęciową.</li>
            </ul>
            <p>Dla naszych klientów, BCA to gwarancja stałego dopływu świeżych ofert od sprawdzonych dostawców flotowych i leasingowych.</p>
        `
    },
    {
        title: "AUTO1.com – Cyfrowe aukcje bez tajemnic",
        excerpt: "Jak licytować wśród 30 000 nowych ofert dziennie? Sprawdzamy model biznesowy największego gracza online.",
        date: "10.01.2026",
        slug: "auto1-jak-licytowac",
        content: `
            <p>AUTO1.com zrewolucjonizowało sposób, w jaki handlarze kupują i sprzedają samochody. Jako największa platforma B2B w Europie, oferuje niespotykaną dotąd dynamikę i liczbę ofert.</p>
            <h3>Kluczowe aspekty AUTO1:</h3>
            <ul>
                <li><strong>Dynamika:</strong> Codziennie pojawia się tysiące nowych ofert, co wymaga szybkiego podejmowania decyzji.</li>
                <li><strong>Logistyka:</strong> AUTO1 posiada własną sieć transportową, co znacznie upraszcza sprowadzanie aut do Polski.</li>
                <li><strong>Aplikacja Mobilna:</strong> Możliwość licytowania z dowolnego miejsca, co jest kluczowe w dzisiejszym tempie pracy.</li>
            </ul>
        `
    },
    {
        title: "Opłaty Aukcyjne (Aufgeld) – Ile naprawdę płacisz?",
        excerpt: " Szczegółowe zestawienie kosztów dodatkowych: prowizje B2B, opłaty eksportowe i przygotowanie dokumentów.",
        date: "08.01.2026",
        slug: "oplaty-aukcyjne-wyjasnienie",
        content: `
            <p>Zrozumienie struktury opłat na aukcjach zagranicznych jest kluczowe dla prawidłowego wyliczenia opłacalności zakupu. Cena, którą widzisz na ekranie, to tylko początek.</p>
            <h3>Na co idą Twoje pieniądze?</h3>
            <ul>
                <li><strong>Buyer Fee (Aufgeld):</strong> Prowizja domu aukcyjnego, zazwyczaj zależna od ceny pojazdu.</li>
                <li><strong>Export Fee:</strong> Opłata za przygotowanie dokumentów do wywozu z kraju zakupu.</li>
                <li><strong>Transport:</strong> Koszt fizycznego sprowadzenia auta pod Twój dom lub do naszego biura.</li>
            </ul>
        `
    },
    {
        title: "Zustandsbericht – Czy można wierzyć raportom?",
        excerpt: "Analiza standardów rzeczoznawców DEKRA i TÜV SÜD. Na co zwrócić uwagę w opisie uszkodzeń (Delle/Kratzer).",
        date: "05.01.2026",
        slug: "raporty-rzeczoznawcow-standardy",
        content: `
            <p>Raport stanu technicznego (Zustandsbericht) to Biblia dla kupującego online. Standardy rzeczoznawców takich jak DEKRA czy TÜV SÜD są bardzo wysokie, ale trzeba umieć je czytać.</p>
            <h3>Słowniczek rzeczoznawcy:</h3>
            <ul>
                <li><strong>Delle:</strong> Małe wgniecenie, zazwyczaj bez uszkodzenia lakieru.</li>
                <li><strong>Kratzer:</strong> Zarysowanie – ważne czy głębokie, czy tylko powierzchowne.</li>
                <li><strong>Nachlackiert:</strong> Element był powtórnie lakierowany.</li>
            </ul>
        `
    },
    {
        title: "Akcyza 2026 - co się zmieniło?",
        excerpt: "Analiza aktualnych stawek akcyzowych dla silników powyżej 2.0L oraz aut hybrydowych.",
        date: "03.01.2026",
        slug: "akcyza-2026-stawki",
        content: `
            <p>Nowy rok przyniósł pewne korekty w systemie podatkowym dotyczącym importu pojazdów. Skupiamy się na tym, jak optymalizować koszty przy autach o większych pojemnościach.</p>
            <h3>Kluczowe stawki:</h3>
            <ul>
                <li><strong>Silniki do 2.0L:</strong> 3.1% wartości pojazdu.</li>
                <li><strong>Silniki powyżej 2.0L:</strong> 18.6% – tutaj najwięcej można zyskać na hybrydach typu Plug-in.</li>
                <li><strong>Auta Elektryczne:</strong> Zwolnione z akcyzy.</li>
            </ul>
        `
    }
];
