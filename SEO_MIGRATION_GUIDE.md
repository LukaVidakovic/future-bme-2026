# SEO Migration Guide - Future BME 2026

## ✅ Implementirano u kodu

### 1. 301 Redirects (next.config.ts)
Svi stari URL-ovi automatski preusmeravaju na nove:
- `/Submissions.html` → `/submissions`
- `/Committees.html` → `/committees`
- `/Registration.html` → `/registration`
- `/Topics.html` → `/topics`
- `/Event-Info.html` → `/event-info`
- `/Sponsors.html` → `/sponsors`
- `/Ethics.html` → `/ethics`
- `/index.html` → `/`
- itd.

**Status:** ✅ Implementirano (permanent: true = 301 redirect)

### 2. Canonical Tags
Automatski generisani kroz `metadataBase` u `app/layout.tsx`:
```typescript
metadataBase: new URL('https://future-bme.ftn.uns.ac.rs')
```

**Status:** ✅ Implementirano

### 3. Sitemap.xml
Sadrži SAMO nove rute (bez starih .html stranica):
- https://future-bme.ftn.uns.ac.rs/sitemap.xml

**Status:** ✅ Implementirano

### 4. Robots.txt
Pravilno konfigurisan za Google indexing:
- https://future-bme.ftn.uns.ac.rs/robots.txt

**Status:** ✅ Implementirano

---

## 📋 Koraci za Google Search Console (OBAVEZNO!)

### Korak 1: Resubmit Sitemap
1. Idi na: https://search.google.com/search-console
2. Odaberi property: `future-bme.ftn.uns.ac.rs`
3. Idi na **Sitemaps** (levi meni)
4. Unesi: `sitemap.xml`
5. Klikni **Submit**

**Rezultat:** Google će ponovo indeksirati sajt sa NOVIM rutama

---

### Korak 2: Request Indexing za nove rute
Za svaku novu rutu, zatraži brže indeksiranje:

1. Idi na **URL Inspection** (levi meni)
2. Unesi URL:
   - `https://future-bme.ftn.uns.ac.rs/`
   - `https://future-bme.ftn.uns.ac.rs/submissions`
   - `https://future-bme.ftn.uns.ac.rs/committees`
   - `https://future-bme.ftn.uns.ac.rs/registration`
   - `https://future-bme.ftn.uns.ac.rs/topics`
   - `https://future-bme.ftn.uns.ac.rs/event-info`
   - `https://future-bme.ftn.uns.ac.rs/sponsors`
   - `https://future-bme.ftn.uns.ac.rs/ethics`
   - `https://future-bme.ftn.uns.ac.rs/past-conferences/2024`
   - `https://future-bme.ftn.uns.ac.rs/past-conferences/2024/gallery`
3. Klikni **Request Indexing**

**Rezultat:** Google će prioritetno indeksirati nove rute

---

### Korak 3: Ukloni stare rute iz indeksa (OPCIONO ali preporučeno)
Ako Google još prikazuje stare .html rute:

1. Idi na **Removals** (levi meni)
2. Klikni **New request**
3. Unesi stare URL-ove:
   - `https://future-bme.ftn.uns.ac.rs/Submissions.html`
   - `https://future-bme.ftn.uns.ac.rs/Committees.html`
   - `https://future-bme.ftn.uns.ac.rs/Registration.html`
   - itd.
4. Odaberi **Temporarily remove URL**

**Rezultat:** Google će privremeno sakriti stare rute dok 301 redirects ne odrade trajni posao

---

## ⏱️ Koliko traje?

- **301 Redirects:** Odmah rade (čim deploy-ujete)
- **Google reindeksiranje:** 2-7 dana (sa Request Indexing)
- **Potpuno uklanjanje starih ruta:** 2-4 sedmice

---

## 🧪 Testiranje

### Test 1: Da li 301 redirects rade?
```bash
curl -I https://future-bme.ftn.uns.ac.rs/Submissions.html
```
**Očekivano:** `HTTP/1.1 301 Moved Permanently`

### Test 2: Da li canonical tag postoji?
Otvori bilo koju stranicu → View Source → traži:
```html
<link rel="canonical" href="https://future-bme.ftn.uns.ac.rs/submissions" />
```

### Test 3: Da li sitemap sadrži samo nove rute?
Otvori: https://future-bme.ftn.uns.ac.rs/sitemap.xml
**Očekivano:** Samo `/submissions`, `/committees`, itd. (BEZ .html)

---

## ⚠️ VAŽNO: Static Export Limitation

**PROBLEM:** Next.js `output: 'export'` **NE PODRŽAVA** `redirects()` funkciju!

### Rešenje za University Server:

Moraš kreirati `.htaccess` fajl (ako je Apache server) ili `_redirects` fajl (ako je Nginx):

#### Za Apache (.htaccess):
```apache
RewriteEngine On

# Redirect old HTML pages to new routes
RewriteRule ^Submissions\.html$ /submissions [R=301,L]
RewriteRule ^submissions\.html$ /submissions [R=301,L]
RewriteRule ^Committees\.html$ /committees [R=301,L]
RewriteRule ^committees\.html$ /committees [R=301,L]
RewriteRule ^Registration\.html$ /registration [R=301,L]
RewriteRule ^registration\.html$ /registration [R=301,L]
RewriteRule ^Topics\.html$ /topics [R=301,L]
RewriteRule ^topics\.html$ /topics [R=301,L]
RewriteRule ^Event-Info\.html$ /event-info [R=301,L]
RewriteRule ^event-info\.html$ /event-info [R=301,L]
RewriteRule ^Sponsors\.html$ /sponsors [R=301,L]
RewriteRule ^sponsors\.html$ /sponsors [R=301,L]
RewriteRule ^Ethics\.html$ /ethics [R=301,L]
RewriteRule ^ethics\.html$ /ethics [R=301,L]
RewriteRule ^index\.html$ / [R=301,L]
RewriteRule ^home\.html$ / [R=301,L]
RewriteRule ^Home\.html$ / [R=301,L]
```

#### Za Nginx (_redirects ili nginx.conf):
```nginx
rewrite ^/Submissions\.html$ /submissions permanent;
rewrite ^/submissions\.html$ /submissions permanent;
rewrite ^/Committees\.html$ /committees permanent;
rewrite ^/committees\.html$ /committees permanent;
rewrite ^/Registration\.html$ /registration permanent;
rewrite ^/registration\.html$ /registration permanent;
rewrite ^/Topics\.html$ /topics permanent;
rewrite ^/topics\.html$ /topics permanent;
rewrite ^/Event-Info\.html$ /event-info permanent;
rewrite ^/event-info\.html$ /event-info permanent;
rewrite ^/Sponsors\.html$ /sponsors permanent;
rewrite ^/sponsors\.html$ /sponsors permanent;
rewrite ^/Ethics\.html$ /ethics permanent;
rewrite ^/ethics\.html$ /ethics permanent;
rewrite ^/index\.html$ / permanent;
rewrite ^/home\.html$ / permanent;
rewrite ^/Home\.html$ / permanent;
```

---

## 📝 Checklist

- [x] 301 Redirects dodati u next.config.ts (NE RADI za static export!)
- [ ] Kreirati `.htaccess` ili `_redirects` fajl za server
- [x] Canonical tags (automatski kroz metadataBase)
- [x] Sitemap.xml sadrži samo nove rute
- [x] Robots.txt konfigurisan
- [ ] Submit sitemap u Google Search Console
- [ ] Request indexing za sve nove rute
- [ ] (Opciono) Temporary removal za stare rute
- [ ] Testirati 301 redirects na production serveru

---

## 🎯 Rezultat

Nakon implementacije:
✅ Google će prepoznati nove rute kao "glavne"
✅ Stare .html rute će automatski preusmeravati na nove
✅ SEO snaga će se preneti sa starih na nove rute
✅ Za 2-4 sedmice Google će prikazivati samo nove rute u rezultatima

---

**Datum kreiranja:** 2026-02-06
**Status:** Implementirano u kodu, potrebno deploy-ovati i konfigurirati server
