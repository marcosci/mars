<script>
  // import packages
  import { onMount } from "svelte";
  import { browser } from "$app/env";
  import SidebarLeft from "$lib/SidebarLeft.svelte";
  import SidebarRight from "$lib/SidebarRight.svelte";
  import curiosity_path from "$lib/data/curiosity_path.json";
  import perseverance_path from "$lib/data/perseverance_path.json";
  import helicopter_path from "$lib/data/helicopter_path.json";
  import mars_montes from "$lib/data/mars_montes.json";

  onMount(async () => {
    if (browser) {
      // import packages
      const leaflet = await import("leaflet");
      const MiniMap = await import("leaflet-minimap");

      // define icon for rover markers
      var roverIcon = L.icon({
        iconUrl: "rover.png",
        iconSize: [45, 45],
        iconAnchor: [27, 74],
        popupAnchor: [-3, -76],
      });

      // define landing sites for all rovers
      var mars2 = L.marker([-45, 47], { icon: roverIcon }).bindPopup(
          "<b>Mars 2</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/1/13/Mars3_iki.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Mars_2'>Learn more about me!</a>"
        ),
        mars3 = L.marker([-45, 202], { icon: roverIcon }).bindPopup(
          "<b>Mars 3</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/f/f5/FP2A3620_%2823497688248%29.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Mars_3'>Learn more about me!</a>"
        ),
        deepspace2 = L.marker([-73, -210], { icon: roverIcon }).bindPopup(
          "<b>Deep Space 2</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Flight_1_probe_of_Deep_Space_2_in_Pre-Impact_Configuration_Microprobe-5.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Deep_Space_2'>Learn more about me!</a>"
        ),
        polarlander = L.marker([-76, -195], { icon: roverIcon }).bindPopup(
          "<b>Mars Polar Lander</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/9/92/Mars_Polar_Lander_undergoes_testing.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Mars_Polar_Lander'>Learn more about me!</a>"
        ),
        spirit = L.marker([-14.5684, 175.472636], {
          icon: roverIcon,
        }).bindPopup(
          "<b>Spirit</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/KSC-03PD-0786.jpg/2880px-KSC-03PD-0786.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Spirit_(rover)'>Learn more about me!</a>"
        ),
        curiosity = L.marker([-4.589467, 137.441633], {
          icon: roverIcon,
        }).bindPopup(
          "<b>Curiosity</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/1920px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Curiosity_(rover)'>Learn more about me!</a>"
        ),
        insight = L.marker([4.5024, 135.6234], {
          icon: roverIcon,
        }).bindPopup(
          "<b>InSight</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/5/55/PIA19666-MarsInSightLander-Assembly-20150429.jpg'> <br> <a href='https://en.wikipedia.org/wiki/InSight'>Learn more about me!</a>"
        ),
        opportunity = L.marker([-1.9462, 354.4734 - 350], {
          icon: roverIcon,
        }).bindPopup(
          "<b>Opportunity</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/c/c9/Opportunity_in_Endurance_Crater_%28cropped%29.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Opportunity_(rover)'>Learn more about me!</a>"
        ),
        mars6 = L.marker([-23.9, -19.42], { icon: roverIcon }).bindPopup(
          "<b>Mars 6</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/c/ce/Mars6.gif'> <br> <a href='https://en.wikipedia.org/wiki/Mars_6'>Learn more about me!</a>"
        ),
        schiaparelli = L.marker([-2.05, -6.21], { icon: roverIcon }).bindPopup(
          "<b>Schiaparelli EDM</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Schiaparelli_Lander_Model_at_ESOC.JPG/2880px-Schiaparelli_Lander_Model_at_ESOC.JPG'> <br> <a href='https://en.wikipedia.org/wiki/Schiaparelli_EDM'>Learn more about me!</a>"
        ),
        beagle2 = L.marker([11.52879, 90.43139], { icon: roverIcon }).bindPopup(
          "<b>Beagle 2</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Beagle_2_model_at_Liverpool_Spaceport.jpg/2880px-Beagle_2_model_at_Liverpool_Spaceport.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Beagle_2'>Learn more about me!</a>"
        ),
        viking1 = L.marker([22.27, 312.05 - 360], {
          icon: roverIcon,
        }).bindPopup(
          "<b>Viking 1</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/7/75/Viking_spacecraft.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Viking_1'>Learn more about me!</a>"
        ),
        sojourner = L.marker([19.13, -33.22], { icon: roverIcon }).bindPopup(
          "<b>Sojourner</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Sojourner_on_Mars_PIA01122.jpg'> <br> <a href='https://en.wikipedia.org/wiki/Sojourner_(rover)'>Learn more about me!</a>"
        ),
        perseverance = L.marker([18.44486, 77.45102], {
          icon: roverIcon,
        }).bindPopup(
          "<b>Perseverance</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Perseverance-Selfie-at-Rochette-Horizontal-V2.gif/600px-Perseverance-Selfie-at-Rochette-Horizontal-V2.gif' > <br> <a href='https://en.wikipedia.org/wiki/Perseverance_(rover)'>Learn more about me!</a>"
        ),
        zhurong = L.marker([25.066, 109.926], { icon: roverIcon }).bindPopup(
          "<b>Zhurong</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/3/38/Zhurong_rover_and_Tianwen-1_lander_%28cropped%29.png' > <br> <a href='https://en.wikipedia.org/wiki/Zhurong_(rover)'>Learn more about me!</a>"
        ),
        phoenix = L.marker([68.2188, -125.7492], { icon: roverIcon }).bindPopup(
          "<b>Phoenix</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Phoenix_landing.jpg/2560px-Phoenix_landing.jpg' > <br> <a href='https://en.wikipedia.org/wiki/Phoenix_(spacecraft)'>Learn more about me!</a>"
        ),
        viking2 = L.marker([47.64, -225.71], { icon: roverIcon }).bindPopup(
          "<b>Viking 2</b><br> <img style='width: 300px' src='https://upload.wikimedia.org/wikipedia/commons/7/75/Viking_spacecraft.jpg' > <br> <a href='https://en.wikipedia.org/wiki/Viking_2'>Learn more about me!</a>"
        );

      // group them as featureGroup
      var landingsites = L.featureGroup([
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

      // define underlying basemaps
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

      // rover paths
      var roverStyle = {
        color: "#ff7800",
        weight: 5,
        opacity: 0.65,
      };

      var heliStyle = {
        color: "#ffac62",
        weight: 5,
        opacity: 0.65,
      };

      var montesStyle = {
        color: "#f2c693",
        weight: 5,
        opacity: 0.75,
      };

      var curiosity_line = L.geoJSON(curiosity_path, {
        style: roverStyle,
      });
      var perseverance_line = L.geoJSON(perseverance_path, {
        style: roverStyle,
      });
      var helicopter_line = L.geoJSON(helicopter_path, {
        style: heliStyle,
      });

      // show name of each element of mars_poly
      function onEachFeatures(feature, layer) {
        layer.bindPopup(feature.properties.clean_name);
        // change layer color
        layer.on({
          click: function (e) {
            e.target.setStyle({
              color: "#ff7800",
            });
          },
        });
      }

      var mars_poly = L.geoJSON(mars_montes, {
        style: montesStyle,
        onEachFeature: onEachFeatures,
      });

      helicopter_line.bindTooltip("Perseverance copter flight path");
      curiosity_line.bindTooltip("Curiosity rover path");
      perseverance_line.bindTooltip("Perseverance rover path");

      var curiosityPaths = L.featureGroup([curiosity_line]);

      var perseverancePaths = L.featureGroup([
        perseverance_line,
        helicopter_line,
      ]);

      var marsMontes = L.featureGroup([mars_poly]);

      var overlayMaps = {
        "Landing Sites": landingsites,
        Curiosity: curiosityPaths,
        Perseverance: perseverancePaths,
        "Mars Montes": marsMontes,
      };

      // let s do the actual map
      const map = leaflet
        .map("map", {
          layers: [marsMontes, baseMaps.Basemap],
        })
        .setView([0, 0], 2.25);

      L.control.layers(baseMaps, overlayMaps).addTo(map);

      // change map attribution
      map.attributionControl.setPrefix(
        "<a href='https://www.openplanetary.org/opm/basemaps'>OpenPlanetaryMap Basemaps</a>"
      );

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

      // zoom to extent of selected layer
      map.on("overlayadd", function (e) {
        if (e.name === "Landing Sites") {
          map.fitBounds(landingsites.getBounds());
        } else if (e.name === "Perseverance") {
          map.fitBounds(perseverancePaths.getBounds());
        } else if (e.name === "Curiosity") {
          map.fitBounds(curiosityPaths.getBounds());
        } else if (e.name === "Mars Montes") {
          map.fitBounds(marsMontes.getBounds());
        }
      });
    }
  });
</script>

<main>
  <div id="map" />
  <!-- <SidebarLeft /> -->
  <SidebarRight />
</main>

<style>
  @import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
  main #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
