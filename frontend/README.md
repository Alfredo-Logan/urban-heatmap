## Frontend Setup

**Requirements:** Node.js (LTS version 24 recommended) and npm, both come bundled together.
Check what you have with `node -v` and `npm -v`. If you don't have Node installed,
grab it from https://nodejs.org (LTS version).

### Getting started

1. Clone the repo and navigate to the frontend directory:

```bash
   cd frontend
```

2. Install dependencies:

```bash
   npm install
```

3. Start the dev server:

```bash
   npm run dev
```

4. Open the URL shown in your terminal (usually `http://localhost:5173`) in your browser.

You should see the starter page. Changes you make to files in `src/` will
automatically refresh in the browser.

### Testing

To run the tests:

```bash
npm test
```

Or to test only a specific file (or files):

```bash
npm test filename
```

(Note the double dash when chaining more than one file together)

```bash
npm test -- filename1 filename2
```

## Resources & Documentation

[React docs (quickstart)](https://react.dev/learn)

[Vite's getting started guide](https://vite.dev/guide/)

[React Testing Library (RTL) intro](https://testing-library.com/docs/react-testing-library/intro/)
