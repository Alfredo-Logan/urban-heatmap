# Urban Heat Island Interactive Map

## Project Overview

An interactive web map that visualizes temperature variation across a city to
highlight urban heat islands. These are areas where surfaces like pavement and rooftops
retain significantly more heat than vegetated or water-adjacent areas. Users
can explore temperature data layered on top of vegetation data, toggle layers
on and off, and filter by city to understand how urban layout correlates with
localized heat.

The project combines a geospatial data pipeline (cleaning and joining public
temperature and vegetation datasets) with an interactive map, and
serves as a vehicle for learning geospatial data handling, spatial queries,
and map performance optimization.

## Core Features (MVP)

- Ingest and clean public temperature datasets (satellite-derived and/or
  government sources, TBD)
- Interactive map built with Leaflet, showing temperature data spatially
- Layer toggling between temperature and vegetation data
- City filter to scope the map view to a selected city
- GeoJSON-based data handling between backend and frontend
- Spatial joins to associate temperature readings with city boundaries/zones

## Tech Stack

### Frontend

- **Vite** — build tooling and dev server
- **React** — UI framework
- **Tailwind CSS** — styling
- **Leaflet** + **React-Leaflet** — interactive map rendering, layers, and
  controls

### Backend/Database

- **FastAPI** (Python) — API layer serving map data, filters, and layer
  toggles
- **Poetry** — Python dependency and environment management
- **PostgreSQL** — primary data store
  - PostGIS extension is a candidate for spatial queries and joins, but not
    yet decided — alternative is handling spatial joins in Python/pandas
    before or after storage. **This should be one of the first technical
    decisions made, since it affects schema design, query patterns, and how
    data cleaning is structured.**

### Libraries & Frameworks

- **GeoJSON** as the interchange format for spatial data between backend and
  frontend
- Data cleaning/normalization pipeline (library **TBD** — e.g. **pandas/geopandas**)
  for ingesting and reconciling public temperature datasets
- Map tile optimization approach **TBD** — depends on data volume and whether
  tiles are pre-generated or served dynamically

### Testing

- **Vitest** + **React Testing Library** — frontend unit and component tests
- **Pytest** — backend unit and integration tests

## Project Structure

* **Data ingestion pipeline** — pulls raw data from public temperature
  (and vegetation) sources and lands it in a common working format
* **Data cleaning & normalization** — reconciles inconsistent formats,
  units, timestamps, and coverage gaps across data sources
* **Spatial join engine** — associates temperature/vegetation readings with
  city boundaries and geographic zones (approach TBD: PostGIS vs.
  application-layer joins)
* **GeoJSON data layer** — converts processed data into GeoJSON for
  frontend consumption
* **Map data API** — FastAPI endpoints serving map data, filtered/scoped
  by city and layer type
* **Interactive map interface** — Leaflet/React-Leaflet map rendering,
  pan/zoom, and base layer
* **Layer toggling system** — switches between temperature and vegetation
  overlays on the map
* **City filter system** — scopes the map view and underlying data query
  to a selected city
* **Map tile optimization** — handles performance for rendering
  potentially large geospatial datasets (strategy TBD: static
  pre-generated tiles vs. dynamic serving)

**Open questions to resolve early:**
- Data source(s) for temperature — satellite (e.g. MODIS land surface temp),
  government/city datasets, or a blend
- Whether to adopt PostGIS or handle spatial joins in the application layer
- Map tile strategy (static pre-generated vs. dynamic serving) once data
  volume is known
