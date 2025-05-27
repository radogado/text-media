const ReactDemo = () => {
  return (
    <div>
      <h1>React Demo for Text & Media Component</h1>
      <div className="text-media">
        <div className="text-media__text">
          <h2>Welcome to Text & Media</h2>
          <p>This is a React demo of the Text & Media component. It combines text content with media elements in a responsive layout.</p>
        </div>
        <div className="text-media__media">
          <picture>
            <img src="https://picsum.photos/800/600" alt="Random demo image" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ReactDemo; 