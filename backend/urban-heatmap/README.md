## Backend Setup

**Requirements:** This project uses Poetry for package management. Install it with either:

- `curl -sSL https://install.python-poetry.org | python3 -`

or

- `pipx install poetry` (if you don't have pipx installed, get it from https://pipx.pypa.io/latest/how-to/install-pipx.html)

Verify the installation with `poetry --version`

### Getting Started

1. Clone the repo:
```bash
   git clone https://github.com/Alfredo-Logan/urban-heatmap
   cd backend/urban-heatmap/src/urban_heatmap
```

2. Install dependencies:
```bash
   poetry install
```

3. Start the server:
```bash
   poetry run uvicorn main:app --reload
```

4. Verify:

The server should open in `http://127.0.0.1:8000`. Check the Swagger UI documentation at `http://127.0.0.1:8000/docs`.
