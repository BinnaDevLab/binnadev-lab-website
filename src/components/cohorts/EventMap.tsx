"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { EventLocation } from "@/data/events";
import { Navigation } from "lucide-react";

interface EventMapProps {
  location: Extract<EventLocation, { type: "in-person" }>;
}

export default function EventMap({ location }: EventMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    // Unregister any stale service workers that might cache old CSP headers or block tiles
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, []);

  if (!mounted || !location.latitude || !location.longitude) {
    return (
      <div className="w-full h-full min-h-[400px] bg-gray-100 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`;

  // Create a custom Leaflet DivIcon mimicking our premium React marker
  const customMarkerIcon = L.divIcon({
    className: "custom-leaflet-marker",
    html: `
      <div class="flex flex-col items-center group -mt-10 -ml-16">
        <!-- Tooltip -->
        <div class="bg-white border border-gray-200 px-3 py-1.5 rounded shadow-lg whitespace-nowrap mb-2 transition-all duration-300 pointer-events-none opacity-90 group-hover:opacity-100">
          <p class="text-gray-900 text-sm font-medium">${location.venue}</p>
        </div>
        
        <!-- Premium Location Pin -->
        <div class="relative flex items-center justify-center">
          <div class="absolute w-12 h-12 bg-red-500/30 rounded-full animate-ping" style="animation-duration: 2s"></div>
          <div class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg relative z-10 border-2 border-white transform transition-transform group-hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="text-white">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    `,
    iconSize: [32, 32], // Defines the bounds for click interactions
    iconAnchor: [16, 16], // Centers the click area on the marker
  });

  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] bg-gray-100 isolate">
      {/* 
        Leaflet needs a defined height/width and an explicit z-index to stay behind nextjs overlays 
        The style tag sets the z-index strictly on the map container.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .leaflet-container { z-index: 10 !important; font-family: inherit; }
        .custom-leaflet-marker { background: transparent; border: none; }
      `,
        }}
      />

      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={15}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        <Marker
          position={[location.latitude, location.longitude]}
          icon={customMarkerIcon}
        />
      </MapContainer>

      {/* Get Directions Button */}
      <a
        href={getDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-gray-200 hover:border-gray-300 text-gray-800 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:bg-gray-50 group"
      >
        <Navigation className="w-4 h-4 text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        Get Directions
      </a>
    </div>
  );
}
