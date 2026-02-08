# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio/hub website for "YAOKI" hosted on **GitHub Pages** at `yaoki.github.io`. Contains multiple independent mini-applications. All content is in Japanese.

## Development & Deployment

- **No build step, no package manager, no bundler.** Files are served as-is.
- **Deploy:** `git push origin master` — GitHub Pages serves directly from the master branch.
- **No tests or linting configured.**
- To preview locally, open any `index.html` in a browser or use a local HTTP server (e.g., `python3 -m http.server`).

## Architecture

Each subdirectory is a self-contained mini-app with its own `index.html`, styles, and scripts:

| Path | Description | Key Tech |
|------|-------------|----------|
| `/` (root) | Homepage — news table, links to sub-apps | Vanilla HTML/CSS |
| `/yaoki-books/` | Bookstore e-commerce mockup | Responsive CSS (breakpoints at 479px/480px+) |
| `/drawing/` | Interactive canvas drawing app | p5.js (bundled in `libraries/`) |
| `/ranking/` | Bar chart sales ranking visualization | p5.js + grafica.min.js |
| `/dmm-search/` | DMM product search tool (2 pages) | jQuery, Bootstrap 4 (CDN), DMM Affiliate API |

## Key Conventions

- **No npm/node** — third-party libraries are either bundled locally (`libraries/` dirs) or loaded via CDN.
- **Responsive design** — the bookstore CSS (`yaoki-books/css/yaoki-bookstore-main.css`) uses mobile-first media queries.
- **Commit messages** are written in Japanese.
- **API credentials** for DMM are embedded in `dmm-search/` HTML files (affiliate API, not secret keys).
