<script>
  import { onMount } from "svelte";
  import { browser } from "$app/env";

  onMount(async () => {
    if (browser) {
      const leaflet = await import("leaflet");
      const MiniMap = await import("leaflet-minimap");

      var roverIcon = L.icon({
        iconUrl: "rover.png",
        iconSize: [45, 45],
        iconAnchor: [27, 74],
        popupAnchor: [-3, -76],
      });

      var mars2 = L.marker([-45, 47], { icon: roverIcon }).bindPopup("Mars 2"),
        mars3 = L.marker([-45, 202], { icon: roverIcon }).bindPopup("Mars 3"),
        deepspace2 = L.marker([-73, -210], { icon: roverIcon }).bindPopup(
          "Deep Space 2"
        ),
        polarlander = L.marker([-76, -195], { icon: roverIcon }).bindPopup(
          "Mars Polar Lander"
        ),
        spirit = L.marker([-14.5684, 175.472636], {
          icon: roverIcon,
        }).bindPopup("Spirit"),
        curiosity = L.marker([-4.5895, 137.4417], {
          icon: roverIcon,
        }).bindPopup("Curiosity"),
        insight = L.marker([4.5024, 135.6234], {
          icon: roverIcon,
        }).bindPopup("InSight"),
        opportunity = L.marker([-1.9462, 354.4734 - 350], {
          icon: roverIcon,
        }).bindPopup("Opportunity"),
        mars6 = L.marker([-23.9, -19.42], { icon: roverIcon }).bindPopup(
          "Mars 6"
        ),
        schiaparelli = L.marker([-2.05, -6.21], { icon: roverIcon }).bindPopup(
          "Schiaparelli EDM"
        ),
        beagle2 = L.marker([11.52879, 90.43139], { icon: roverIcon }).bindPopup(
          "Beagle 2"
        ),
        viking1 = L.marker([22.27, 312.05 - 360], {
          icon: roverIcon,
        }).bindPopup("Viking 1"),
        sojourner = L.marker([19.13, -33.22], { icon: roverIcon }).bindPopup(
          "Sojourner"
        ),
        perseverance = L.marker([18.44486, 77.45102], {
          icon: roverIcon,
        }).bindPopup("Perseverance"),
        zhurong = L.marker([25.066, 109.926], { icon: roverIcon }).bindPopup(
          "Zhurong"
        ),
        phoenix = L.marker([68.2188, -125.7492], { icon: roverIcon }).bindPopup(
          "Phoenix"
        ),
        viking2 = L.marker([47.64, -225.71], { icon: roverIcon }).bindPopup(
          "Viking 2"
        );

      var landingsites = L.layerGroup([
        mars2,
        mars3,
        deepspace2,
        polarlander,
        spirit,
        curiosity,
        insight,
        opportunity,
        mars6,
        schiaparelli,
        beagle2,
        viking1,
        sojourner,
        perseverance,
        zhurong,
        phoenix,
        viking2,
      ]);

      var baseMaps = {
        Basemap: L.tileLayer(
          "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: false,
          }
        ),
        Viking: L.tileLayer(
          "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/viking_mdim21_global/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
        "Shaded Texture": L.tileLayer(
          "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
        Elevation: L.tileLayer(
          "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-gray/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
        Hillshade: L.tileLayer(
          "https://s3.us-east-2.amazonaws.com/opmmarstiles/hillshade-tiles/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
        "MOLA Color": L.tileLayer(
          "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-color/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
      };

      var baseMaps_minimap = {
        Basemap: L.tileLayer(
          "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: false,
          }
        ),
        Viking: L.tileLayer(
          "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/viking_mdim21_global/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
        "Shaded Texture": L.tileLayer(
          "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
        Elevation: L.tileLayer(
          "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-gray/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
        Hillshade: L.tileLayer(
          "https://s3.us-east-2.amazonaws.com/opmmarstiles/hillshade-tiles/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
        "MOLA Color": L.tileLayer(
          "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-color/{z}/{x}/{y}.png",
          {
            zoom: 3,
            tms: true,
          }
        ),
      };

      var overlayMaps = {
        "Landing Sites": landingsites,
      };

      const map = leaflet
        .map("map", {
          layers: [landingsites, baseMaps.Basemap],
        })
        .setView([0, 0], 2);

      L.control.layers(baseMaps, overlayMaps).addTo(map);

      // add MiniMap to Mars Map

      var rect1 = { color: "#b0b0b0", weight: 3 };
      var rect2 = { color: "#616161", weight: 1, opacity: 0, fillOpacity: 0 };
      var miniMap = new L.Control.MiniMap(baseMaps_minimap.Basemap, {
        toggleDisplay: true,
        aimingRectOptions: rect1,
        shadowRectOptions: rect2,
        collapsedWidth: 50,
        collapsedHeight: 50,
      }).addTo(map);

      map.on("baselayerchange", function (e) {
        miniMap.changeLayer(baseMaps_minimap[e.name]);
      });
    }
  });
</script>

<main>
  <div id="map" />
</main>

<style>
  @import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
  main #map {
    height: 99vh;
  }
</style>
