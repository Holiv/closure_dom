const element = document.querySelector('h1');
(() => {
    document.querySelector('body').addEventListener("click", function () {
    element.style.color = "white";
  });
})();