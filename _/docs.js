const source = document.getElementById("btn_source");
const preview = document.getElementById("btn_preview");

const inputText = document.getElementById("btn_text");
const inputGameLink = document.getElementById("btn_game_link");
const inputExtraText = document.getElementById("btn_extra_text");

const selectIcon = document.getElementById("btn_icon");
const selectSize = document.getElementById("btn_size");
const selectTheme = document.getElementById("btn_theme");

const getClassName = function () {
  let classNames = ["xcg"];

  if (selectIcon.value) {
    classNames.push(selectIcon.value);
  }
  if (selectSize.value) {
    classNames.push(selectSize.value);
  }
  if (selectTheme.value) {
    classNames.push(selectTheme.value);
  }

  return classNames.join(" ");
};

const getButtonText = function () {
  return inputText.value;
};
const getButtonHref = function () {
  return inputGameLink.value;
};
const getButtonExtraText = function () {
  return inputExtraText.value ? `<i>${inputExtraText.value}</i>` : "";
};

const getButtonTemplate = function () {
  return `
  <a class="${getClassName()}" target="_blank" href="${getButtonHref()}">
    <b>${getButtonText()}</b>${getButtonExtraText()}
  </a>
`;
};

const genButton = function() {
  preview.innerHTML = getButtonTemplate();
  source.innerText = getButtonTemplate();
}

inputText.oninput = genButton
inputText.onchange = genButton
inputExtraText.oninput = genButton
inputExtraText.onchange = genButton
selectIcon.onchange = genButton
selectSize.onchange = genButton
selectTheme.onchange = function () {
  preview.classList.remove('dark', 'light')
  preview.classList.add(selectTheme.value)
  genButton()
};


genButton()
