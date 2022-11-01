import mapboxgl from 'mapbox-gl';
import tokens from './tokens.js';

mapboxgl.accessToken = tokens.MAPBOX_TOKEN;

const mapboxFromStyle = styleUrl => {
  return new mapboxgl.Map({
    container: 'map',
    style: styleUrl,
    center: [-73.98572710000462, 40.69328722808094],
    zoom: 17
  });
}

export default mapboxFromStyle;
