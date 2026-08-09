# Urban Heat Island Interactive Map

## Core Idea

Map temperature variation across city areas to show heat islands.

## MVP

- Use public temperature datasets
- Interactive map
- Layer toggling (temperature, precipitation, vegetation, etc.)
- City filters

## Tech Depth

- GeoJSON handling
- Spatial joins
- Geospatial queries
- Data cleaning pipeline
- Map tile optimization

## Scalable Version

- Real-time weather API integration
- Predictive model for heat zones
- Tree density correlation
- Municipal dashboard vision

## Local Setup

1. Follow setup instructions found in [frontend directory README](frontend/README.md)
2. Follow setup instructions found in [backend directory README](backend/README.md)
3. Register the pre-commit configuration with your local Git directory (run from the repository root):
```bash
poetry -C backend run pre-commit install
```
