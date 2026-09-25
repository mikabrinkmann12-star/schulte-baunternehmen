# Schulte Bauunternehmen – Website

Statische One-Page-Website (HTML + Tailwind CSS, lokal gehostete Schriften) für die
U. Schulte Bauunternehmung GmbH aus Saterland-Scharrel.

## Auf Netlify veröffentlichen

1. Auf [app.netlify.com](https://app.netlify.com) einloggen → **Add new site → Import an existing project → GitHub**.
2. Dieses Repository und den Branch auswählen.
3. Build-Einstellungen stehen schon in `netlify.toml` (`npm run build`, Publish directory `.`) → **Deploy**.
4. Unter **Site configuration → Forms** die Formularerkennung aktivieren und unter
   **Form notifications** eine E-Mail an `info@schultebau.net` einrichten
   (ein Formular `kontakt`; Bewerbungen laufen über die Option „Bewerbung“ im Dropdown,
   dann erscheint ein Datei-Upload. Direktlink: `…/#bewerbung`).

## Fotos einsetzen

Die Seite zeigt gestreifte Platzhalter, solange ein Foto fehlt. Einfach die Bilder
mit genau diesen Namen nach `assets/img/` legen, dann erscheinen sie automatisch:

| Datei                   | Wo                                              | Format |
|-------------------------|-------------------------------------------------|--------|
| `hero.jpg`              | Startbild, volle Breite (wird links abgedunkelt) | Quer, mind. 2000 px |
| `leistung-neubau.jpg`   | Leistungen – Neubau                              | Hochformat 4:5 |
| `leistung-rohbau.jpg`   | Leistungen – Rohbau & Mauerwerk                  | Hochformat 4:5 |
| `leistung-bestand.jpg`  | Leistungen – Bauen im Bestand                    | Hochformat 4:5 |
| `leistung-energie.jpg`  | Leistungen – Energie (PV/Wärmepumpe)             | Hochformat 4:5 |
| `rohbau.jpg` + `fertig.jpg` | Regler „Vom Rohbau zum Zuhause“ – möglichst dasselbe Haus aus gleicher Perspektive | Quer 16:9 |
| `unternehmen.jpg`       | Über uns (Ulrich Schulte / Team)                 | Hochformat 4:5 |
| `ref1.jpg` … `ref7.jpg` | Referenzen (ref1 groß, ref6/ref7 breit)          | beliebig, wird zugeschnitten |

Tipp: Bilder vorher auf ca. 1600 px Breite verkleinern (z. B. mit squoosh.app).

## Vor dem Livegang

- **Impressum / Datenschutz:** gelb markierte Platzhalter (HRB, USt-IdNr., Handwerksrolle, Stand) ergänzen.
- **Adresse prüfen:** Eisenbahnstraße 5a (einige Verzeichnisse nennen 3a).
- **Farben:** zentral in `tailwind.config.js` (`brand`, `ink` …) und in `assets/legal.css` änderbar.

## Lokal bearbeiten

```bash
npm install
npm run watch   # baut assets/css/tailwind.css bei jeder Änderung neu
```

Netlify baut das CSS bei jedem Deploy automatisch neu. Die fertige `assets/css/tailwind.css`
ist trotzdem eingecheckt, damit die Seite auch ohne Build (z. B. lokal per Doppelklick) funktioniert.

## Struktur

```
index.html          Startseite (Leistungen, Rohbau/Fertig-Regler, Plus-Energiehaus, Ablauf, Referenzen, Über uns, Kontakt)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
danke.html          Bestätigung nach dem Absenden eines Formulars
assets/img/         Fotos (siehe Tabelle oben)
assets/logo/        Logo + Favicon (SVG)
assets/css/         tailwind.css (generiert) + fonts.css
assets/fonts/       Lokal eingebundene Schriften (keine Google-Verbindung)
assets/legal.css    Styles für Unterseiten
src/tailwind.css    Tailwind-Quelldatei
tailwind.config.js  Farben & Schriften
netlify.toml        Netlify-Konfiguration
```
