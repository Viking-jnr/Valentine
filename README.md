# Valentine's Day Card - React + Vite + Material UI

An interactive Valentine's Day card built with React, Vite, and Material UI.

## Features

- Interactive envelope animation
- Hover to reveal the card
- Fully responsive design
- Material UI components and styling
- Smooth animations and transitions

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
valentine-card/
├── src/
│   ├── components/
│   │   └── ValentineCard.jsx    # Main card component
│   ├── App.jsx                  # App wrapper with theme
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Material UI** - Component library and styling
- **Emotion** - CSS-in-JS styling solution

## Customization

You can customize the card message by editing the `ValentineCard.jsx` component:

```jsx
<CardBody isHovered={isHovered}>
  <p>To my Best Friend,</p>
  <p>
    Your custom message here...
  </p>
  <p>Happy Valentine's Day!</p>
</CardBody>
```

## License

MIT
