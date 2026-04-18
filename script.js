/* ============================================================
   Jack Matuszewski — Personal Brand
   Theme toggle · Language toggle (EN/PL) · Scroll reveal
   ============================================================ */

(() => {
  "use strict";

  /* ---------- Translations ---------- */
  const i18n = {
    en: {
      "meta.title": "Jack Matuszewski — Performance Marketing Strategist",
      "meta.description": "Jack Matuszewski — Performance marketing strategist and board advisor. Profitable growth built on incrementality, POAS, and payback.",

      "nav.what": "What",
      "nav.how": "How",
      "nav.work": "Work",
      "nav.approach": "Approach",
      "nav.contact": "Contact",

      "hero.eyebrow": '<span class="idx">01</span> / Jack Matuszewski — Operator, Board Advisor',
      "hero.title": 'Most brands scale spend.<br />I scale the <em>system</em> that makes it profitable.',
      "hero.lede": "Fifteen years inside DTC growth — Meta, Google, programmatic, and the measurement stack underneath them. The work is unglamorous: margin-weighted bidding, cohort retention curves, incrementality testing. What a CFO actually needs: new customer economics that pay back inside your runway, and scaling decisions that show up in the P&amp;L, not just the dashboard.",
      "hero.meta": 'Warsaw <span aria-hidden="true">·</span> Operating since 2015 <span aria-hidden="true">·</span> Next opening Q3 2026',

      "what.eyebrow": '<span class="idx">02</span> / What I Do',
      "what.title": "What the work looks like.",
      "what.card1.title": "Fix the Measurement Layer",
      "what.card1.body": "Most teams make growth decisions on data that was never built to answer business questions. Pixel attribution, platform reports, agency dashboards — useful for running campaigns, useless for running a P&amp;L. I rebuild tracking, attribution, and the data pipeline underneath so the number the CEO sees matches the number in the bank.",
      "what.card2.title": "Rebuild Paid Around Business Metrics",
      "what.card2.body": "ROAS is a reporting metric. Profit is a business outcome. I move the bidding surface from platform-reported revenue to nCAC, POAS, and payback period. The platforms keep working the same way. What changes is what they're told to optimize for — and which SKUs, cohorts, and channels survive the next quarter.",
      "what.card3.title": "Scale Without Breaking Unit Economics",
      "what.card3.body": "New customer volume is easy to buy. New customer volume that pays back inside your runway is harder. I separate the two — incrementality by channel, margin by SKU, retention by cohort — and scale only where those three agree. Growth that doesn't compound is just a burn rate with better PR.",
      "what.card4.title": "Board &amp; Advisory",
      "what.card4.body": "Two board seats, three advisory engagements. The job is holding growth to the same standard as finance — same rigor, same cadence, same willingness to say no to the CMO. One day a month, quarterly packs, zero pitch decks.",

      "how.eyebrow": '<span class="idx">03</span> / How I Think',
      "how.title": "What I've stopped arguing about.",
      "how.lede": "Most marketing decisions are made on data that was never meant to answer business questions. Five principles I've defended against real P&amp;Ls — and against the agencies that push back on them.",
      "how.p1.title": "Incrementality over attribution.",
      "how.p1.body": "If a channel doesn't generate incremental revenue, it's noise — regardless of what the platform reports. Attribution tells you which touchpoint got credit. Incrementality tells you which spend you could kill tomorrow without losing revenue. In my experience the gap between those two numbers is 30 to 50 percent. On brand search and retargeting, routinely past 70. Geo-lift, PSA tests, CUPED on onsite data — pick one and run it quarterly. The first cycle pays for the engagement.",
      "how.p2.title": "Business metrics over platform metrics.",
      "how.p2.body": "ROAS is a reporting metric. Profit is a business outcome. They are not the same number and they rarely move together. I optimize to POAS, nCAC, and payback — not to whatever the platform happens to export. The mechanic is unglamorous: pull COGS and fulfilment from the ERP, compute net contribution per line item, push it into the conversion API as the value parameter. Two weeks of engineering. Not a strategy.",
      "how.p3.title": "Cohorts over averages.",
      "how.p3.body": "Blended performance is an average of averages. It hides more than it reveals. Paid cohorts almost always retain worse than organic — often 30 to 40 percent worse by month twelve. \"LTV to CAC of three\" is a number without a denominator until you say what horizon it's measured over and which acquisition source produced it. I build retention decay by cohort month and channel, then compute payback against the twelve-month curve — not the theoretical lifetime the spreadsheet suggests.",
      "how.p4.title": "Demand over hacks.",
      "how.p4.body": "You can't scale what doesn't exist. Most \"growth hacking\" is harvesting demand that was already there and claiming credit for the conversion. Real scaling means knowing which demand is latent, which is declining, and which you'll have to build. Search volume, category growth, share of voice, purchase frequency by cohort — those tell you whether the ceiling is actually where you think it is. Spending harder against a shrinking pool isn't a strategy. It's a burn rate in disguise.",
      "how.p5.title": "Systems over tactics.",
      "how.p5.body": "Campaigns don't scale businesses. Systems do. A tactic is something that worked once and gets retired. A system is a measurement stack, a decision cadence, and a reallocation rule that keeps working after I leave. I don't hand over playbooks of what to do. I hand over rules for how to decide — which is the only thing that compounds.",

      "work.eyebrow": '<span class="idx">04</span> / Selected Work',
      "work.title": "A few worth showing.",
      "work.lede": "Names under NDA. Numbers are audited — annualized where needed, measured against holdout where the design allowed it. Where it didn't, I say so.",

      "work.case1.kicker": "DTC Footwear · $60M revenue · US",
      "work.case1.title": "Rebuilt acquisition around new customer economics, not blended ROAS.",
      "work.case1.role": "Fractional Head of Growth · 9 months",
      "work.case1.summary": "Blended ROAS looked fine. New customer acquisition had quietly flatlined for four quarters while the platform kept serving ads to existing customers who would have bought anyway. We separated new-customer conversions at the pixel layer, switched bidding to nCAC and first-order POAS, and rebuilt prospecting creative against product-level contribution margin. Reported ROAS dropped. Profit didn't. That's the distinction the board eventually cared about.",
      "work.case1.m1.label": "New customer volume",
      "work.case1.m1.delta": "YoY, flat media spend",
      "work.case1.m2.label": "nCAC",
      "work.case1.m2.delta": "Blended, all channels",
      "work.case1.m3.label": "First-order POAS",
      "work.case1.m3.delta": "From 0.9x",
      "work.case1.m4.label": "Blended ROAS",
      "work.case1.m4.delta": "Intentionally",

      "work.case2.kicker": "DTC Home Goods · €25M revenue · 6 markets",
      "work.case2.title": "Three reports, three truths. We replaced them with one.",
      "work.case2.role": "Strategy Lead · 6 months",
      "work.case2.summary": "Platform reports said one number. The warehouse said another. Finance said a third. Every weekly meeting started with reconciliation and ended without a decision. We built a cohort-based LTV forecasting layer on top of the warehouse, calibrated against twelve months of closed finance data, and made it the only source the board used. Decisions started getting made in the first half of the meeting.",
      "work.case2.m1.label": "Forecast accuracy",
      "work.case2.m1.delta": "90-day horizon",
      "work.case2.m2.label": "Reporting sources",
      "work.case2.m2.delta": "Board pack",
      "work.case2.m3.label": "Time to decision",
      "work.case2.m3.delta": "Weekly growth meeting",
      "work.case2.m4.label": "Planning cadence",
      "work.case2.m4.value": "Q → Mo",
      "work.case2.m4.delta": "With confidence",

      "work.case3.kicker": "DTC Apparel · €80M revenue · 9 markets",
      "work.case3.title": "Moved creative from channel-led to demand-led testing.",
      "work.case3.role": "Advisor · 8 months",
      "work.case3.summary": "Forty-plus creative assets a month, organized by platform. High volume, low signal, no learning carrying across channels. We restructured testing around demand themes instead: audience × angle × product, as a three-way matrix with enough power per cell to actually read the result. Winner rate roughly doubled. More importantly, the team could explain why a winner won — which is the only way the knowledge compounds.",
      "work.case3.m1.label": "Winner rate",
      "work.case3.m1.delta": "Per test cycle",
      "work.case3.m2.label": "Cost per new winner",
      "work.case3.m2.delta": "Production + media",
      "work.case3.m3.label": "CPA on top concepts",
      "work.case3.m3.delta": "Incrementality-adjusted",
      "work.case3.m4.label": "Cross-channel carry",
      "work.case3.m4.delta": "Teams, not silos",

      "approach.eyebrow": '<span class="idx">05</span> / Approach',
      "approach.title": "Not the ads guy. The one behind him.",
      "approach.lede": "I work at the intersection of marketing, data, and business strategy. The deliverable isn't a campaign plan. It's a decision system your team runs after I'm gone.",
      "approach.ph1.title": "Audit how growth is actually measured",
      "approach.ph1.body": "Two weeks in the data. Account access, margin by SKU, the gap between what the platforms say and what finance actually books. End of week two I either have a thesis worth acting on — a specific constraint costing you money — or I tell you there isn't one and we both move on. That happens about one time in six. Fee is fixed either way.",
      "approach.ph1.meta": "Fixed fee · 2 weeks",
      "approach.ph2.title": "Design the decision system",
      "approach.ph2.body": "Three to four weeks. Written target economics: POAS floor per channel, payback horizon, a six-month test calendar, what we're killing and why. Signed by CEO and CFO — not just the CMO. Most \"growth strategies\" are activity plans. This one is a rule: when X happens, we do Y. Finance signs it because it maps to the P&amp;L they're accountable for.",
      "approach.ph2.meta": "Fixed fee · 3–4 weeks",
      "approach.ph3.title": "Implement alongside your team",
      "approach.ph3.body": "Hands in the accounts, not adjacent to them. Bidding restructured, conversion API rebuilt with margin data, cohort LTV layer calibrated, weekly reporting mapped to board metrics. Always done with your team, never around them. I don't build systems your team can't operate — that's how good work quietly dies the quarter after I leave.",
      "approach.ph3.meta": "Retainer · 3–9 months",
      "approach.ph4.title": "Hand it over and step back",
      "approach.ph4.body": "Playbook written, internal owner trained, quarterly check-in set. My goal is to make the retainer unnecessary. About half my clients keep me on advisory afterward. The other half don't need to. Both outcomes are fine. What I won't do is stay on to justify a retainer.",
      "approach.ph4.meta": "Advisory · ongoing or not",
      "approach.rule1": '<span class="approach__bullet">—</span> No retainers without a thesis I\'d bet my own money on.',
      "approach.rule2": '<span class="approach__bullet">—</span> No engagements below €500k annual media. Nothing to optimize.',
      "approach.rule3": '<span class="approach__bullet">—</span> No agency kickbacks, referral fees, or rev-share with platforms.',
      "approach.rule4": '<span class="approach__bullet">—</span> Direct communication, fast iteration, decisions backed by data — not opinions.',

      "contact.eyebrow": '<span class="idx">06</span> / Contact',
      "contact.title": "Most brands don't have a scaling problem.<br />They have a measurement problem disguised as one.",
      "contact.note": "Best fit: DTC brands past early traction, teams where measurement and profitability numbers don't agree, and situations where spending harder has stopped improving the outcome. Email is best. Tell me what's broken and what you've already tried. Bring the P&amp;L, or a rough approximation of it.",
      "contact.email.label": "Email",
      "contact.linkedin.label": "LinkedIn",
      "contact.avail.label": "Next opening",
      "contact.avail.value": "Q3 2026 · 2 slots",

      "footer.text": "© 2026 Jack Matuszewski · Warsaw"
    },

    pl: {
      "meta.title": "Jack Matuszewski — Strateg Performance Marketingu",
      "meta.description": "Jack Matuszewski — strateg performance marketingu i doradca zarządu. Rentowny wzrost oparty na incrementality, POAS i okresie zwrotu.",

      "nav.what": "Zakres",
      "nav.how": "Myślenie",
      "nav.work": "Projekty",
      "nav.approach": "Metoda",
      "nav.contact": "Kontakt",

      "hero.eyebrow": '<span class="idx">01</span> / Jack Matuszewski — Operator, doradca zarządu',
      "hero.title": 'Większość marek skaluje budżet.<br />Ja skaluję <em>system</em>, który zamienia go w zysk.',
      "hero.lede": "Piętnaście lat wewnątrz kont DTC — Meta, Google, programmatic i warstwa pomiarowa pod spodem. Praca jest mało efektowna: optymalizacja pod marżę, krzywe retencji kohort, testy incrementality. To, czego CFO naprawdę potrzebuje: ekonomia nowych klientów zwracająca się w ramach runway'u, i decyzje skalujące widoczne w P&amp;L — nie tylko w dashboardzie.",
      "hero.meta": 'Warszawa <span aria-hidden="true">·</span> W grze od 2015 <span aria-hidden="true">·</span> Najbliższy slot Q3 2026',

      "what.eyebrow": '<span class="idx">02</span> / Czym się zajmuję',
      "what.title": "Jak wygląda praca w praktyce.",
      "what.card1.title": "Naprawa warstwy pomiarowej",
      "what.card1.body": "Większość zespołów podejmuje decyzje wzrostowe na danych, które nigdy nie miały odpowiadać na pytania biznesowe. Atrybucja z piksela, raporty z platform, dashboardy od agencji — przydatne do prowadzenia kampanii, bezużyteczne do prowadzenia P&amp;L. Przebudowuję tracking, atrybucję i pipeline danych pod spodem tak, żeby liczba, którą widzi CEO, zgadzała się z tą w banku.",
      "what.card2.title": "Paid przebudowany pod metryki biznesowe",
      "what.card2.body": "ROAS to metryka raportowa. Zysk to wynik biznesowy. Przenoszę licytację z przychodu raportowanego przez platformę na nCAC, POAS i okres zwrotu. Platformy działają tak samo. Zmienia się to, pod co są optymalizowane — i które SKU, kohorty i kanały przetrwają kolejny kwartał.",
      "what.card3.title": "Skalowanie bez psucia unit economics",
      "what.card3.body": "Wolumen nowych klientów łatwo kupić. Wolumen, który zwraca się w ramach runway'u — dużo trudniej. Rozdzielam te dwie rzeczy — incrementality per kanał, marża per SKU, retencja per kohorta — i skaluję tylko tam, gdzie wszystkie trzy się zgadzają. Wzrost, który się nie kumuluje, to burn rate z lepszym PR-em.",
      "what.card4.title": "Zarząd i doradztwo",
      "what.card4.body": "Dwa miejsca w zarządach, trzy role doradcze. Rola polega na trzymaniu wzrostu w tym samym reżimie co finanse — ta sama rygorystyczność, ta sama kadencja, ta sama gotowość, żeby powiedzieć CMO „nie\". Jeden dzień w miesiącu, kwartalne pakiety, zero pitch decków.",

      "how.eyebrow": '<span class="idx">03</span> / Jak myślę',
      "how.title": "O czym przestałem dyskutować.",
      "how.lede": "Większość decyzji marketingowych zapada na danych, które nigdy nie miały odpowiadać na pytania biznesowe. Pięć zasad, których broniłem na realnych P&amp;L — i wbrew agencjom, które je kontestują.",
      "how.p1.title": "Incrementality ponad atrybucję.",
      "how.p1.body": "Jeśli kanał nie generuje przychodu inkrementalnego, jest szumem — niezależnie od tego, co pokazuje platforma. Atrybucja mówi, który touchpoint dostał kredyt. Incrementality mówi, które wydatki mógłbyś wyłączyć jutro bez utraty przychodu. Z mojego doświadczenia różnica między tymi liczbami to 30–50 procent. Na brand search i retargetingu rutynowo ponad 70. Geo-lift, testy PSA, CUPED na danych onsite — wybierz jedno i puść co kwartał. Pierwsza iteracja spłaca cały projekt.",
      "how.p2.title": "Metryki biznesowe ponad metryki platformowe.",
      "how.p2.body": "ROAS to metryka raportowa. Zysk to wynik biznesowy. To nie są te same liczby i rzadko poruszają się razem. Optymalizuję pod POAS, nCAC i okres zwrotu — nie pod to, co akurat eksportuje platforma. Mechanika jest mało efektowna: wyciągasz COGS i fulfilment z ERP, liczysz kontrybucję netto per pozycja, wrzucasz to do conversion API jako wartość. Dwa tygodnie pracy inżyniera. Nie strategia.",
      "how.p3.title": "Kohorty ponad średnie.",
      "how.p3.body": "Blended performance to średnia ze średnich. Ukrywa więcej, niż pokazuje. Kohorty z paid prawie zawsze retencjonują gorzej niż organic — często o 30–40 procent gorzej po dwunastym miesiącu. „LTV do CAC 3\" to liczba bez mianownika, dopóki nie powiesz, na jakim horyzoncie jest mierzona i z jakiego źródła pochodzą klienci. Buduję krzywą retencji per kohorta miesięczna i kanał, a zwrot liczę na krzywej dwunastomiesięcznej — nie na teoretycznym lifetimie, który sugeruje arkusz.",
      "how.p4.title": "Popyt ponad hacki.",
      "how.p4.body": "Nie da się skalować tego, czego nie ma. Większość „growth hackingu\" to zbieranie popytu, który już tam był, i przypisywanie sobie konwersji. Prawdziwe skalowanie to wiedza: który popyt jest utajony, który się kurczy, a który trzeba dopiero zbudować. Wolumen wyszukiwań, wzrost kategorii, share of voice, częstotliwość zakupów per kohorta — to mówi ci, czy sufit jest tam, gdzie myślisz. Większe wydawanie przeciwko kurczącemu się rynkowi to nie strategia. To burn rate w przebraniu.",
      "how.p5.title": "Systemy ponad taktyki.",
      "how.p5.body": "Kampanie nie skalują biznesów. Skalują je systemy. Taktyka to coś, co raz zadziałało i idzie do lamusa. System to warstwa pomiarowa, kadencja decyzyjna i reguła realokacji, które działają, kiedy mnie już nie ma. Nie zostawiam playbooków, co robić. Zostawiam reguły, jak decydować — bo tylko to się kumuluje.",

      "work.eyebrow": '<span class="idx">04</span> / Wybrane projekty',
      "work.title": "Kilka wartych pokazania.",
      "work.lede": "Nazwy pod NDA. Liczby zaudytowane — zannualizowane tam, gdzie trzeba, mierzone przeciwko holdoutowi tam, gdzie pozwalała na to konstrukcja testu. Gdzie nie pozwalała — mówię o tym wprost.",

      "work.case1.kicker": "DTC Obuwie · $60M przychodu · USA",
      "work.case1.title": "Akwizycja przebudowana wokół ekonomii nowych klientów, nie blended ROAS.",
      "work.case1.role": "Fractional Head of Growth · 9 miesięcy",
      "work.case1.summary": "Blended ROAS wyglądał OK. Pozyskiwanie nowych klientów po cichu stało w miejscu przez cztery kwartały, podczas gdy platforma serwowała reklamy klientom, którzy i tak by kupili. Rozdzieliliśmy konwersje nowych klientów na poziomie piksela, przełączyliśmy licytację na nCAC i first-order POAS, a kreację prospectingową przebudowaliśmy wokół kontrybucji na poziomie produktu. Raportowany ROAS spadł. Zysk nie. To była różnica, o którą ostatecznie chodziło zarządowi.",
      "work.case1.m1.label": "Wolumen nowych klientów",
      "work.case1.m1.delta": "R/R przy stałym budżecie",
      "work.case1.m2.label": "nCAC",
      "work.case1.m2.delta": "Blended, wszystkie kanały",
      "work.case1.m3.label": "POAS pierwszego zamówienia",
      "work.case1.m3.delta": "Z 0.9x",
      "work.case1.m4.label": "Blended ROAS",
      "work.case1.m4.delta": "Intencjonalnie",

      "work.case2.kicker": "DTC Wyposażenie domu · €25M przychodu · 6 rynków",
      "work.case2.title": "Trzy raporty, trzy prawdy. Zastąpiliśmy je jednym.",
      "work.case2.role": "Strategy Lead · 6 miesięcy",
      "work.case2.summary": "Raporty z platform mówiły jedno. Warehouse drugie. Finanse trzecie. Każdy tygodniowy meeting zaczynał się od uzgadniania liczb i kończył bez decyzji. Zbudowaliśmy warstwę prognozowania LTV na kohortach na bazie warehouse'u, skalibrowaną na dwunastu miesiącach zamkniętych danych finansowych, i zrobiliśmy z niej jedyne źródło, którego używał zarząd. Decyzje zaczęły zapadać w pierwszej połowie spotkania.",
      "work.case2.m1.label": "Dokładność prognozy",
      "work.case2.m1.delta": "Horyzont 90 dni",
      "work.case2.m2.label": "Źródła raportowe",
      "work.case2.m2.delta": "Pakiet zarządu",
      "work.case2.m3.label": "Czas do decyzji",
      "work.case2.m3.delta": "Tygodniowy meeting wzrostu",
      "work.case2.m4.label": "Kadencja planowania",
      "work.case2.m4.value": "Kw → Mies",
      "work.case2.m4.delta": "Z pewnością",

      "work.case3.kicker": "DTC Odzież · €80M przychodu · 9 rynków",
      "work.case3.title": "Testy kreacji przeniesione z układu per kanał na układ per popyt.",
      "work.case3.role": "Doradca · 8 miesięcy",
      "work.case3.summary": "Ponad czterdzieści kreacji miesięcznie, uporządkowanych per platforma. Duży wolumen, mały sygnał, brak wniosków przenoszących się między kanałami. Zrestrukturyzowaliśmy testy wokół tematów popytu: grupa × angle × produkt, jako matryca trójwymiarowa z wystarczającą mocą statystyczną w każdej komórce, żeby realnie odczytać wynik. Winner rate wzrósł mniej więcej dwukrotnie. Ważniejsze: zespół potrafił wyjaśnić, dlaczego winner wygrał — a to jedyny sposób, żeby wiedza się kumulowała.",
      "work.case3.m1.label": "Winner rate",
      "work.case3.m1.delta": "Per cykl testu",
      "work.case3.m2.label": "Koszt nowego winnera",
      "work.case3.m2.delta": "Produkcja + media",
      "work.case3.m3.label": "CPA top konceptów",
      "work.case3.m3.delta": "Skorygowane o incrementality",
      "work.case3.m4.label": "Przenoszenie między kanałami",
      "work.case3.m4.delta": "Zespoły, nie silosy",

      "approach.eyebrow": '<span class="idx">05</span> / Metoda pracy',
      "approach.title": "Nie gość od reklam. Ten, który stoi za nim.",
      "approach.lede": "Pracuję na styku marketingu, danych i strategii biznesowej. Deliverable'em nie jest plan kampanii. To system decyzyjny, który twój zespół obsługuje, kiedy mnie już nie ma.",
      "approach.ph1.title": "Audyt: jak faktycznie mierzony jest wzrost",
      "approach.ph1.body": "Dwa tygodnie w danych. Dostęp do kont, marża per SKU, różnica między tym, co mówią platformy, a tym, co księgują finanse. Na koniec drugiego tygodnia albo mam tezę wartą działania — konkretne ograniczenie, które kosztuje cię pieniądze — albo mówię, że jej nie ma, i rozchodzimy się. Dzieje się tak mniej więcej raz na sześć przypadków. Stawka jest stała tak czy inaczej.",
      "approach.ph1.meta": "Stała stawka · 2 tygodnie",
      "approach.ph2.title": "Projekt systemu decyzyjnego",
      "approach.ph2.body": "Trzy do czterech tygodni. Pisemne cele ekonomiczne: POAS floor per kanał, horyzont zwrotu, sześciomiesięczny kalendarz testów, co gasimy i dlaczego. Podpisane przez CEO i CFO — nie tylko przez CMO. Większość „strategii wzrostu\" to plany aktywności. Ta jest regułą: kiedy dzieje się X, robimy Y. Finanse podpisują, bo mapuje się na P&amp;L, za który odpowiadają.",
      "approach.ph2.meta": "Stała stawka · 3–4 tygodnie",
      "approach.ph3.title": "Wdrożenie ramię w ramię z zespołem",
      "approach.ph3.body": "Ręce w kontach, nie obok. Licytacja przebudowana, conversion API przerobione na danych marży, warstwa LTV per kohorta skalibrowana, tygodniowe raportowanie zmapowane na metryki zarządu. Zawsze z twoim zespołem, nigdy obok niego. Nie buduję systemów, których twój zespół nie obsłuży — tak cicho umiera dobra robota w kwartale po moim odejściu.",
      "approach.ph3.meta": "Retainer · 3–9 miesięcy",
      "approach.ph4.title": "Przekazanie i wyjście",
      "approach.ph4.body": "Playbook spisany, wewnętrzny owner przeszkolony, kwartalne check-iny ustalone. Moim celem jest sprawić, żeby retainer stał się zbędny. Około połowa klientów zostawia mnie potem w doradztwie. Druga połowa nie musi. Oba wyniki są w porządku. Czego nie zrobię: nie zostanę po to, żeby uzasadnić retainer.",
      "approach.ph4.meta": "Doradztwo · bezterminowo lub wcale",
      "approach.rule1": '<span class="approach__bullet">—</span> Bez retainera, jeśli nie mam tezy, na którą postawiłbym własne pieniądze.',
      "approach.rule2": '<span class="approach__bullet">—</span> Bez projektów poniżej €500k rocznego budżetu mediowego. Nie ma czego optymalizować.',
      "approach.rule3": '<span class="approach__bullet">—</span> Bez prowizji od agencji, opłat referralowych czy rev-share z platformami.',
      "approach.rule4": '<span class="approach__bullet">—</span> Bezpośrednia komunikacja, szybka iteracja, decyzje oparte na danych — nie opiniach.',

      "contact.eyebrow": '<span class="idx">06</span> / Kontakt',
      "contact.title": "Większość marek nie ma problemu ze skalowaniem.<br />Ma problem z pomiarem przebrany za problem ze skalowaniem.",
      "contact.note": "Dobre dopasowanie: marki DTC po fazie early traction, zespoły, w których liczby pomiarowe i te od profitability się nie zgadzają, i sytuacje, w których dokładanie budżetu przestało poprawiać wynik. Najlepiej mailem. Napisz, co nie działa i co już próbowałeś. Weź P&amp;L — albo jego przybliżenie.",
      "contact.email.label": "Email",
      "contact.linkedin.label": "LinkedIn",
      "contact.avail.label": "Najbliższy slot",
      "contact.avail.value": "Q3 2026 · 2 miejsca",

      "footer.text": "© 2026 Jack Matuszewski · Warszawa"
    }
  };

  /* ---------- Theme ---------- */
  const THEME_KEY = "jm-theme";
  const LANG_KEY  = "jm-lang";
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const langBtn  = document.getElementById("langToggle");

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = savedTheme || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", initialTheme);

  themeBtn?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
  });

  /* ---------- Language ---------- */
  function applyLang(lang) {
    if (!i18n[lang]) lang = "en";
    root.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = i18n[lang][key];
      if (value === undefined) return;

      // <meta name="description"> gets the `content` attribute, not innerHTML
      if (el.tagName === "META") {
        el.setAttribute("content", value);
        return;
      }
      el.innerHTML = value;
    });

    // Update <title> explicitly so browser tab updates
    const titleKey = document.querySelector("title")?.dataset.i18n;
    if (titleKey && i18n[lang][titleKey]) {
      document.title = i18n[lang][titleKey].replace(/<[^>]+>/g, "");
    }
  }

  const savedLang = localStorage.getItem(LANG_KEY);
  const browserLang = (navigator.language || "en").toLowerCase().startsWith("pl") ? "pl" : "en";
  const initialLang = savedLang || browserLang;
  applyLang(initialLang);

  langBtn?.addEventListener("click", () => {
    const current = root.getAttribute("lang") === "pl" ? "pl" : "en";
    const next = current === "en" ? "pl" : "en";
    applyLang(next);
    try { localStorage.setItem(LANG_KEY, next); } catch (_) {}
  });

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Smooth anchor focus (a11y) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });
})();
