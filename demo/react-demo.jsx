import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextMedia = ({ children, className = '', ...props }) => {
  return (
    <div className={`text-media ${className}`} {...props}>
      {children}
    </div>
  );
};

const TextMediaText = ({ children, className = '', ...props }) => {
  return (
    <div className={`text-media__text ${className}`} {...props}>
      {children}
    </div>
  );
};

const TextMediaImage = ({ children, className = '', ...props }) => {
  return (
    <div className={`text-media__image ${className}`} {...props}>
      {children}
    </div>
  );
};

const TextMediaBackground = ({ children, className = '', ...props }) => {
  return (
    <div className={`text-media__background ${className}`} {...props}>
      {children}
    </div>
  );
};

const TextMediaPicture = ({ 
  src, 
  alt, 
  width, 
  height, 
  placeholder, 
  sources = [], 
  className = '', 
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <picture 
      className={`text-media__image-placeholder ${className}`}
      style={{ '--placeholder': `url('${placeholder}')` }}
      data-loaded={isLoaded}
      {...props}
    >
      {sources.map((source, index) => (
        <source
          key={source.srcset}
          media={source.media}
          srcSet={source.srcset}
          style={{ '--placeholder': source.placeholder }}
        />
      ))}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </picture>
  );
};

TextMedia.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

TextMediaText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

TextMediaImage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

TextMediaBackground.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

TextMediaPicture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      srcset: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired
    })
  ),
  className: PropTypes.string
};

const ReactDemo = () => {
  return (
    <div>
      <h1>React Demo for Text & Media Component</h1>
      
      <TextMedia>
        <TextMediaText>
          <h2>Default</h2>
          <p>Basic text and media layout.</p>
        </TextMediaText>
        <TextMediaImage>
          <TextMediaPicture
            src="images/mobile-app-iphone-1.webp"
            alt="Mobile app screenshot"
            width={480}
            height={677.5}
            placeholder="images/mobile-app-iphone-1-placeholder.png"
          />
        </TextMediaImage>
      </TextMedia>

      <TextMedia className="theme-dark text-media--fixed-bg">
        <TextMediaBackground>
          <TextMediaPicture
            src="images/DSC00557.webp"
            alt="Background image"
            placeholder="images/DSC00557-.jpg"
            sources={[
              {
                srcset: "images/DSC00557-1024px.webp",
                media: "(max-width: 600px)",
                placeholder: "images/DSC00557-1024px-placeholder.webp"
              }
            ]}
          />
        </TextMediaBackground>
        <TextMediaText className="align-middle">
          <h2>Fixed Background with Responsive Image</h2>
          <p>This example shows how to use responsive images with placeholders.</p>
        </TextMediaText>
      </TextMedia>

      <TextMedia className="theme-dark text-media--contain text-media--white-box">
        <TextMediaImage className="align-middle align-center">
          <TextMediaPicture
            src="images/mobile-app-iphone-1.webp"
            alt="Mobile app screenshot"
            width={480}
            height={677.5}
            placeholder="images/mobile-app-iphone-1-placeholder.png"
            sources={[
              {
                srcset: "images/mobile-app-iphone-1-1024px.webp",
                media: "(max-width: 600px)",
                placeholder: "images/mobile-app-iphone-1-1024px-placeholder.webp"
              }
            ]}
          />
        </TextMediaImage>
        <TextMediaText className="align-middle">
          <h2>White Box with Responsive Image</h2>
          <p>This example demonstrates responsive images in a white box layout.</p>
        </TextMediaText>
      </TextMedia>
    </div>
  );
};

export default ReactDemo; 