# alpha-image-generator
# Alpha Image Generator

A small browser-based image/character generator that composes an alpaca from layered PNG assets.

This README documents the project structure, how the pieces fit together, and how to run and extend the project.

## Project overview

- Purpose: compose a layered alpaca image in the browser by swapping image parts (background, ears, hair, eyes, mouth, etc.).
- Output: a composited image shown in the page with options to randomize and download.

## Document structure

Root files

- `index.html` — main HTML page. Includes the preview area, buttons (Random / Download), and the `modifications` UI where parts and options are shown.
- `styles.css` — project styles and layout for the generator UI.
- `script.js` — main JavaScript that drives part selection, randomization, and download behavior (uses `html2canvas`).
- `README.md` — this document.

Asset folders

All asset images are under the `alpaca/` directory and organized by part type.

- `alpaca/backgrounds/` — background images (e.g. `blue70.png` used by default).
- `alpaca/ears/` — ear variants (e.g. `tilt-backward.png`).
- `alpaca/hair/` — hair variants (e.g. `bang.png`).
- `alpaca/neck/` — neck variants (e.g. `default.png`).
- `alpaca/eyes/` — eye variants (e.g. `default.png`).
- `alpaca/mouth/` — mouth variants (e.g. `eating.png`).
- `alpaca/leg/` — leg variants (e.g. `bubble-tea.png`).
- `alpaca/accessories/` — accessories (e.g. `headphone.png`).
- `alpaca/nose.png` — single nose image referenced directly in `index.html`.

Note: the above example filenames come from `index.html` and show the default parts the page references on load.

## How the layering works

The preview area in `index.html` contains a `.background` container. Inside it the HTML places multiple absolutely-positioned child containers (`.ears`, `.hair`, `.neck`, `.eyes`, `.mouth`, `.leg`, `.acce`) each holding an `<img>` tag. By swapping the `src` on those `<img>` elements, the composite alpaca changes. CSS positions them to stack and align.

Key DOM IDs used by the script (examples found in `index.html`):

- `#background` — background image element.
- `#ears`, `#hair`, `#neck`, `#eyes`, `#mouth`, `#leg`, `#acce` — elements for the parts that get swapped.

## Run / Preview locally

Easy options to view the project in your browser:

1. Open `index.html` directly in your browser (double-click the file). Some browsers block certain features when opened via `file://`, so if the download or script features are restricted, use a local server.

2. Start a simple static server (recommended). From the project root in a Bash shell you can run:

```

## Usage notes

- The page includes `html2canvas` (via CDN) to support downloading the composite area as an image.
- Buttons in the UI:
  - Random — picks random variants for each part.
  - Download — captures the preview area and downloads a PNG.
- To add new variants, drop PNG files into the appropriate `alpaca/<part>/` folder and update `script.js` if it contains hard-coded lists, or ensure the UI can detect and list them.

## Contract (brief)

- Inputs: PNG assets for each part placed in the `alpaca/` subfolders.
- Output: a composited PNG image shown in the browser and downloadable using the Download button.
- Error modes: missing asset files result in broken/missing images in the preview; running from `file://` may impact `fetch` or `html2canvas` functionality in some browsers.

## Edge cases and notes

- Ensure images have transparent backgrounds and consistent dimensions/alignment to layer correctly.
- Large image files may slow down rendering or downloads — prefer optimized PNGs or web-friendly formats.
- If you add many assets, consider changing `script.js` to dynamically enumerate available options (instead of hard-coded arrays) by using a build step or fetching a manifest.

## Extending the project

- Add a small manifest JSON (e.g. `assets.json`) listing available variants per part and fetch it from `script.js` to keep JS data-driven.
- Add UI controls to pick colors or swap multiple parts at once.

## Contributing

1. Fork or copy the project.
2. Add or optimize assets under the `alpaca/` folders.
3. Open a PR or submit changes.

## License

This repository has no license file. Add a `LICENSE` if you plan to open-source it. For private/personal projects, no action is required.
