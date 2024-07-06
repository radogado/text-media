function copyButton(el, target, echo) {
  el.addEventListener("click", (event) => {
    window.getSelection().removeAllRanges(); // Clear previous clipboard
    var range = document.createRange();
    range.selectNode(target);
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
    } catch (err) {}
  });
}

document.querySelectorAll(".code").forEach(function (el) {
  el.insertAdjacentHTML("beforeend", "<button class='n-btn'>Copy</button>");
  copyButton(el.querySelector("button"), el.querySelector("pre"));
});

["css", "js"].forEach((el) => {
  fetch(`text-media.min.${el}.size`)
    .then((response) => response.text())
    .then(
      (text) =>
        (document.querySelector(`.resources [href="text-media.min.${el}"]`).dataset.size = `${parseFloat(
          text / 1024
        ).toFixed(1)} KB`)
    );
});

fetch(`package.json`)
  .then((response) => response.json())
  .then((text) => {
    document.querySelector("h1").dataset.version = text.version.split(".")[0] + "." + text.version.split(".")[1];
  });
