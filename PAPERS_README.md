# Past Conference 2024 - Papers List

## Implementacija

### Struktura podataka

**Fajl:** `lib/papers-data.ts`

```typescript
export interface Paper {
  id: string;        // "001", "002", etc.
  title: string;     // Pun naslov papera
  authors: string;   // Lista autora
}
```

### Funkcionalnosti

1. **131 papera** sa kompletnim podacima (naslov + autori)
2. **Grid layout** - 2 kolone na desktop-u, 1 na mobile-u
3. **Profesionalni dizajn** kao na starom sajtu:
   - PAPER 001 badge
   - Pun naslov papera
   - Lista autora
   - Download PDF akcija

### Dizajn karakteristike

- **Grid layout** (lg:grid-cols-2) - ne previše dugačka lista
- **Kompaktne kartice** sa svim informacijama
- **Hover efekti** - lift up animation
- **Gradient badge** za broj papera
- **Responsive** - prilagođen za sve ekrane
- **Smooth animacije** - staggered entrance
- **Ispravni linkovi** - `/future-bme-2026/files/...`

### Kako radi

1. Podaci se učitavaju iz `lib/papers-data.ts`
2. `getFilename(id)` funkcija mapira ID na filename
3. Grid prikazuje 2 papera po redu (desktop)
4. Svaki paper ima:
   - Badge sa brojem (PAPER 001)
   - Naslov (bold, hover purple)
   - Autore (gray text)
   - Download ikonu

### Primer papera

```
PAPER 005

THE INTEGRATION OF LEAN, GREEN AND SUSTAINABLE BUSINESS PRACTICES: 
FROM LITERATURE REVIEW TO THE DEVELOPMENT MODEL

Zorana Stanković, Milena Rajić, Peđa Milosavljević and Dragan Pavlović

[Download PDF]
```

## Ekstrakcija podataka

Podaci su izvučeni iz starog HTML sajta pomoću Python skripte koja parsira:
- Paper ID
- Naslov (sa HTML cleanup-om)
- Autore

Skripta: `/tmp/extract_papers.py`

## Build

```bash
npm run build
```

✅ Build uspešan - 131 paper prikazan na stranici!
