# NeoBank

Modern banking application built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Architecture**: Feature-Sliced Design

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app/           # App initialization, providers, routes
├── entities/      # Business entities
├── features/      # User actions
├── pages/         # Route pages
├── widgets/       # Composite UI blocks
└── shared/        # Shared utilities, UI components, API
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format with Prettier |
