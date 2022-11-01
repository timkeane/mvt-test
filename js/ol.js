import olms from 'ol-mapbox-style';

const olFromStyle = styleUrl => {
  olms('map', styleUrl).then(map => {
    const view = map.getView();
    view.setCenter([-8236053.466742615, 4967206.320292581]);
    view.setZoom(17);
    window.map = map;
  });  
}

export default olFromStyle;
