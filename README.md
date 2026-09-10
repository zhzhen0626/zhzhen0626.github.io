# Zhen Zhang — Personal Website

Static homepage. Run `python3 -m http.server 8000` to preview locally.

## Asset organization

- `images/profile/`: profile photo and WeChat QR code
- `images/institutions/`: institution logos, named `<institution>-logo`
- `images/publications/<project>-<year>/`: paper figures (`overview.png`) and hover videos (`demo.mp4`)
- `images/favicon/`: current website icons
- `data/`: BibTeX source files
- `scripts/`: page interactions

Use lowercase, descriptive names with hyphens. When replacing or renaming an asset, update its references in `index.html`. Publication images have individual display sizes in HTML/CSS; keep those settings when replacing images.

BibTeX entries are displayed inline in `index.html`; the `.bib` files in `data/` are retained as source copies. Keep both in sync when changing citation metadata.
