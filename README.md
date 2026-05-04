# NeoBank

Modern banking application built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Form Management**: React Hook Form + Zod validation
- **Styling**: CSS Modules
- **SVG**: vite-plugin-svgr (React components)
- **Architecture**: Feature-Sliced Design
- **Backend**: Docker Compose (Credit Conveyor microservices)

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

# Start backend services (Docker)
docker-compose up -d
```

## Project Structure

```
src/
├── app/           # App initialization, providers, routes
├── entities/      # Business entities
├── features/      # User actions
│   └── prescoring/  # Credit card prescoring form
├── pages/         # Route pages
│   └── loan/        # Loan/Credit card page
├── widgets/       # Composite UI blocks
│   └── sections/  # Page sections (hero, features, news, etc.)
└── shared/        # Shared utilities, UI components, API
    ├── api/       # API clients (form, email)
    ├── config/    # Configuration (email, common)
    └── ui/        # Reusable UI components
```

## Pages

| Page | Description |
|------|-------------|
| Home | Main landing page with hero, features, news, subscribe, map sections |
| Loan | Credit card page with promo, tabs, instructions, and prescoring form |

## Features

### Loan Page (Module 3)

| Feature | Description |
|---------|-------------|
| Card Promo | Platinum credit card showcase with key conditions |
| Tabs | About card, Rates and conditions, Cashback, FAQ |
| Card Instruction | Step-by-step card activation guide |
| Prescoring Form | Credit application form with amount/term sliders and contact info |

### Prescoring Form

- **Amount Control**: Slider + numeric input (15 000 — 600 000 ₽)
- **Term Control**: Loan term selection
- **Contact Info**: Full contact form with validation (name, email, phone, birthdate, employment, income)
- **Validation**: Zod schema with real-time feedback
- **API Integration**: Submits to Credit Conveyor backend

### Shared UI Components (Module 3)

| Component | Description |
|-----------|-------------|
| Tabs | Tab navigation with configurable content |
| Accordion | Expandable FAQ sections |
| Form Components | FormField, FormInput, FormSelect, FormLabel, FormWrapper |
| Divider | Visual separator |
| Tooltip | Hover tooltips |
| Button | Enhanced with loading state |

## Sections

| Section | Description |
|---------|-------------|
| Hero | Main landing banner |
| Features | Banking features showcase |
| Exchange Rates | Currency rates widget |
| News | Financial news feed with scrollable slider |
| Subscribe | Email subscription form with validation |
| Map | Office locations |
| Header/Footer | Navigation and footer |

## Backend Services (Docker Compose)

| Service | Description |
|---------|-------------|
| Gateway | API Gateway (port 8080) |
| Application | Main application service |
| Conveyor | Credit processing pipeline |
| Deal | Deal management (PostgreSQL) |
| Dossier | Customer dossier service |
| Audit | Audit logging (Redis) |
| Kafka | Message broker |
| Zookeeper | Kafka coordination |

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
- **Credit Conveyor**: Local backend via Docker Compose (port 8080)

News data is refreshed every 15 minutes automatically.
