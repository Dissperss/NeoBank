# NeoBank

Modern banking application built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **SVG**: vite-plugin-svgr (React components)
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
│   └── sections/  # Page sections (hero, features, news, etc.)
└── shared/        # Shared utilities, UI components, API
```

## Sections

| Section | Description |
|---------|-------------|
| Hero | Main landing banner |
| Features | Banking features showcase |
| Exchange Rates | Currency rates widget |
| News | Financial news feed with scrollable slider |
| Subscribe | Email subscription form |
| Map | Office locations |
| Header/Footer | Navigation and footer |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format with Prettier |

## Environment Variables

```env
VITE_NEWS_API_KEY=your_news_api_key
```

## API Configuration

The project uses external APIs:
- **News**: NewsAPI (https://newsapi.org)
- **Currency**: ExchangeRate-API (https://v6.exchangerate-api.com)

News data is refreshed every 15 minutes automatically.
