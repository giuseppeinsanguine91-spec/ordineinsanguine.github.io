# Studio Legale Ordine Insanguine - Sito web

## Come pubblicare gratis su GitHub Pages

1. Apri il repository `ordineinsanguine.github.io`
2. Clicca **Add file** → **Upload files**
3. Carica tutti i file e le cartelle contenuti in questo pacchetto ZIP
4. Clicca **Commit changes**
5. Vai su **Settings** → **Pages**
6. In **Build and deployment**, scegli:
   - Source: **GitHub Actions** se disponibile, oppure
   - Source: **Deploy from a branch**
7. Se scegli branch:
   - Branch: `main`
   - Folder: `/root`
8. Salva.

Nota: questo progetto usa Vite/React. Per pubblicazione statica automatica può essere utile usare GitHub Actions. Se vuoi, posso preparare anche il file `.github/workflows/deploy.yml`.
