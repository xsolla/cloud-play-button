const BUTTON_CDN_SRC = "https://cdn.xsolla.net/cloud-gaming-bucket-prod/button/src/";
const BUTTON_CDN_CSS_FILE = BUTTON_CDN_SRC + "button.min.css";
const BUTTON_CDN_JS_FILE = BUTTON_CDN_SRC + "button.min.js";

const bundleSource = document.getElementById("bundle_source");
const buttonSource = document.getElementById("button_source");
const buttonPreview = document.getElementById("button_preview");

const inputLink = document.getElementById("button_link");
const inputExtraText = document.getElementById("button_extra_text");

const selectIcon = document.getElementById("button_icon");
const selectSize = document.getElementById("button_size");
const selectTheme = document.getElementById("button_theme");
const selectRadius = document.getElementById("button_radius");
const selectTarget = document.getElementById("button_target");

const getClassName = function () {
  const xcg = "xcg-btn";
  const prefix = xcg + "-";

  let classNames = [xcg];

  if (selectIcon.value) {
    classNames.push(prefix + selectIcon.value);
  }
  if (selectSize.value) {
    classNames.push(prefix + selectSize.value);
  }
  if (selectTheme.value) {
    classNames.push(prefix + selectTheme.value);
  }
  if (selectRadius.value) {
    classNames.push(prefix + selectRadius.value);
  }

  return classNames.join(" ");
};

const getButtonText = function () {
  return "Play Now";
};
const getButtonHref = function () {
  return inputLink.value;
};
const getButtonExtraText = function () {
  return inputExtraText.value ? `<i>${inputExtraText.value}</i>` : "";
};
const getButtonTarget = function () {
  return selectTarget.value;
};

const getButtonTemplate = function () {
  return `<a class="${getClassName()}" href="${getButtonHref()}" target="${getButtonTarget()}">
  <b>${getButtonText()}</b>${getButtonExtraText()}
</a>
`;
};

const getSourceTemplate = function () {
  const link = `<link rel="stylesheet" href="${BUTTON_CDN_CSS_FILE}" />`;
  const script = `<script src="${BUTTON_CDN_JS_FILE}" defer></script>`;
  return `${link}\n${script}`;
};

const build = function () {
  const sourceTemplate = getSourceTemplate();
  const buttonTemplate = getButtonTemplate();
  bundleSource.value = sourceTemplate;
  buttonSource.value = buttonTemplate;
  buttonPreview.innerHTML = buttonTemplate;
  if (typeof window.animateCloudPlayButton === "function") {
    window.animateCloudPlayButton();
  }
};

inputLink.oninput = build;
inputLink.onchange = build;
inputExtraText.oninput = build;
inputExtraText.onchange = build;
selectIcon.onchange = build;
selectSize.onchange = build;
selectTheme.onchange = build;
selectRadius.onchange = build;
selectTarget.onchange = build;

selectTheme.onchange = function () {
  const theme = selectTheme.value || "light";
  buttonPreview.classList.remove("dark", "light");
  buttonPreview.classList.add(theme.includes("dark") ? "dark" : "light");
  build();
};

buttonSource.onclick = function () {
  buttonSource.select();
};
bundleSource.onclick = function () {
  bundleSource.select();
};

build();
