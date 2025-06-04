import React from 'react';
import PropTypes from 'prop-types';

/**
 * Text & Media Component
 * A flexible component for displaying text and media content in various layouts
 */
export const TextMedia = ({ 
  className = '', 
  children, 
  background,
  fixedBackground,
  theme = 'light'
}) => {
  const classes = [
    'text-media',
    className,
    theme === 'dark' ? 'theme-dark' : '',
    fixedBackground ? 'text-media--fixed-bg' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {background && (
        <div className="text-media__background">
          <picture style={{'--placeholder': background.placeholder}}>
            <img src={background.src} alt={background.alt} />
          </picture>
        </div>
      )}
      {children}
    </div>
  );
};

TextMedia.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  background: PropTypes.shape({
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  fixedBackground: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark'])
};

/**
 * Text content component for Text & Media
 */
export const TextMediaText = ({ 
  className = '', 
  children,
  align = 'left'
}) => {
  const classes = [
    'text-media__text',
    `align-${align}`,
    className
  ].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
};

TextMediaText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right', 'middle', 'bottom'])
};

/**
 * Image component for Text & Media
 */
export const TextMediaImage = ({ 
  className = '', 
  src,
  placeholder,
  alt,
  width,
  height,
  align = 'left'
}) => {
  const classes = [
    'text-media__image',
    `align-${align}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <picture style={{'--placeholder': placeholder}}>
        <img 
          src={src} 
          alt={alt} 
          width={width}
          height={height}
        />
      </picture>
    </div>
  );
};

TextMediaImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  align: PropTypes.oneOf(['left', 'center', 'right', 'middle', 'bottom'])
};

// Example usage:
/*
import { TextMedia, TextMediaText, TextMediaImage } from './text-media';

function MyComponent() {
  return (
    <TextMedia theme="dark">
      <TextMediaText align="middle">
        <h2>Welcome</h2>
        <p>This is a Text & Media component example.</p>
      </TextMediaText>
      <TextMediaImage
        src="image.webp"
        placeholder="url(placeholder.png)"
        alt="Example"
        width={800}
        height={600}
        align="middle"
      />
    </TextMedia>
  );
}
*/ 