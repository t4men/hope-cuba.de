# Hope Cuba – statische Website für STRATO (v1.0)

## Ergebnis
- Vollständig statische HTML-/CSS-/JS-Website; **kein PHP, Node, React-Server, Datenbank oder Lovable** auf Strato erforderlich.
- Sprachen DE/EN/ES, 13 Seitentypen je Sprache, zusätzlich `/presse/` als Facebook-Medienkit-URL.
- Übernommene Textbausteine aus dem hochgeladenen Lovable-Quellcode sowie den beiden Änderungsaufträgen.
- Alle Bilder lokal im Paket (WebP), Original-Logos als PNG im Presse-Download-Bereich.
- Barrierearme Navigation, Mobile-Menü, Sitemap, Canonical/hreflang, robots.txt und Impressum/Datenschutz als ENTWÜRFE.
- Kein Tracking, keine externen Skripte oder Google Fonts. Kontakt über `mailto:` (öffnet das E-Mail-Programm; kein Form-Backend).

## In 7 Schritten auf STRATO veröffentlichen
1. Im STRATO Kunden-Login unter **Domains / Hosting / FTP** deine Webspace-Zugangsdaten finden; bei Bedarf FTP/SSH-Benutzer einrichten.
2. Mit WinSCP oder FileZilla **SFTP** wählen (wenn im Paket verfügbar; sonst STRATO-FTP mit TLS/FTPS). Verbinden.
3. Unter **Domainverwaltung** kontrollieren, auf welches Verzeichnis `www.hope-cuba.org` zeigt, z. B. `/hope-cuba/` oder das Webspace-Stammverzeichnis. Die genaue Pfadzuordnung variiert je Hosting-Paket.
4. Backup der bisherigen Dateien anfertigen. **Nicht** den Lovable-DNS-Eintrag blind löschen oder eine vorhandene Website ohne Backup überschreiben.
5. **Den Inhalt des Ordners `strato-upload`** in das zugeordnete Domain-Verzeichnis kopieren (inkl. `.htaccess`, `assets`, `de`, `en`, `es`, `presse`, `index.html`). **Nicht** den Ordner `strato-upload` selbst als Unterordner hochladen.
6. SSL (Let's Encrypt / STRATO Zertifikat) für `hope-cuba.org` und `www.hope-cuba.org` prüfen; im Domainsystem www/non-www auf deine kanonische `www`-Domain weiterleiten.
7. Testen: `https://www.hope-cuba.org/`, `/de/`, `/en/`, `/es/`, `/presse/`, `/de/spenden/`, `/de/kontakt/`. Auf Mobilgerät testen. Prüfe 404, Seitenlinks, Download-Links und die Mailto-Zustellung.

## Vor dem Livegang besonders prüfen
- **Vereinsstatus:** Darstellung in Gründung; keine Eintragung und keine Gemeinnützigkeit behaupten. Eintragungs-/Steuerstatus muss später redaktionell aktualisiert werden.
- **Medienrechte:** Die Gruppen-Hero-Grafik ist KI-generiert und darf nicht als authentisches gemeinsames Gruppenfoto der Helfer bezeichnet werden. Im alt-Text als Illustrationsmotiv markiert. Personenfotos der Projekte nur mit Einwilligungen veröffentlichen; die in diesem Paket enthaltenen Bildplakate sind von dir bereitgestellt, zusätzliche Freigaben vor Livegang prüfen.
- **E-Mail:** Kontaktformular nutzt `mailto:hope-cuba@outlook.com` gemäß hochgeladenem Satzungsentwurf. Vor Livegang Zustellbarkeit bestätigen oder in `assets/site.js` und den HTML-Dateien durch funktionierende E-Mail ersetzen. Kein Form-Datentransfer ohne E-Mail-Client.
- **Zahlungswege:** Keine Bankdaten und keine BTC-Spenden aktiviert. Die Datei `assets/data/site-config.json` dokumentiert den Startstatus. **Alle Zahlungen erst nach Bestätigung von legalem Zahlungsempfänger, verifiziertem Bankkonto/Bitcoin-Wallet und Buchhaltung freischalten**; dabei sichtbare Seiten und Dokumentation anpassen. Ein Umschalten in JSON allein schaltet **nicht** die UI frei (absichtlich kein ungeprüfter Zahlungs-CTA).
- **Bitcoin-QR:** Nicht aus KI-Bildern als produktive Zahladresse übernehmen. Vor Freischaltung echten QR aus exakt bestätigter Adresse erstellen und mit einer Wallet prüfen.
- **Satzungs-PDFs:** Im Lovable-Export waren nur `.asset.json`-Verweise, **keine Original-PDFs**. Satzungsinhalte sind aus dem Quellcode als HTML eingebaut. Keine defekten PDF-Downloads.
- **Impressum/Datenschutz:** Von der verantwortlichen Person vor Veröffentlichung auf Hosting, Rechtsstatus, Kontakt, Bildrechte, Strato-Logs und mögliche externe Dienste prüfen.
- **Kontaktformulare:** Ohne Server funktionieren nur Mailto-Vorlagen, keine automatische Inbox-Zustellung oder Spam-Schutz erforderlich. Für echte Webformulare später Strato-Formularservice oder DSGVO-konformen Backend-Endpunkt einrichten.
- **Haupt-Hero:** Keine eingebauten Text-/Logo-Elemente im Hero-Bild. Text wird als HTML gesetzt. Medienkit-Hero ist ein **illustratives KI-Motiv**, kein gemeinsames Originalfoto.

## Projektstruktur
`index.html` Startseite; `/de/`, `/en/`, `/es/` lokalisierte Seiten; `/presse/` Medienkit für Facebook; `assets/site.css` Styles; `assets/site.js` Kontakt/Mobile-Menu; `assets/img/` optimierte Bilder; `downloads/` genehmigungspflichtige Presse-Dateien; `sitemap.xml` Suchmaschinen; `.htaccess` Apache-Basisregeln.

## Aktualisierung
Texte können direkt im jeweiligen `index.html` bearbeitet werden. Für vollständige Wiederholbarkeit liegen das Python-Buildskript und die JSON-Übersetzungen im zusätzlichen Source-Paket bei.
