import tokens from './tokens.js';
import olFromStyle from './ol.js';
import mapboxFromStyle from './mapbox.js';

const MAPTILER_STYLE = 'https://api.maptiler.com/maps/basic/style.json?key=';
const ESRI_STYLE = 'https://www.arcgis.com/sharing/rest/content/items/df7862bfd7984baab51ff9df8e214278/resources/styles/root.json?f=json';

const restDom = () => {
  document.getElementById('map').innerHTML = '';
}

window.olMapTiler = () => {
  restDom();
  olFromStyle(MAPTILER_STYLE + tokens.MAPTILER_TOKEN);
}

window.olEsri = () => {
  restDom();
  olFromStyle(ESRI_STYLE);
}

window.mapboxMapTiler = () => {
  restDom();
  mapboxFromStyle(MAPTILER_STYLE + tokens.MAPTILER_TOKEN);
}

window.mapboxEsri = () => {
  restDom();
  mapboxFromStyle(ESRI_STYLE);
}
