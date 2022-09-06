<template>
  <div id="zhmap" class="zhmap"></div>
</template>

<script>
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";
import View from "ol/View";
import { ScaleLine, defaults as defaultControls } from "ol/control";
import {fromLonLat} from 'ol/proj';
export default {
  mounted() {
    const layers = [
      new TileLayer({
        source: new TileWMS({
          url: "http://localhost:8080/geoserver/ouc/wms", 
          params: {
            LAYERS: "ouc:中华人民共和国谷歌混合08101359", 
            TILED: true,
            version: "1.1.0"
          },
          serverType: "geoserver",
        }),
      }),
    ];

    new Map({
      controls: defaultControls().extend([
        new ScaleLine({
          units: "degrees",
        }),
      ]),
      layers: layers,
      target: "zhmap",
      view: new View({
        center: fromLonLat([120.39368, 34.05212]),
        zoom: 8,
      }),
    });
  },
};
</script>
<style>
.zhmap {
  height: calc(100vh - 100px);
  width: 100%;
}
</style>
