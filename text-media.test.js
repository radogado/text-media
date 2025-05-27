// Basic test suite for text-media component
(function testSuite() {
  console.log("Running text-media test suite...");
  // Ensure placeholderImages is available in the global scope
  if (typeof window.placeholderImages !== 'function') {
    console.warn('placeholderImages is not available globally. Please expose it for testing or run tests in the same file.');
    return;
  }
  const tests = [
    {
      name: "placeholderImages should set dataset.loaded on complete images",
      run: () => {
        const img = document.createElement("img");
        const picture = document.createElement("picture");
        picture.appendChild(img);
        document.body.appendChild(picture);
        img.complete = true;
        window.placeholderImages();
        return picture.dataset.loaded === "true";
      }
    },
    {
      name: "placeholderImages should add text-media__image-placeholder class to pictures with --placeholder style",
      run: () => {
        const picture = document.createElement("picture");
        picture.style.setProperty("--placeholder", "url('test.jpg')");
        document.body.appendChild(picture);
        window.placeholderImages();
        return picture.classList.contains("text-media__image-placeholder");
      }
    }
  ];
  tests.forEach(test => {
    const result = test.run();
    console.log(`${test.name}: ${result ? "PASS" : "FAIL"}`);
  });
})(); 