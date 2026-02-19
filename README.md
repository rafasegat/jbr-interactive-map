# JBR Interactive Map

An interactive Mapbox GL-based map application built with React and TypeScript for the Jubilee Rail Project. The map allows users to explore different project topics, view geographic layers, and access detailed information about the rail development.

---

## 📚 Documentation

- **[Integration Guide](INTEGRATION.md)** - How to embed the map in your website
- **[Integration Demo](INTEGRATION_DEMO.html)** - Live example with multiple layout options
- **[Accessibility Documentation](ACCESSIBILITY.md)** - WCAG compliance and accessibility features

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
   REACT_APP_MAPBOX_ACCESS_TOKEN=pk.your_actual_token_here
   ```

**Note**: Never commit your `.env` file to version control! It's already in `.gitignore`.

### Development

```bash
npm run dev
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

### Project Structure

```
src/
├── components/          # React components
│   ├── Map/            # Main map component (TypeScript)
│   ├── MapLegend/      # Collapsible legend
│   ├── MapTopbar/      # Filters and map style tabs
│   ├── LeftSidebar/    # Topic navigation
│   ├── Modal/          # Modal dialogs
│   └── Icons/          # SVG icon components
├── helpers/            # Utility functions and constants
│   ├── constants.tsx   # App metadata and configuration
│   └── topics/         # Topic-specific filters and legends
├── context/            # React Context for state management
├── assets/             # Images, fonts, styles
└── types/              # TypeScript type definitions

public/
├── data/               # GeoJSON data files
│   └── geojson/        # Organized by topic
└── images/             # Image assets
```

---

## ✨ Features

### Interactive Map

- **Multiple Topics**: Concept design, traffic, noise, biodiversity, and more
- **Layer Management**: Toggle visibility of different geographic layers
- **Dual Map Styles**: Satellite and street map views
- **Collapsible Legend**: Shows active layers with color-coded icons
- **Reset to Default**: Quick button to restore default view and filters

### Navigation

- **Topic Selector**: Browse project topics with detailed descriptions
- **Previous/Next Navigation**: Move between topics sequentially
- **Breadcrumb Navigation**: Return to topic selection easily

### Responsive Design

- **Desktop Optimized**: Full sidebar with controls
- **Mobile Friendly**: Responsive layout adapts to small screens
- **Container Aware**: Map fills its parent container automatically

### Accessibility

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Attributes**: Proper labeling for screen readers
- **Focus Indicators**: Visible focus states for keyboard users
- **Reduced Motion Support**: Respects user's motion preferences
- See [ACCESSIBILITY.md](ACCESSIBILITY.md) for details

---

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
   REACT_APP_MAPBOX_ACCESS_TOKEN=pk.your_token_here
   ```

The token is configured in `src/helpers/constants.tsx`:

```typescript
export const appMetadata = {
  map: {
    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '',
    defaultCenter: [150.58141, -35.00931],
    defaultZoom: 13,
    // ...
  },
};
```

**🔒 Security Note**: Never hardcode tokens in source code. Always use environment variables and keep `.env` files out of version control.

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

## 🎨 Styling

### SCSS Variables

Global variables are defined in `src/assets/style/variables.scss`:

```scss
$blue01: #146cfd;
$grey01: #091e42;
$spacing-4: 1rem;
// ...
```

### Component Styles

Each component has its own `.scss` file co-located with the TypeScript file:

```
MapLegend/
  ├── MapLegend.tsx
  └── MapLegend.scss
```

### Theming

To customize colors, update variables in `variables.scss` and rebuild.

---

## 🔧 Configuration Files

### `vite.config.ts`

- Build configuration
- Output directory: `build`
- Path aliases for cleaner imports

### `tsconfig.json`

- TypeScript compiler options
- Path mappings
- Type checking configuration

### `vercel.json`

- Deployment configuration for Vercel
- Specifies `build` as output directory

---

## 📦 Deployment

### Build Process

```bash
npm run build
```

Creates production-ready files in the `build` directory:

- Minified JavaScript with content hashes
- Optimized CSS
- All assets copied from `public`

### Vercel Deployment

The project is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Vercel auto-detects the Vite configuration
3. Build command: `npm run build`
4. Output directory: `build` (specified in `vercel.json`)

### Other Hosting Platforms

Serve the `build` directory with any static hosting:

- **Netlify**: Drag and drop the `build` folder
- **AWS S3**: Upload to S3 bucket with static website hosting
- **GitHub Pages**: Use `gh-pages` package
- **Custom Server**: Serve `build` directory with nginx/Apache

---

## 🧪 Development Guidelines

### Code Quality

- **TypeScript**: All new components should use TypeScript
- **ESLint**: Run `npm run lint` to check code quality
- **Formatting**: Consistent formatting with Prettier (if configured)

### Component Guidelines

1. **Functional Components**: Use function components with hooks
2. **Type Safety**: Define proper interfaces for props
3. **Performance**: Use `React.memo` for expensive renders
4. **Accessibility**: Include ARIA attributes and keyboard support

### State Management

- **Local State**: Use `useState` for component-specific state
- **Global State**: Use Context API for app-wide state
- **Memo**: Memoize expensive computations with `useMemo`

### Testing

Currently, testing setup includes:

- React Testing Library
- Jest

Add tests by creating `*.test.tsx` files next to components.

---

## 📝 Recent Improvements

### Code Cleanup (Latest)

- ✅ Removed all commented/unused code
- ✅ Converted Map component to TypeScript
- ✅ Cleaned up CSS rules
- ✅ Documented localStorage decision
- ✅ Made layout fully container-aware
- ✅ Added comprehensive accessibility features
- ✅ Created integration documentation and demo

### Technical Debt Addressed

- Removed unused `ZoneSelector` component references
- Cleaned up commented Vite plugins
- Removed legacy localStorage code
- Fixed mobile responsive height (now uses vh instead of fixed px)

---

## 🐛 Troubleshooting

### Map Not Displaying

- Check console for Mapbox token errors
- Verify container has a defined height
- Ensure GeoJSON files are accessible

### Build Errors

- Clear cache: `rm -rf node_modules dist && npm install`
- Check Node.js version (14+ required)
- Verify all dependencies are installed

### Type Errors

- Run `npm run type-check` (if configured)
- Check `tsconfig.json` for proper paths
- Ensure all imports are typed correctly

---

## 📄 License

This project is proprietary software developed by Jubilee Digital for the Jubilee Rail Project. All rights reserved.

---

## 🤝 Contributing

For internal development:

1. Create a feature branch from `main`
2. Make your changes with descriptive commits
3. Test thoroughly in development mode
4. Submit a pull request for review

---

## 📞 Support

For questions or issues:

- Check the documentation files
- Contact the Jubilee Digital development team
- Review browser console for error messages

---

**Project Info:**

- GitHub: https://github.com/Jubilee-Solutions/jbr-interactive-map
- Built with: React + TypeScript + Mapbox GL
- Version: Latest
