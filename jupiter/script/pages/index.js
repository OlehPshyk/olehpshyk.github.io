const TITLE_ATTR = 'post-title';
const TEXT_ATTR = 'post-text';
const IMAGE_ATTR = 'post-image';

document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll(`[data-download-post]`);
  [...posts].forEach((container) => {
    const url = container.dataset['downloadPost'];

    const titleElement = container.querySelector(`[data-${TITLE_ATTR}]`);
    const textElement = container.querySelector(`[data-${TEXT_ATTR}]`);
    const imageElement = container.querySelector(`[data-${IMAGE_ATTR}]`);

    function interpolate(data) {
      const element = document.createElement('div');
      element.innerHTML = data;

      const title = element.querySelector('h1');
      if (title && titleElement) {
        titleElement.innerText = title.innerText;
      }

      const postImg = element.querySelector('.post-img img');
      if (postImg && imageElement) {
        imageElement.setAttribute('src', postImg.getAttribute('src'));
      } else if (imageElement && !imageElement.getAttribute('src')) {
        imageElement.style.display = 'none';
      }

      const text = element.querySelector('.post-text');
      if (text && textElement) {
        textElement.innerHTML = text.innerHTML;
      }
      onAfterPostRendered(container);
    }

    axios.get(url)
      .then(({ data }) => {
        interpolate(data);
      })
      .catch((error) => {
        console.log(`[Post load error] ${url} `, error);
      });
  });
});

const CARD_MAX_HEIGHT = 100;
function onAfterPostRendered(container) {
  const longTextElement = container.querySelector('[data-post-text]');
  shave(longTextElement, CARD_MAX_HEIGHT);
  const toggleElement = container.querySelector('[data-toggle-collapse]');
  if (toggleElement) {
    const shavedText = container.querySelector('[data-post-text] .js-shave');
    if (!shavedText) { toggleElement.style.display = 'none'; return; } 

    onToggleText(container, false);
    toggleElement.addEventListener('click', (e) => {
      e.preventDefault();
      const shavedText = container.querySelector('[data-post-text] .js-shave');
      const shaveChar = container.querySelector('[data-post-text] .js-shave-char');
      if (!shavedText) return; 
      let isExpanded = false;
      if (shavedText.style.display === "none") {
        shavedText.style.display = "block";
        shaveChar.style.display = 'none';
        isExpanded = true;
      } else {
        shavedText.style.display = "none";
        shaveChar.style.display = 'initial';
        isExpanded = false;
      }
      onToggleText(container, isExpanded);
    });
  }
}

function onToggleText(container, isExpanded) {
  const toggleButtonElement = container.querySelector('.f-text');
  if (!toggleButtonElement) return;
  if (isExpanded) {
    toggleButtonElement.innerText = toggleButtonElement.dataset.less;
  } else {
    toggleButtonElement.innerText = toggleButtonElement.dataset.more;
  }
}