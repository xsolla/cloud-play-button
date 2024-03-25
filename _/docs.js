const XCG_CDN_CSS_FILE = 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/button/src/button.min.css'

const styleSource = document.getElementById("style_source");
const buttonSource = document.getElementById("button_source");
const buttonPreview = document.getElementById("button_preview");

const inputText = document.getElementById("button_text");
const inputLink = document.getElementById("button_link");
const inputExtraText = document.getElementById("button_extra_text");

const selectIcon = document.getElementById("button_icon");
const selectSize = document.getElementById("button_size");
const selectTheme = document.getElementById("button_theme");
const selectRadius = document.getElementById("button_radius");
const selectTarget = document.getElementById("button_target");

const getClassName = function () {
  const xcg = "xcg-btn";
  const prefix = xcg + '-';

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
  return inputText.value;
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

const getStyleTemplete = function () {
  return `<link rel="stylesheet" href="${XCG_CDN_CSS_FILE}">`;
};

const build = function () {
  const styleTemplate = getStyleTemplete();
  const buttonTemplate = getButtonTemplate();
  buttonSource.value = buttonTemplate;
  buttonPreview.innerHTML = buttonTemplate;
  styleSource.innerHTML = styleTemplate;
};

inputText.oninput = build;
inputText.onchange = build;
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
styleSource.onclick = function () {
  styleSource.select();
};

build();
