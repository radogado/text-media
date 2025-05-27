# Text & Media Layout Component

A lightweight, responsive component for combining text and media content with various layout options.

## Features

- Responsive design
- Multiple layout options
- Support for images and videos
- Customizable themes
- Lightweight (2.5KB gzipped)
- No dependencies
- React version available

## Installation

```bash
npm install text-media
```

## Usage

### Basic Usage

```html
<div class="text-media">
  <div class="text-media__text">
    <h2>Your Title</h2>
    <p>Your content goes here.</p>
  </div>
  <div class="text-media__image">
    <picture>
      <img src="your-image.jpg" alt="Description">
    </picture>
  </div>
</div>
```

### React Version

The component is also available as a React component. You can use it in your React applications:

```jsx
import { TextMedia } from 'text-media-react';

function MyComponent() {
  return (
    <TextMedia>
      <TextMedia.Text>
        <h2>Your Title</h2>
        <p>Your content goes here.</p>
      </TextMedia.Text>
      <TextMedia.Image>
        <picture>
          <img src="your-image.jpg" alt="Description" />
        </picture>
      </TextMedia.Image>
    </TextMedia>
  );
}
```

### Live Demo

Check out the live demo at [https://example.com/demo](https://example.com/demo)

### React Demo

A React version of the demo is available in the `demo` directory. To run it:

1. Start a local server:
```bash
python3 -m http.server 8000
```

2. Open [http://localhost:8000/demo/react-demo.html](http://localhost:8000/demo/react-demo.html)

The React demo showcases:
- Component integration with React
- Responsive layout
- Image handling
- Custom styling

## Options

### Layout Options

- `text-media--reverse`: Reverses the order of text and media
- `text-media--stack`: Stacks text and media vertically
- `text-media--center`: Centers content vertically

### Theme Options

- `text-media--light`: Light theme
- `text-media--dark`: Dark theme
- `text-media--purple-background`: Purple background theme

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Build: `npm run build`

## License

MIT
