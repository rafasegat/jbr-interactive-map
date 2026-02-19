# JBR Interactive Map

An interactive Mapbox GL-based map application built with React and TypeScript for RPS. The map allows users to explore different project topics, view geographic layers, and access detailed information about the rail development.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 14+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Setup

**⚠️ Important: Mapbox Token Required**

1. Copy the environment example file:

   ```bash
   cp .env.example .env
   ```

2. Get a Mapbox access token from: https://account.mapbox.com/access-tokens/

3. Add your token to the `.env` file:
   ```bash
   VITE_MAPBOX_ACCESS_TOKEN=pk.your_actual_token_here
   ```

**Note**: Never commit your `.env` file to version control! It's already in `.gitignore`.

### Development

```bash
npm run start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads when you make changes.

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder. The build is optimized and ready for deployment.

### Preview Production Build

```bash
npm run preview
```

Locally preview the production build before deploying.

---

## 🏗️ Architecture

### Tech Stack

- **React 17** - UI framework
- **TypeScript** - Type safety and developer experience
- **Mapbox GL JS 2.2.0** - Interactive map rendering
- **Vite** - Build tool and development server
- **SCSS** - Styling with variables and nesting
- **Context API** - Global state management

## 🗺️ Map Configuration

### Mapbox Setup

The application uses environment variables for the Mapbox access token (for security).

**Setup:**

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Get your token from [Mapbox](https://account.mapbox.com/access-tokens/)

3. Add it to your `.env` file:
   ```bash
   VITE_MAPBOX_ACCESS_TOKEN=pk.your_token_here
   ```

The token is configured in `src/helpers/constants.tsx`:

```typescript
export const appMetadata = {
  map: {
    accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '',
    defaultCenter: [150.58141, -35.00931],
    defaultZoom: 13,
    // ...
  },
};
```

### Adding New Topics

1. Create a new file in `src/helpers/topics/` (e.g., `my-topic.tsx`)
2. Define filters with GeoJSON data:

```typescript
export const myTopicFilters = [
  {
    title: 'Layer Name',
    value: 'layer-id',
    orderLayout: 1,
    geojson: [
      {
        type: 'fill',
        source: geoJsonData,
        paint: { 'fill-color': '#ff0000' },
      },
    ],
    legend: [
      {
        color: '#ff0000',
        label: 'Description',
      },
    ],
  },
];
```

3. Add topic to `appMetadata.topics` in `constants.tsx`

### GeoJSON Data

Place GeoJSON files in `public/data/geojson/[topic-name]/` and reference them in topic filter configurations.

---

**Project Info:**

- GitHub: https://github.com/Jubilee-Solutions/jbr-interactive-map
- Built with: React + TypeScript + Mapbox GL
- Version: Latest
