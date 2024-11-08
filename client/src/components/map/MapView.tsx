import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  Polyline,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as geocoder from "leaflet-control-geocoder";
import { useEffect, useRef } from "react";
import MarkersData from "../../../data/map/marker.ts";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { Button } from "../ui/button.tsx";

const SearchControl = () => {
  const map = useMap();

  useEffect(() => {
    const geocodeControl = geocoder
      .geocoder({
        defaultMarkGeocode: false,
      })
      .on("markgeocode", function (e) {
        const latlng = e.geocode.center;
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.setView(latlng, 18);
      })
      .addTo(map);

    return () => {
      map.removeControl(geocodeControl);
    };
  }, [map]);

  return null;
};

const MapView = () => {
  const mapRef = useRef(null);

  // Define the paths
  const sustainablePaths = {
    "Path 1": [
      [12.336663848300274, 76.6185232161324],
      [12.336184337678521, 76.61855003822232],
    ],
    "Path 2": [
      [12.335802996519408, 76.61924792488927],
      [12.335406386659713, 76.61925807445894],
    ],
    "Path 3": [
      [12.33653055636741, 76.62023980019399],
      [12.335782049221612, 76.62017441349904],
    ],
  };

  const bikeRidePath = [
    [12.33676067508059, 76.61845472466858],
    [12.336757248395925, 76.61903601090364],
    [12.335352723445725, 76.61914735596481],
  ];

  useEffect(() => {
    if (mapRef.current) {
      const layerGroup = new L.LayerGroup();

      MarkersData.forEach((marker) => {
        const leafletMarker = new L.Marker(marker.position, {
          icon: L.icon({
            iconUrl: "/map/location.svg",
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
          }),
        }).bindPopup(`
            <h3>${marker.name}</h3>
            <p>${marker.description}</p>`);
        layerGroup.addLayer(leafletMarker);
      });

      layerGroup.addTo(mapRef.current);

      return () => {
        layerGroup.clearLayers();
      };
    }
  }, []);

  return (
    <div className="relative w-full h-[500px]">
      <MapContainer
        center={[12.3365759, 76.61707]}
        zoom={18}
        className="w-full h-full"
        ref={mapRef}
      >
        <SearchControl />
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="Esri World Imagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Alidade Satellite">
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
              minZoom={0}
              maxZoom={20}
              attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              ext="jpg"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Google Satellite">
            <TileLayer
              url="http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="https://www.google.com/permissions/geoguidelines/">Google</a>'
            />
          </LayersControl.BaseLayer>

          {[
            "Sports Facilities",
            "Hostels",
            "Buildings",
            "Institutes",
            "Colleges",
            "Facilities",
            "Parking",
            "Recycling",
            "Green Spaces",
            "Shaded Areas",
          ].map((category) => (
            <LayersControl.Overlay name={category} key={category}>
              <LayerGroup>
                {MarkersData.filter(
                  (marker) => marker.category === category
                ).map((marker, index) => (
                  <Marker
                    key={index}
                    position={marker.position}
                    icon={L.divIcon({
                      html: `
                <div style="position: relative;">
                  <img src="/map/location.svg" style="width: 26px; height: 26px;" />
                  <div style="position: absolute; top: -6px; left: 3px; width: 20px; height: 20px; background-color: rgba(35, 157, 250, 1); display: flex; justify-content: center; align-items: center; font-size: 14px; color: white; border-radius: 50%;">
                    ${marker.icon}
                  </div>
                </div>
              `,
                      className: "custom-icon",
                      iconSize: [32, 32],
                    })}
                  >
                    <Popup>
                      <h3>{marker.name}</h3>
                      <p>{marker.description}</p>
                      {[
                        "Parking",
                        "Recycling",
                        "Green Spaces",
                        "Shaded Areas",
                      ].includes(category) && (
                        <div>
                          <img
                            src={marker.image}
                            alt={marker.name}
                            style={{
                              width: "100%",
                              height: "auto",
                              margin: "4px",
                            }}
                          />
                          <Button
                            onClick={() =>
                              window.open(marker.readMoreLink, "_blank")
                            }
                          >
                            Read More & Claim points
                          </Button>
                        </div>
                      )}
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
          ))}

          {/* Sustainable Paths in Green */}
          <LayersControl.Overlay name="Sustainable Paths">
            <LayerGroup>
              {Object.entries(sustainablePaths).map(
                ([pathName, pathCoordinates], index) => (
                  <Polyline
                    key={index}
                    positions={pathCoordinates}
                    color="#4CAF50"
                    weight={5}
                    opacity={0.7}
                    eventHandlers={{
                      mouseover: (e) => {
                        e.target.setStyle({
                          weight: 8,
                          color: "#81C784",
                        });
                      },
                      mouseout: (e) => {
                        e.target.setStyle({
                          weight: 5,
                          color: "#4CAF50",
                        });
                      },
                    }}
                  >
                    <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                      {pathName}
                    </Tooltip>
                  </Polyline>
                )
              )}
            </LayerGroup>
          </LayersControl.Overlay>

          {/* Bike Ride Path with Popup */}
          <LayersControl.Overlay name="Bike Ride Path">
            <LayerGroup>
              <Polyline
                positions={bikeRidePath}
                color="grey"
                weight={5}
                opacity={0.7}
                eventHandlers={{
                  mouseover: (e) => {
                    e.target.setStyle({
                      weight: 8,
                      color: "#B0B0B0",
                    });
                  },
                  mouseout: (e) => {
                    e.target.setStyle({
                      weight: 6,
                      color: "#fcba03",
                    });
                  },
                  click: (e) => {
                    const popup = L.popup()
                      .setLatLng(e.latlng)
                      .setContent(
                        "<b>Bike Ride Path</b><br>Enjoy the scenic route!"
                      )
                      .openOn(e.target._map);
                  },
                }}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                  Bike Ride Path
                </Tooltip>
              </Polyline>
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapView;


