# Äriinfosüsteemide peakasutaja - Proovitöö

## Kirjeldus

Proovitöö eesmärk on hinnata kandidaadi JavaScripti kasutamise oskusi.

Peakasutaja roll eeldab, et tuleb testida ja seadistada lihtsamal tasemel seadistusi infosüsteemis, mille üheks osaks on AdminUi. AdminUi võimaldab ellu viia väiksemaid seadistusi või arendusi oleneb, kuidas keegi seda nimetada soovib. AdminUi hõlmab juhtumi põhjade konfigureerimist, kasutajate haldust, klassifikaatorite lisamist ja mitmeid muid seadistusvõimalusi.

Kandidaadi oskuste näitamiseks tuleb lahendada lihtsad koodinäited, mis on lisatud `sample.js` faili. Failis on eeldefineeritud funktsioonid koos kirjeldusega, mida tuleb lahendada.

## Nõuded

Kui otsustad kasutada meie poolt ette antud lahendust, siis edukaks kasutamiseks on vajalik:

1. **IDE** - Veendu, et seadmes on olemas sobiv arenduskeskkond.
2. **Node.js LTS** - Node.js on vajalik ülesande lahendamiseks.
3. **Git** - Koodi pushimiseks Githubi/Gitlabi/Bitbucketisse.

## Juhised

1. Klooni projekt repositooriumist:
   ```bash
   git clone <repositooriumi_url>
   ```

2. Paigalda sõltuvused kasutades npm-i:
   ```bash
   npm install
   ```

3. Rakenduse kasutamiseks:
   - Jooksuta terminalis käsk:
     ```bash
     node app.js
     ```
   - Või soovituslikult:
     ```bash
     npm run dev
     ```

   **Märkus:** Soovitan kasutada viimast valikut, kuna oleme lisanud `nodemon`-i, ning selle abil ei ole vaja iga kord koodi käsitsi uuesti käivitada. Iga koodimuudatus kuvatakse konsoolis.

## Tähelepanu

- Ära muuda `package.json` ega muid sõltuvusega faile.
- Ainsad muudatused tuleb teha `sample.js` failis.
- Kui leiad, et funktsiooni nimed on segased võid neid vabalt muuta.
- Kui midagi ei tööta siis võta koheselt ühendust ning püüame ühiselt mure lahendada.

