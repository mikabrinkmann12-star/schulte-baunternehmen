# Schulte Bauunternehmen – Website

Statische One-Page-Website (HTML + Tailwind CSS, lokal gehostete Schriften) für die
U. Schulte Bauunternehmung GmbH aus Saterland-Scharrel. Aufbau und Stil orientieren
sich an maler-brinkmann.de.

## Auf Netlify veröffentlichen

1. Auf [app.netlify.com](https://app.netlify.com) einloggen → **Add new site → Import an existing project → GitHub**.
2. Dieses Repository und den Branch auswählen.
3. Build-Einstellungen stehen schon in `netlify.toml` (`npm run build`, Publish directory `.`) → **Deploy**.
4. Unter **Site configuration → Forms** die Formularerkennung aktivieren und unter
   **Form notifications** eine E-Mail an `info@schultebau.net` einrichten
   (Formulare: `kontakt` und `bewerbung`).

## Fotos einsetzen

Die Seite zeigt gestreifte Platzhalter, solange ein Foto fehlt. Einfach die Bilder
mit genau diesen Namen nach `assets/img/` legen, dann erscheinen sie automatisch:

| Datei                 | Wo                                   | Format  |
|-----------------------|--------------------------------------|---------|
| `hero.jpg`            | Startbereich rechts                  | Hochformat 4:5 |
| `rohbau.jpg`          | Einblicke – „Rohbau“-Seite der Animation | Hochformat 3:4 |
| `fertig.jpg`          | Einblicke – „Fertig“-Seite (möglichst dasselbe Haus) | Hochformat 3:4 |
| `plusenergiehaus.jpg` | Plus-Energiehaus-Bereich (Haus mit PV) | Quer 4:3 |
| `unternehmen.jpg`     | Unternehmen (Ulrich Schulte / Team)  | Quer 4:3 |
| `ref1.jpg` … `ref8.jpg` | Referenz-Galerie                   | quadratisch |

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
index.html          Startseite (Leistungen, Ablauf, Plus-Energiehaus, Unternehmen, Referenzen, Kontakt, Karriere)
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
