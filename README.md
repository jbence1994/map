map
=======

### Configurable Leaflet map template

[![Continuous Integration](https://github.com/jbence1994/map/actions/workflows/build.yaml/badge.svg)](https://github.com/jbence1994/map/actions/workflows/build.yaml)

Prerequisites
-------------

- [Bun](https://bun.com/get)

Run project locally
-------------------

### Installing project dependencies

```bash
bun install
```

- Be sure
    - to copy `.env.example` to `.env.local` and update it with your local settings parameters before running the
      application.
    - to copy `coordinates.example.json` to `coordinates.json` and update it with your coordinates for displaying on the
      map and follow the instructions in the TODO comment on line 7 in `App.tsx`.

### Starting application with Bun:

```bash
bun run dev
```

#### To view the application, open [http://localhost:3000](http://localhost:3000) in your web browser.
