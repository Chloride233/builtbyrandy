# builtbyrandy

Yuxuan Yang's bilingual portfolio for AI application engineering work.

## Structure

- `site/`: deployable static website
- `.github/workflows/pages.yml`: GitHub Pages deployment

The site has no build-time dependencies. GitHub Actions publishes `site/` directly.

## Local preview

```bash
python3 -m http.server 4174 --directory site
```

Then open `http://127.0.0.1:4174`.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages.
