(function (doc, win) {
  if (!doc || !win) {
    console.error("No document or window found.");
    return;
  }

  const animationDelay = 10000;
  const animationReadyClass = "xcg-btn-animation-ready";
  const animationSelectors = [".xcg-btn-animation-1", ".xcg-btn-animation-2", ".xcg-btn-animation-3"];
  const assetsCdn = "https://cdn.xsolla.net/cloud-gaming-bucket-prod/button/src/assets/";

  const animate = function () {
    if (!win.lottie) {
      console.error("Lottie not found.");
      return;
    }
    animationSelectors.forEach((animationSelector, animationIndex) => {
      doc.querySelectorAll(animationSelector).forEach((button) => {
        let animationTimer = null;
        const animationContainer = button.querySelector("b");
        const animationTheme = button.classList.contains("xcg-btn-light") ? "light" : "dark";
        const animationName = `animation-${animationTheme}-${animationIndex + 1}`;
        const animationPath = `${assetsCdn}${animationName}.json`;
        if (button.classList.contains(animationReadyClass)) {
          return;
        }
        try {
          const animation = win.lottie.loadAnimation({
            loop: false,
            autoplay: true,
            renderer: "svg",
            name: animationName,
            path: animationPath,
            container: animationContainer,
          });
          animation.addEventListener("data_ready", () => {
            button.classList.add(animationReadyClass);
          });
          animation.addEventListener("complete", () => {
            animationTimer = setTimeout(() => {
              animation.goToAndPlay(0);
            }, animationDelay);
          });
          button.addEventListener("mouseenter", () => {
            if (!animation.isPaused) {
              return;
            }
            if (animationTimer) {
              clearTimeout(animationTimer);
            }
            animation.goToAndPlay(0);
          });
        } catch (error) {
          console.error("Lottie error:", error);
        }
      });
    });
  };

  win.animateCloudPlayButton = animate;
  doc.addEventListener("DOMContentLoaded", animate);
})(document, window);
