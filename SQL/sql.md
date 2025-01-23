# Äriinfosüsteemide peakasutaja - Proovitöö

## Kirjeldus

Proovitöö eesmärk on hinnata kandidaadi SQL kasutamise oskusi. Kuna vead võivad olla seotud andmetega, tuleb aeg-ajalt analüüsida kasutajaliideses nähtut ja andmebaasis toimuvat. Meie kasutatav andmebaas on PostgreSQL, kus olemite vahelised seosed on viidud koodi tasemele. See tähendab, et PostgreSQL toimib peamiselt NoSQL põhimõtetel.

Ülesannetes on loodud andmebaasi skeem (schema), mille kandidaat peab enda lokaalses seadmes käivitama ja seejärel lisama sinna ka andmed. Andmebaasi dump asub failis `user.sql`. Andmebaasi küsitlused (queryd) palume luua faili `sample.sql`, kus on ka ülesande kirjeldused ja oodatavad tulemused.

**NB!** Dumpis kasutatud andmed on juhuslikult genereeritud ning ei ole seotud päris isikutega.

## Andmebaasi ülesseadmine

Kuna me ei eelda, et kandidaadil on süvateadmised Dockeri ja selle kasutamise kohta, anname juhised, kuidas kiiresti ja lihtsasti lahendus tööle panna. Selleks on vaja Docker Desktopi ja mõnda DBMS-rakendust.

### Soovituslik videoõpetus

Harimise eesmärgil võib vaadata antud 10-minutilist tutvustavat videot: [YouTube - Docker Basics](https://youtu.be/RdPYA-wDhTA?si=COUhqmJm3CJsqAa4)

### Sammud:

1. **Laadi oma seadmesse Docker:**
   [Laadi alla Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. **DBMS-i jaoks soovitame DBeaver-it:**
   [Laadi alla DBeaver](https://dbeaver.io/)
