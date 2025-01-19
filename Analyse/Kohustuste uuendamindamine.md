# Äriinfosüsteemide peakasutaja - Proovitöö

## Kirjeldus

Proovitöö eesmärk on hinnata kandidaadi:
- **Analüüsi oskusi**: Võimekus analüüsida ärilisi ja tehnilisi vajadusi ning neid struktureeritult kirjeldada.
- **Loogilise lahenduse planeerimist**: Kandidaat peab kirjeldama võimaliku lõpplahenduse loogilise käigu.
- **Konteksti mõistmist ja ärilise väärtuse pakkumist**: Ülesanne simuleerib praktilist olukorda, kus kandidaat peab esitama lahenduse, mida saab edasi suunata arendajale või tulevases rollis rakendada.  

Peakasutaja rolli oluline omadus on **äri vajaduste mõistmine** ning **võimalike lahenduste pakkumine**, mis oleks selgelt esitatav nii äripoolele kui ka arendajate vaatest.

---

## Taust

Antud infosüsteem käsitleb käendusi ning need jagunevad meile kolmeks eri teenuseks:
- **Ettevõtluslaenukäendus**
- **Eluasemelaenukäendus**
- **Korterühistu laenukäendus**

Käesolev ülesanne käsitleb ettevõtte laenukäenduse lepingu **kohustuste uuendamise protsessi**.  
### Probleem:
Hetkel puudub protsess, mis võimaldaks süsteemil hallata lepingu kohustuste uuendamist, kui leping muutub **kehtivaks**.  
Näiteks:
1. Pank esitab lepingu süsteemi staatusega **"Esitatud"**.
2. Laenuhaldur teeb vajalikud toimingud ning muudab lepingu **"Kehtivaks"**.
3. Kehtiva lepingu andmed tuleb uuendada ka **kohustuste andmebaasis**, kuid protsess selleks puudub.  

Klinedi koondvaade on seotud **kohustuste andmebaasiga**.

---

## Ärilised nõuded

Äri on seadnud järgmised nõuded kliendi koondvaate jaoks:  
Kliendi vaates tuleb kuvada:
- **Käenduslepingu number**
- **Finantseerimise liik**
- **Pank**, kes on laenu andja
- **Laenujääk**
- **Käendusjääk**
- **Intressimäär** (nt 6 kuu Euribor + 2%)
- **Lepingu alguskuupäev**
- **Lepingu lõppkuupäev**
- **Lepingu staatus**  

Samuti tuleb arvestada, et:
- Kohustuste uuendamisel ei kirjutataks olemasolevaid andmeid üle.  
  - Uuendatakse ainult need andmed, mis on seotud **lepingu lisa muutustega**.

---

## Ülesanne

### 1. Ärianalüüs
- Kirjelda lahenduse loogiline käik, mis hõlmab kohustuste uuendamise protsessi.
- Selgita, kuidas lahendus vastab ärilistele nõuetele ja mida peaks arvestama arednuste elluviimise käigus.  

### 2. BPMN joonis
- Koosta **HIGH level** protsess BPMN joonis, mis kirjeldab kohustuste uuendamise loogikat.
- Protsess peab näitama lepingu elutsüklit alates esitamisest kuni kohustuste uuendamiseni.

---

## Võimalikud andmeobjektid

Andmeobjektid, mida võid kasutada analüüsi kontekstis, kuid ei pea olema kohustuslik osa:
- **obligationType**
- **obligationId**
- **interestBasis**
- **loanType**
- **marginal**
- **loanReceiver**
- **contractStartDate**
- **loanAmount**
- **contractDueDate**
- **contractualLoanAmount**
- **loanAmountChange**
- **status**
- **serviceType**

Kui leiad, et need pole kontekstis olulised siis ära kasuta.

> **NB!** BMPN diagrammis kirjeldatakse ainult protsessi kõrgtasandil, **andmeobjekte** sinna ei lisata.

---

## Ootused

Analüüsi tulemused peaksid olema:
1. **Selged ja struktureeritud**, nii et need oleksid otse kasutatavad arenduses.
2. **Äriliselt kirjeldatud loogikas**, mis hõlmab eelnimetatud nõudeid ja protsesse.
3. Lisatud **BPMN joonis**, mis annab ülevaate äriprotsessist.  