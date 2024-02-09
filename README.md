**BudgetApp**
BudgetApp je aplikacija za deljenje troškova dizajnirana da olakša upravljanje zajedničkim troškovima. Bez obzira da li putujete s prijateljima, živite s cimerima ili organizujete grupni događaj, BudgetApp vam pomaže da pratite ko koliko duguje, pojednostavljujući proces izmirivanja dugova.
**Funkcionalnosti za neulogovanog korisnika**

Kreiraj nalog
Prijavi se na sistem
Uvid u osnovne informacije o aplikaciji

**Funkcionalnosti za ulogovanog korisnika**

Kreiranje i brisanje događaja
Dodavanje učesnika događaja
Pretraživanje, filtriranje i sortiranje događaja
Izmena korisničkog imena
Tabelarni prikaz ukupnog broja događaja koje je kreirao 
Pristup ContactSupport stranici
Odjava sa sistema

**Funkcionalnosti za administratora**

Kreiranje i brisanje događaja
Dodavanje učesnika događaja
Pretraživanje i sortiranje događaja
Prikaz grafikona o ukupnom broju događaja po tipu
Mogućnost exportovanja file u .csv formatu

**Pokretanje aplikacije**
Najpre je potrebno pokrenuti Apache i MySQL u okviru XAMPP-a.
Zatim je potrebno pokrenuti redom sledeće komande:

**Kloniranje**
- `git clone https://github.com/elab-development/internet-tehnologije-projekat-vebaplikacijazabudzetiranje_2020_0088.git
- `cd internet-tehnologije-projekat-vebaplikacijazabudzetiranje_2020_0088`
**Backend**
- `copy .env.example .env`
- u _.env_ fajlu definisati naziv baze kao na primer DB_DATABASE=budget_app
- `composer install`
- `php artisan migrate`
- `php artisan db:seed`
- `php artisan serve`
### Frontend
- `cd reactapp`
- `npm install`
- `npm start`


















Funkcije
Kreiraj Događaje: Organizujte svoje troškove kreiranjem grupa za različite prilike ili zajedničke troškove.
Dodaj Troškove: Lako dodajte troškove nastale od strane bilo kog člana grupe.
Podeli Račune: Podelite troškove jednako ili po prilagođenim iznosima među članovima grupe.
Namiri Dugove: Pratite ko duguje šta i sigurno namirite dugove unutar aplikacije.
Aktivnosti: Pregledajte detaljan prikaz svih aktivnosti vezanih za troškove unutar grupe.
Podrška za Više Valuta: Bez problema upravljajte troškovima u različitim valutama.
Instalacija
Zahtevi
Node.js (verzija >= 10.0.0)
MongoDB (verzija >= 4.0.0)
Postavka
Kloneirajte ovaj repozitorijum:
bash
Copy code
git clone https://github.com/vasusername/budgetaplikacija.git
Navigirajte do direktorijuma projekta:
bash
Copy code
cd budgetaplikacija
Instalirajte zavisnosti:
bash
Copy code
npm install
Postavite promenljive okruženja:
bash
Copy code
cp .env.example .env
Popunite neophodne promenljive okruženja u .env fajlu.

Pokrenite server:
bash
Copy code
npm start
Upotreba
Pristupite aplikaciji putem vašeg web pregledača na http://localhost:3000.
Prijavite se ili registrujte se sa vašim postojećim kredencijalima.
Kreirajte novi događaj ili pridružite se postojećem.
Počnite dodavati troškove i deliti račune sa članovima grupe.
Pratite aktivnosti i namirite dugove po potrebi.
Doprinosenje
Doprinosi su dobrodošli! Ako imate bilo kakve sugestije, izveštaje o greškama ili zahteve za funkcionalnost, molimo vas da otvorite problem ili pošaljete zahtev za povlačenje.

Licenca
Ovaj projekat je licenciran pod MIT Licencom - pogledajte LICENSE fajl za detalje.

Zahvalnost
Ova aplikacija je inspirisana aplikacijom Splitwise (https://www.splitwise.com/).
Posebne zahvale doprinosiocima i otvorenoj zajednici na njihovim dragocenim doprinosima i podršci.
