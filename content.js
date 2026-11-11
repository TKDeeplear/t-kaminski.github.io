// =====================================================================
//  Inhalte für "Toms Lernwelt" (Entwurf D: drei begehbare Gebäude)
//  Hier stehen ALLE Texte. Zum Ändern nur diese Datei bearbeiten.
//
//  Ressourcen-Tipps eintragen, z. B.:
//    ressourcen: [{ titel: 'Buch XY', url: 'https://...' }]
//  Leere Liste [] = Bereich wird ausgeblendet.
//
//  Platzhalter: Jeder Text, der mit "[Platzhalter]" beginnt, wird auf der
//  Seite grau-kursiv angezeigt. Einfach durch eigenen Text ersetzen.
//  Leere Listen ([]) oder leere Links ('') werden automatisch ausgeblendet.
//
//  Aufteilung ohne Doppelungen:
//    Skill-Labor     = was ich kann
//    Projekt-Arena   = was ich gebaut habe (Projekte, chronologisch)
//    Karriere-Museum = wo ich war (Stationen) und meine Abschlüsse (chronologisch)
//
//  Datenschutz: Bitte keine E-Mail, Telefonnummer oder Adresse eintragen.
//  Einziger Kontakt ist LinkedIn.
// =====================================================================
window.LERNWELT = {

  profil: {
    name: 'Tom Kaminski',
    claim: 'Ich finde heraus, wo ein Ablauf hakt, und mache ihn gemeinsam mit den Menschen, die damit arbeiten, besser. Mit Daten als Grundlage und Psychologie als Werkzeug.',
    rollen: ['Risk Manager', 'Wirtschaftspsychologe (M.Sc.)', 'Dozent für Statistik', 'Leipzig'],
    linkedin: 'https://www.linkedin.com/in/tom-kaminski-b2b4761b8',
    sprachen: ['Deutsch · Muttersprache', 'Englisch · sehr gut', 'Französisch · Grundkenntnisse']
  },

  // ---------------- Figuren (NPCs) ----------------
  // Jede Figur hat mehrere Sprechblasen, die nacheinander erscheinen.
  npcs: {
    guide: {
      name: 'Wegweiserin',
      zeilen: [
        'Hallo und willkommen in Toms Lernwelt!',
        'Links steht das Skill-Labor. Dort erfährst du, was Tom kann, wie er es gelernt hat und wie du es selbst lernen kannst.',
        'In der Mitte ist die Projekt-Arena mit seinen Projekten. Rechts im Karriere-Museum hängen seine Stationen und Abschlüsse.',
        'Keine Zeit zum Spielen? Oben rechts gibt es jederzeit die Schnellansicht als klassischen Lebenslauf.',
        'Und der Weg ganz rechts? Der führt weiter. Aber schau dich ruhig erst um.'
      ]
    },
    labor: {
      name: 'Laborleitung',
      zeilen: [
        'Willkommen im Skill-Labor!',
        'Jede leuchtende Kugel ist eine von Toms Fähigkeiten. Stell dich davor und drück die Leertaste.',
        'Du siehst dann, wie er sie gelernt hat, und bekommst Tipps, wie du sie selbst verbessern kannst.'
      ]
    },
    arena: {
      name: 'Hallenwart',
      zeilen: [
        'Willkommen in der Projekt-Arena!',
        'Die Projekte stehen von links nach rechts in zeitlicher Reihenfolge. Einfach untersuchen und durchklicken: Problem, Lösung, Ergebnis.'
      ]
    },
    museum: {
      name: 'Kuratorin',
      zeilen: [
        'Willkommen im Karriere-Museum!',
        'An der Wand hängen Toms Stationen, von links nach rechts durch die Zeit. Auf dem roten Teppich geht es an seinen Abschlüssen vorbei, vom ältesten an der Tür bis zum neuesten hinten.',
        'Bitte nicht anfassen. Na gut, anschauen mit der Leertaste ist erlaubt.'
      ]
    }
  },

  // ---------------- Skill-Labor ----------------
  // kurz: Etikett über der Kugel (kurz halten!)
  // stufe: 1 = Grundlagen, 2 = Fortgeschritten, 3 = Sehr sicher, 4 = Experte  (bitte selbst prüfen!)
  skills: [
    {
      id: 'prozess', kurz: 'Prozesse', name: 'Prozessoptimierung & Automatisierung', farbe: '#2fb5a8', stufe: 4,
      werdegang: 'Im Supermarkt habe ich gesehen, wie Abläufe im Alltag wirklich laufen. Im Ingenieurbüro habe ich die Auftragsbearbeitung neu aufgeteilt. Bei Invia habe ich als Projektleiter die Betrugsprüfung in die Buchungsstrecke verlegt: von 10 auf rund 90 % Automatisierung, von 8 Stunden auf unter 1 Stunde Handarbeit pro Tag.',
      stationen: ['Supermarkt', 'Ingenieurbüro', 'Invia'],
      tipps: [
        'Erst beobachten, dann verbessern: Wie läuft der Ablauf wirklich, nicht wie steht er im Handbuch?',
        'Ursachen gemeinsam mit dem Team suchen, zum Beispiel mit einem Ishikawa-Diagramm.',
        'Vorher festlegen, woran man Erfolg misst (SMART-Ziele).',
        'Ein Minimum Lovable Product bauen: lieber früh etwas, das die Leute gern nutzen, als spät etwas Perfektes.'
      ],
      ressourcen: []
    },
    {
      id: 'statistik', kurz: 'Datenanalyse', name: 'Datenanalyse & Statistik', farbe: '#5b8def', stufe: 4,
      werdegang: 'Angefangen mit eigenen Versuchsreihen zu Festplatten im Ingenieurbüro. Ab 2022 habe ich mir Statistik und Datenanalyse zum großen Teil selbst beigebracht. Heute unterrichte ich Data Literacy und Quantitative Datenanalyse an der FOM.',
      stationen: ['Ingenieurbüro', 'Selbststudium', 'Dozent'],
      tipps: [
        'Mit dem PPDAC-Zyklus arbeiten: Problem, Plan, Data, Analysis, Conclusion.',
        'Zuerst die Frage klären: Was wollen wir eigentlich beantworten, und warum?',
        'Daten immer auf Qualität prüfen, bevor man ihnen glaubt.',
        'Regression, Clusteranalyse, Zeitreihen: an echten eigenen Fragen üben, nicht nur an Lehrbuchdaten.'
      ],
      ressourcen: []
    },
    {
      id: 'code', kurz: 'Programmieren', name: 'Programmieren (Python, R, SQL)', farbe: '#e0a82e', stufe: 2,
      werdegang: 'Komplett autodidaktisch, ab 2022 abends zu Hause: Python mit pandas, R (vertieft), SQL und MySQL, später Machine Learning und KI. Aus Büchern gelernt, nachgebaut, verstanden. Erfahrene Entwickler um Rat gefragt.',
      stationen: ['Selbststudium'],
      tipps: [
        'Bücher lesen, Code nachbauen, verstehen. In genau dieser Reihenfolge.',
        'Lieber Rat als nur Feedback: Erfahrene Leute fragen, was man beim nächsten Mal besser macht.',
        'Der erste Code ist nie perfekt. Trotzdem anfangen.'
      ],
      ressourcen: []
    },
    {
      id: 'change', kurz: 'Change', name: 'Change Management & Psychologie', farbe: '#c46ad6', stufe: 3,
      werdegang: 'Im Master Wirtschaftspsychologie (2021 bis 2024) ging es um Sozial-, Bio-, Arbeits- und Organisationspsychologie, Führungspsychologie und Change Management. Seitdem sehe ich Veränderung auch mit den Augen der Betroffenen.',
      stationen: ['M.Sc.', 'Invia'],
      tipps: [
        'Bedenken offen besprechen, statt sie zu übergehen.',
        'Fragen: Was löst die Veränderung bei den Menschen aus?',
        'Vorher festlegen, woran man misst, ob eine Veränderung wirkt.'
      ],
      ressourcen: []
    },
    {
      id: 'moderation', kurz: 'Moderation', name: 'Workshop-Design & Moderation', farbe: '#ef7a62', stufe: 3,
      werdegang: 'Für 20 bis 30 Kolleginnen und Kollegen habe ich drei aufeinander aufbauende KI-Workshops gestaltet. Die KI-Nutzung hat sich in zwei Monaten verdreifacht. Dazu moderiere ich Retrospektiven, vom Entwickler bis zum Management.',
      stationen: ['Invia'],
      tipps: [
        'Formate aufeinander aufbauen: verstehen, anwenden, selbst umsetzen.',
        'Für jedes Format vorab festlegen, woran man Erfolg misst (zum Beispiel nach Kirkpatrick).',
        'Retrospektiven nach jeder Iteration, nicht erst am Ende.'
      ],
      ressourcen: []
    },
    {
      id: 'projekt', kurz: 'Projektleitung', name: 'Projektleitung & Anforderungen', farbe: '#3fae6a', stufe: 3,
      werdegang: 'Im Ingenieurbüro rund 20 Projekte im Jahr von der Ausschreibung bis zur Rechnung. Bei Invia Projektleitung des Fraud-Prevention-Systems: Bedarfe erhoben, Anforderungen und Business Case erstellt, mit den Entwicklern umgesetzt.',
      stationen: ['Ingenieurbüro', 'Invia'],
      tipps: [
        'Bedarfe direkt bei den Fachteams erheben, nicht vermuten.',
        'Einen Business Case schreiben, auch wenn ihn keiner verlangt: Er zwingt zur Klarheit.',
        'Mit den Entwicklern früh klären, was technisch sinnvoll ist.'
      ],
      ressourcen: []
    },
    {
      id: 'agil', kurz: 'Agil arbeiten', name: 'Agiles Arbeiten & Visualisierung', farbe: '#4fbfd3', stufe: 3,
      werdegang: 'Kanban und Shape Up im Alltag, Jira, Trello und Miro für die Zusammenarbeit, Plotly, ggplot2 und eigene HTML-Dashboards, um Ergebnisse sichtbar zu machen.',
      stationen: ['Invia'],
      tipps: [
        'Arbeit sichtbar machen: Ein Kanban-Board zeigt, wo es hakt.',
        'Ergebnisse visualisieren statt Tabellen zu verschicken.'
      ],
      ressourcen: []
    },
    {
      id: 'lehre', kurz: 'Lehre', name: 'Lehre & Data Literacy', farbe: '#d9a521', stufe: 3,
      werdegang: 'Seit Wintersemester 2025 Dozent an der FOM für Data Literacy, ab dem kommenden Semester Quantitative Datenanalyse mit R. Online-Lehre heißt für mich: Studierende aktiv in die Veranstaltung holen, statt nur zu senden.',
      stationen: ['Dozent'],
      tipps: [
        'Methoden aus der Wirtschaftspsychologie nutzen, um Leute zu aktivieren.',
        'Freiraum geben, wenn die Richtung stimmt.',
        'Exzellenz statt Perfektion: die Arbeit im Ganzen bewerten.'
      ],
      ressourcen: []
    }
  ],

  // ---------------- Projekt-Arena (chronologisch, älteste zuerst) ----------------
  projekte: [
    {
      id: 'schall', titel: 'Neues Geschäftsfeld Schallmessung', kurz: 'Schallmessung', farbe: '#2f6f8f',
      jahr: '2015 – 2020', rolle: 'Ingenieurbüro Dr.-Ing. Ulf Lichte',
      problem: 'Das Büro war auf Erschütterungsschutz spezialisiert, Schallmessungen gehörten nicht zum Angebot. Aufträge liefen ohne klare Aufgabenteilung.',
      loesung: 'Schallmessung nach TA Lärm als eigenen Leistungsbereich aufgebaut, vom Angebot bis zur Rechnung. Auftragsbearbeitung umgestellt: Jede Person übernimmt ihr Spezialgebiet und gibt dann weiter.',
      ergebnis: 'Wachsende Nachfrage, mehrfach neue Messgeräte angeschafft. Spürbar bessere Qualität und kürzere Durchlaufzeiten.',
      stack: ['TA Lärm', 'Messtechnik', 'Akquise', 'Gutachten'],
      links: []   // optional, z. B. [{ label: 'Live-Demo', url: 'https://...' }]
    },
    {
      id: 'festplatten', titel: 'Eigene Versuchsreihen zu Festplatten', kurz: 'Versuchsreihe', farbe: '#7a5aa6',
      jahr: '2015 – 2020', rolle: 'Ingenieurbüro · abends, neben Job und Studium',
      problem: 'Für Erschütterungen an Festplatten galten weiterhin alte, sehr konservative Grenzwerte.',
      loesung: 'Eigene Versuchsreihen geplant und durchgeführt, Ergebnisse ausgewertet.',
      ergebnis: 'Nachgewiesen, dass die Grenzwerte bei modernen Festplatten zu streng sind. Dazu mehrere Fachvorträge gehalten, unter anderem auf einer Fachtagung.',
      stack: ['Versuchsplanung', 'Messtechnik', 'Auswertung', 'Fachvortrag'],
      links: []
    },
    {
      id: 'fraud', titel: 'Fraud-Prevention-System neu aufgestellt', kurz: 'Fraud-Prevention', farbe: '#1f7a6c',
      jahr: 'seit 2021', rolle: 'Invia Flights · Projektleitung',
      problem: 'Verdächtige Buchungen wurden erst nach der Buchung geprüft. Das System war im Grunde ein Statusspeicher, nur 10 % liefen automatisch, rund 8 Stunden Handarbeit pro Tag.',
      loesung: 'Ursachen mit dem Team analysiert (Ishikawa, Disney-Methode), Bedarfe erhoben, Anforderungen und Business Case erstellt, SMART-Ziele gesetzt. Mit dem Entwicklerteam die Prüfung direkt in die Buchungsstrecke verlegt, nach jeder Iteration Retrospektiven. Maßstab: ein Minimum Lovable Product.',
      ergebnis: 'Rund 90 % Automatisierung, unter 1 Stunde Prüfaufwand pro Tag, obwohl das Volumen um mindestens 50 % stieg und heute 8 statt 2 Fulfillment-Methoden laufen.',
      stack: ['Ishikawa-Diagramm', 'Disney-Methode', 'Business Case', 'SMART-Ziele', 'Kanban', 'Retrospektiven'],
      links: []
    },
    {
      id: 'ki', titel: 'KI-Workshops mit messbarer Wirkung', kurz: 'KI-Workshops', farbe: '#6a5acd',
      jahr: 'bei Invia', rolle: 'Invia Flights · Konzeption und Moderation',
      problem: 'KI wurde kaum genutzt. Außer mir haben nur zwei Kollegen KI-Projekte angestoßen, bei vielen gab es Unsicherheit und Vorbehalte.',
      loesung: 'Drei aufeinander aufbauende Formate: verstehen, anwenden, KI-Projekte umsetzen. Für jedes Format vorab festgelegt, woran wir Erfolg messen. Bedenken offen besprochen statt übergangen.',
      ergebnis: '20 bis 30 Teilnehmende. KI-Nutzung innerhalb von zwei Monaten verdreifacht, kurz danach zehn Leute mit eigenen KI-Projekten, heute fast alle Product Owner.',
      stack: ['Workshop-Design', 'Moderation', 'Erfolgsmessung', 'KI'],
      links: []
    }
  ],

  // ---------------- Karriere-Museum: Stationen (Schaukästen an der Wand) ----------------
  // Nur Berufs- und Bildungsstationen, chronologisch. Projekte stehen in der Projekt-Arena.
  stationen: [
    { kurz: 'Supermarkt', jahr: '2009 – 2015', titel: 'Ausbildung und Arbeit im Supermarkt', ort: 'Konsumgenossenschaft Leipzig eG', text: 'Ausbildung zum Kaufmann im Einzelhandel, danach bis 2015 im Supermarkt. Hier habe ich gelernt, wie Abläufe im Alltag wirklich funktionieren und was sie für die Menschen bedeuten, die sie jeden Tag ausführen.' },
    { kurz: 'Ingenieurbüro', jahr: '2015 – 2020', titel: 'Messen auf Bohrinseln, in Steinbrüchen und auf Baustellen', ort: 'Sachverständigen- und Ingenieurbüro Dr.-Ing. Ulf Lichte', text: 'Schwingungen und Lärm gemessen, rund 20 Projekte im Jahr von der Ausschreibung bis zur Rechnung betreut und Gutachten geschrieben. Zwei Projekte aus dieser Zeit stehen in der Projekt-Arena: die Schallmessung und die Versuchsreihe zu Festplatten.' },
    { kurz: 'B.A.', jahr: '2016 – 2020', titel: 'Bachelor Business Administration', ort: 'FOM Hochschule Leipzig · berufsbegleitend', text: 'Vier Jahre Abendstudium neben dem Job: VWL, Management- und Wirtschaftstheorien, Finanzmanagement und Verhandlungsführung.' },
    { kurz: 'Invia', jahr: 'seit 2021', titel: 'Risk Manager', ort: 'Invia Flights GmbH, Leipzig', text: 'Risikoanalyse, Entscheidungsvorlagen für die Geschäftsführung und Projektleitung. Das Fraud-Prevention-System und die KI-Workshops stehen in der Projekt-Arena.' },
    { kurz: 'M.Sc.', jahr: '2021 – 2024', titel: 'Master Wirtschaftspsychologie', ort: 'FOM Hochschule Leipzig · berufsbegleitend', text: 'Sozial- und Biopsychologie, Arbeits- und Organisationspsychologie, Führungspsychologie und Change Management.' },
    { kurz: 'Selbststudium', jahr: 'ab 2022', titel: 'Programmieren lernen, abends zu Hause', ort: 'Privat · komplett autodidaktisch', text: 'Python mit pandas, R, SQL, später Machine Learning und KI. Aus Büchern gelernt, nachgebaut, verstanden, und erfahrene Entwickler um Rat gefragt.' },
    { kurz: 'Dozent', jahr: 'seit 2025', titel: 'Dozent an der FOM', ort: 'FOM Hochschule Leipzig · nebenberuflich', text: 'Data Literacy seit Wintersemester 2025, ab dem kommenden Semester Quantitative Datenanalyse mit R.' }
  ],

  // ---------------- Karriere-Museum: Abschlüsse (Sockel am roten Teppich) ----------------
  // Chronologisch, älteste zuerst. Projekt-Ergebnisse stehen in der Projekt-Arena.
  // art: 'pokal' | 'urkunde' | 'medaille' | 'stern'
  // Ausbildung wieder aufnehmen? Diese Zeile ganz oben in die Liste einfügen:
  // { titel: 'Kaufmann im Einzelhandel', jahr: '2012', art: 'urkunde', text: 'Abgeschlossene Ausbildung bei der Konsumgenossenschaft Leipzig eG.' },
  erfolge: [
    { titel: 'Bachelor Business Administration', jahr: '2020', art: 'urkunde', text: 'Berufsbegleitend an der FOM Hochschule Leipzig, vier Jahre abends neben Messungen und Gutachten im Ingenieurbüro.' },
    { titel: 'Master Wirtschaftspsychologie', jahr: '2024', art: 'urkunde', text: 'Berufsbegleitend an der FOM Hochschule Leipzig, neben dem Job als Risk Manager.' },
    { titel: 'Dozent an der FOM', jahr: 'seit 2025', art: 'pokal', text: 'Data Literacy und ab dem kommenden Semester Quantitative Datenanalyse mit R.' }
  ],

  // ---------------- Toms Haus (Baustelle auf dem Marktplatz) ----------------
  // Wird mit jedem besuchten Gebäude weiter saniert (0 bis 3 Gebäude besucht).
  // Die ersten drei Texte sind Spiel-Erzählung, der letzte ist Toms echte Geschichte.
  haus: {
    name: 'Toms Haus',
    stufen: [
      'Ein ziemlich altes Haus. Hier steht eine Sanierung an! Mit jedem Gebäude, das du besuchst, geht es auf der Baustelle ein Stück voran.',
      'Es tut sich was auf der Baustelle: Gerüst und Dach sind da. Noch zwei Gebäude!',
      'Frischer Putz, neue Fenster. Noch ein Gebäude, dann ist das Haus fertig.',
      'Fertig saniert! Was ich nicht kann, bringe ich mir bei: Alles, was für die energetische Sanierung meines Hauses nötig war, habe ich mir selbst erarbeitet. Genau wie Python, R und SQL.'
    ]
  },

  // ---------------- Schluss ----------------
  schluss: {
    titel: 'Der Weg geht weiter',
    text: 'Danke, dass du dich in meiner Lernwelt umgesehen hast! Hier endet die Karte, aber nicht der Weg. Wenn du magst, lass uns auf LinkedIn vernetzen und schauen, wohin er als Nächstes führt.'
  }
};
