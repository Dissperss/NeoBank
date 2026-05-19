# NeoBank

Современное банковское приложение на React, TypeScript и Vite.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Form Management**: React Hook Form + Zod validation
- **State Management**: Zustand (persist middleware)
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
├── app/                   # App initialization, providers, routes
│   └── layouts/           # Layouts (MainLayout с session resume)
├── entities/              # Business entities
│   └── application/       # Application state, types, step routing
│       ├── lib/           # stepToRoute, stepDisplay
│       ├── model/         # Zustand store (persist)
│       └── types/         # Enums, interfaces
├── features/              # User actions
│   ├── prescoring/        # Credit card prescoring form
│   ├── scoring/           # Scoring form (personal + employment)
│   ├── offerSelection/    # Offer selection & confirmation
│   ├── document/          # Payment schedule, document flow
│   ├── sign/              # Document signing
│   └── code/              # Code verification (4-digit input)
├── pages/                 # Route pages
│   ├── loan/              # Loan/Credit card page
│   ├── scoring/           # Scoring page (guard + decision)
│   ├── offers/            # Offers page
│   ├── document/          # Document page (payment schedule)
│   ├── sign/              # Sign page
│   └── code/              # Code verification page
├── widgets/               # Composite UI blocks (Header, Footer)
└── shared/                # Shared utilities, UI components, API
    ├── api/               # API clients (application, document, form)
    ├── config/            # Configuration (common, document)
    └── ui/                # Reusable UI components
```

## Pages & Routing (Module 4)

| Route | Page | Description |
|---|---|---|
| `/` | Home | Главная страница |
| `/loan` | Loan | Оформление заявки (прескоринг) |
| `/loan/:id/offer` | Offer | Выбор кредитного предложения |
| `/loan/:id` | Scoring | Анкета для скоринга |
| `/loan/:id/document` | Document | График платежей и отправка документов |
| `/loan/:id/document/sign` | Sign | Подписание документов |
| `/loan/:id/code` | Code | Подтверждение по коду |

## Features

### Main Layout (Module 4)

- **Session Resume**: при перезагрузке страницы восстанавливает шаг из localStorage и редиректит на соответствующий роут
- **Step Guard**: защита от ручного ввода чужого applicationId в URL

### Prescoring Form (Module 3)

- **Amount Control**: Slider + numeric input (15 000 — 600 000 ₽)
- **Term Control**: Loan term selection
- **Contact Info**: Full contact form with validation (name, email, phone, birthdate, passport)
- **Validation**: Zod schema with real-time feedback
- **API Integration**: Submits to Credit Conveyor backend

### Offers Page (Module 4)

- **Offer List**: отображение доступных кредитных предложений
- **Offer Selection**: выбор предложения и отправка `submitApply`
- **Offer Confirmation**: экран "предварительное решение отправлено на почту"
- **Step management**: автоматическое переключение шага на SCORING

### Scoring Form (Module 4)

- **Personal Data**: пол, семейное положение, иждивенцы, паспортные данные
- **Employment Data**: статус занятости, ИНН, зарплата, должность, стаж
- **Date Input**: `<input type="date">` для дат (паспорт)
- **Validation**: Zod схема скоринга
- **API**: `PUT /application/registration/{id}`

### Document Page (Module 4)

- **Payment Schedule**: таблица с 6 колонками (номер, дата, платежи, долг)
- **Sorting**: сортировка по любому столбцу (asc/desc) через `useMemo`
- **Deny Modal**: модалка подтверждения отказа с двумя состояниями
- **Status Handling**: CC_DENIED / REQUEST_DENIED → `DeniedApplication`
- **Send Documents**: подтверждение и отправка документов
- **DocumentFormed**: экран успеха

### Sign Page (Module 4)

- **Agreement Text**: информационный текст о подписании
- **PDF Link**: ссылка на файл с информацией о карте
- **Checkbox**: согласие с условиями
- **API**: `POST /document/{id}/sign`

### Code Verification (Module 4)

- **4-digit Input**: 4 отдельных поля с автофокусом и переключением
- **Paste Support**: вставка кода целиком
- **Backspace Navigation**: возврат к предыдущему полю
- **Auto-submit**: автоматическая отправка при заполнении всех полей
- **API**: `POST /document/{id}/sign/code`
- **Success**: экран "Congratulations! You have completed your new credit card."

## State Management (Module 4)

- **Zustand + persist**: состояние приложения сохраняется в localStorage
- **Persisted fields**: applicationId, offers, selectedOffer, currentStep, maxReachedStep, agreementChecked
- **Step flow**: PRESCORING → OFFERS → SCORING → DOCUMENTS → SIGN → CODE → COMPLETE
- **setMaxReachedStep**: шаг сохраняется только вперёд (не откатывается)

### Step Display Mapping

| Step | Номер шага |
|---|---|
| PRESCORING | 1 |
| OFFERS | 1 |
| SCORING | 2 |
| DOCUMENTS | 3 |
| SIGN | 4 |
| CODE | 4 |
| COMPLETE | 5 |

## Shared UI Components

| Component | Module | Description |
|---|---|---|
| Tabs | 3 | Tab navigation with configurable content |
| Accordion | 3 | Expandable FAQ sections |
| Form Components | 3 | FormField, FormInput, FormSelect, FormLabel, FormWrapper |
| Divider | 3 | Visual separator |
| Tooltip | 3 | Hover tooltips |
| Button | 3 | Enhanced with loading state |
| Checkbox | 4 | Controlled checkbox |
| TableTitle | 4 | Sortable table header |
| ModalDeny | 4 | Deny confirmation (confirm + success states) |
| DeniedApplication | 4 | Отказ в кредите |
| ErrorMessage | 4 | Ошибка с кнопкой повтора |
| Loader | 4 | Индикатор загрузки |

## Sections (Home Page)

| Section | Description |
|---|---|
| Hero | Main landing banner |
| Features | Banking features showcase |
| Exchange Rates | Currency rates widget |
| News | Financial news feed with scrollable slider |
| Subscribe | Email subscription form with validation |
| Map | Office locations |
| Header/Footer | Navigation and footer |

## Backend Services (Docker Compose)

| Service | Description |
|---|---|
| Gateway | API Gateway (port 8080) |
| Application | Main application service |
| Conveyor | Credit processing pipeline |
| Deal | Deal management (PostgreSQL) |
| Dossier | Customer dossier service (email sending) |
| Audit | Audit logging (Redis) |
| Kafka | Message broker |
| Zookeeper | Kafka coordination |

## API Endpoints (Module 4)

| Method | Endpoint | Feature |
|---|---|---|
| POST | `/application` | Подача заявки (прескоринг) |
| POST | `/application/apply` | Выбор предложения |
| PUT | `/application/registration/{id}` | Отправка скоринговой анкеты |
| GET | `/admin/application/{id}` | Получить статус + график платежей |
| POST | `/deny/{id}` | Отклонить заявку |
| POST | `/document/{id}` | Подтвердить документы |
| POST | `/document/{id}/sign` | Подписать документы |
| POST | `/document/{id}/sign/code` | Подтвердить код |

## Testing

```bash
# Run all tests
npm test

# Run specific test file
npx vitest run src/features/prescoring/ui/PrescoringForm.test.tsx

# Watch mode
npx vitest
```

- **Framework**: Vitest + @testing-library/react
- **20 test files, 80 tests**
- **Тестируемые компоненты**:
  - Prescoring Form, Scoring Form, Offers List/Page
  - Code Input/Confirm/Completed
  - Sign Docs, Payment Schedule, DocumentFormed
  - DeniedApplication, ModalDeny, ScoringDecision, OfferConfirmation
  - Store, stepToRoute, AmountControlSlider/Result
  - HomePage (интеграционные)

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run test` | Run all tests |
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
