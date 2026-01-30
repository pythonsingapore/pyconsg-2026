# PyConSG 2026

PyConSG 2025 conference site 

# Adding content

Poor man static site generator...

## Modifying existing content

For example `index.html`
- edit `src/index.html`
- `./build.sh` / `./build.py`

## Adding new pages

For example `foobar.html`
- `touch src/foobar.html`
- edit `src/foobar.html`
- add `foobar.html` to `PAGES` in `build.sh` and `build.py`
- `./build.sh` / `./build.py`

