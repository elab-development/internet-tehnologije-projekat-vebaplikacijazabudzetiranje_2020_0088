**BudgetApp**

BudgetApp je aplikacija za deljenje troškova dizajnirana da olakša upravljanje zajedničkim troškovima. Bez obzira da li putujete s prijateljima, živite s cimerima ili organizujete grupni događaj, BudgetApp vam pomaže da pratite ko koliko duguje, pojednostavljujući proces izmirivanja dugova.

## Funkcionalnosti za neulogovanog korisnika:
- kreiraj nalog
- prijavi se na sistem
- uvid u osnovne informacije o aplikaciji
  
## Funkcionalnosti za ulogovanog korisnika:
- Kreiranje i brisanje događaja
- Dodavanje učesnika događaja
- Pretraživanje, filtriranje i sortiranje događaja
- Izmena korisničkog imena
- Tabelarni prikaz ukupnog broja događaja koje je kreirao
- Pristup ContactSupport stranici
- Odjava sa sistema

## Funkcionalnosti za administratora:
- Kreiranje i brisanje događaja
- Dodavanje učesnika događaja
- Pretraživanje i sortiranje događaja
- Prikaz grafikona o ukupnom broju događaja po tipu
- Mogućnost exportovanja file u .csv formatu
  
# Pokretanje aplikacije
Najpre je potrebno pokrenuti Apache i MySQL u okviru XAMPP-a.
Zatim je potrebno pokrenuti redom sledeće komande:

**Kloniranje**

- `git clone https://github.com/elab-development/internet-tehnologije-projekat-vebaplikacijazabudzetiranje_2020_0088.git`
- `cd internet-tehnologije-projekat-vebaplikacijazabudzetiranje_2020_0088`

**Backend**

- `copy .env.example .env`
- u _.env_ fajlu definisati naziv baze kao na primer DB_DATABASE=budget_app
- `composer install`
- `php artisan migrate`
- `php artisan db:seed`
- `php artisan serve`

**Frontend**

- `cd reactapp`
- `npm install`
- `npm start`


