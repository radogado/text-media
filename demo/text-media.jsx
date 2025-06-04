/**
 * Text & Media React Components
 * Version: 2.0.9
 * 
 * This file contains React components that mirror the functionality of text-media.js
 * When updating this file, follow these steps:
 * 
 * 1. Check text-media.js for changes
 * 2. Update the version number above to match package.json
 * 3. Update the components to match new functionality
 * 4. Update the tests
 * 5. Update the documentation
 * 
 * Last synced with text-media.js version: 2.0.9
 * Last sync date: 2024-03-21
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

/**
 * Custom hook to handle image loading and placeholder functionality
 * Mirrors the vanilla JS initialization system
 */
const useTextMediaImage = (src, placeholder) => {
  const pictureRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const picture = pictureRef.current;
    const img = imgRef.current;
    if (!picture || !img) return;

    // Add placeholder class if placeholder is provided
    if (placeholder) {
      picture.classList.add('text-media__image-placeholder');
    }

    // Handle image loading
    const handleLoad = () => {
      picture.dataset.loaded = 'true';
      img.style.opacity = '1';
    };

    // Handle image error
    const handleError = () => {
      console.error(`Failed to load image: ${src}`);
    };

    // Add event listeners
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    // Set initial state
    if (img.complete) {
      handleLoad();
    } else {
      img.style.opacity = '0';
    }

    // Cleanup
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
      if (placeholder) {
        picture.classList.remove('text-media__image-placeholder');
      }
    };
  }, [src, placeholder]);

  return { pictureRef, imgRef };
};

/**
 * Text & Media Component
 * A flexible component for displaying text and media content in various layouts
 */
export const TextMedia = ({ 
  className = '', 
  children, 
  background,
  fixedBackground,
  theme = 'light',
  contain = false,
  limit = false,
  stacked = false,
  whiteBox = false,
  checkerboard = false,
  small = false,
  offset = false,
  offsetWideText = false,
  offsetBottom = false,
  stickTo = null
}) => {
  const classes = [
    'text-media',
    className,
    theme === 'dark' ? 'theme-dark' : '',
    fixedBackground ? 'text-media--fixed-bg' : '',
    contain ? 'text-media--contain' : '',
    limit ? 'text-media--limit' : '',
    stacked ? 'text-media--stacked' : '',
    whiteBox ? 'text-media--white-box' : '',
    checkerboard ? 'text-media--checkerboard' : '',
    small ? 'text-media--small' : '',
    offset ? 'text-media--offset' : '',
    offsetWideText ? 'text-media--offset-wide-text' : '',
    offsetBottom ? 'text-media--offset-bottom' : '',
    stickTo ? `text-media--stick-to-${stickTo}` : ''
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
    alt: PropTypes.string
  }),
  fixedBackground: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark', 'white']),
  contain: PropTypes.bool,
  limit: PropTypes.bool,
  stacked: PropTypes.bool,
  whiteBox: PropTypes.bool,
  checkerboard: PropTypes.bool,
  small: PropTypes.bool,
  offset: PropTypes.bool,
  offsetWideText: PropTypes.bool,
  offsetBottom: PropTypes.bool,
  stickTo: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

/**
 * Text content component for Text & Media
 */
export const TextMediaText = ({ 
  className = '', 
  children,
  align = 'left',
  background,
  fixedBackground
}) => {
  const classes = [
    'text-media__text',
    `align-${align}`,
    fixedBackground ? 'text-media--fixed-bg' : '',
    className
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

TextMediaText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right', 'middle', 'bottom', 'middle center']),
  background: PropTypes.shape({
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  fixedBackground: PropTypes.bool
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
  align = 'left',
  placeholderImage,
  background,
  fixedBackground,
  children
}) => {
  const { pictureRef, imgRef } = useTextMediaImage(src, placeholder);

  const classes = [
    'text-media__image',
    `align-${align}`,
    fixedBackground ? 'text-media--fixed-bg' : '',
    className
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
      <picture ref={pictureRef} style={{'--placeholder': placeholder}}>
        {placeholderImage && (
          <img 
            className="text-media__image-placeholder-image"
            src={placeholderImage}
            alt=""
            aria-hidden="true"
          />
        )}
        <img 
          ref={imgRef}
          src={src} 
          alt={alt} 
          width={width}
          height={height}
        />
      </picture>
      {children}
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
  align: PropTypes.oneOf(['left', 'center', 'right', 'middle', 'bottom']),
  placeholderImage: PropTypes.string,
  background: PropTypes.shape({
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  fixedBackground: PropTypes.bool,
  children: PropTypes.node
};

/**
 * Background component for displaying background images within TextMedia
 */
export const TextMediaBackground = ({
  className = '',
  src,
  placeholder,
  alt,
  placeholderImage
}) => {
  const { pictureRef, imgRef } = useTextMediaImage(src, placeholder);

  const classes = [
    'text-media__background',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <picture ref={pictureRef} style={{'--placeholder': placeholder}}>
        {placeholderImage && (
          <img 
            className="text-media__image-placeholder-image"
            src={placeholderImage}
            alt=""
            aria-hidden="true"
          />
        )}
        <img 
          ref={imgRef}
          src={src} 
          alt={alt} 
        />
      </picture>
    </div>
  );
};

TextMediaBackground.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  alt: PropTypes.string,
  placeholderImage: PropTypes.string
};

// Example usage:
/*
import { TextMedia, TextMediaText, TextMediaImage, TextMediaBackground } from './text-media';

function MyComponent() {
  return (
    <TextMedia 
      theme="dark"
      contain
      checkerboard
    >
      <TextMediaBackground
        src="background.jpg"
        placeholder="url(placeholder.jpg)"
        placeholderImage="placeholder.jpg"
        alt="Background"
      />
      <TextMediaText align="middle center">
        <h2>Welcome</h2>
        <p>This is a text section.</p>
      </TextMediaText>
      <TextMediaImage
        src="image.webp"
        placeholder="url(placeholder.png)"
        placeholderImage="placeholder.png"
        alt="Content"
        width={800}
        height={600}
        align="center"
      />
    </TextMedia>
  );
}
*/ 