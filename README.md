# Toms Lernwelt

Online-Lebenslauf von Tom Kaminski als kleine Pixel-Welt: ein Marktplatz mit drei begehbaren Gebäuden.

- **Skill-Labor:** Fähigkeiten, wie ich sie gelernt habe, und Tipps, wie man sie selbst lernt
- **Projekt-Arena:** Projekte mit Problem, Lösung und Ergebnis
- **Karriere-Museum:** berufliche Stationen und Abschlüsse
- **Toms Haus:** wird mit jedem besuchten Gebäude weiter saniert
- **Schnellansicht / Lebenslauf:** oben rechts, alle Inhalte als klassische Seite

## Dateien

- `index.html` – das Spiel (Grafik wird per Code gezeichnet, keine Bilddateien nötig)
- `content.js` – **alle Texte** (Skills, Projekte, Stationen, Abschlüsse, Figuren, Haus)
- `.nojekyll` – sagt GitHub, dass die Dateien unverändert ausgeliefert werden sollen

Kontakt läuft bewusst nur über LinkedIn. Es stehen keine E-Mail, Telefonnummer oder Adresse in den Dateien.

## Hochladen auf GitHub Pages (im Browser, ohne Terminal)

1. Auf github.com oben rechts **+ → New repository**.
2. Name zum Beispiel `lernwelt` (die Adresse wird dann `https://DEIN-NAME.github.io/lernwelt/`).
   Wer die kürzere Adresse `https://DEIN-NAME.github.io/` will, nennt das Repository genau `DEIN-NAME.github.io`.
3. **Public** auswählen (für kostenlose GitHub Pages nötig), dann **Create repository**.
4. Auf **uploading an existing file** klicken und den *Inhalt* dieses Ordners hineinziehen:
   `index.html`, `content.js`, `README.md`.
   `.nojekyll` ist eine versteckte Datei: im Finder mit **⌘ + ⇧ + .** sichtbar machen und mit hochziehen (die Seite funktioniert aber auch ohne).
5. Unten **Commit changes**.
6. Im Repository **Settings → Pages**: bei *Source* „Deploy from a branch“, Branch **main**, Ordner **/ (root)**, **Save**.
7. Nach ein bis zwei Minuten steht oben auf derselben Seite der Link zur fertigen Website.

## Texte ändern

Alles steht in `content.js`. Datei auf GitHub öffnen, auf den Stift klicken, ändern, **Commit changes**. Nach einer Minute ist die Seite aktualisiert.

- Skill-Stufen: `stufe: 1` bis `4` (Grundlagen, Fortgeschritten, Sehr sicher, Experte)
- Ressourcen-Tipps zu einem Skill: `ressourcen: [{ titel: 'Buch XY', url: 'https://...' }]`
- Links zu einem Projekt: `links: [{ label: 'Live-Demo', url: 'https://...' }]`
- Leere Listen `[]` werden auf der Seite automatisch ausgeblendet.

## Suchmaschinen

Die Seite hat `noindex`: Wer den Link hat, kann sie öffnen, Google listet sie aber nicht. Soll sie über Google auffindbar sein, in `index.html` die Zeile mit `noindex` löschen.
