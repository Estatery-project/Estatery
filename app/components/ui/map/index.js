import React from "react";
import Script from "next/script";
const GOOGLE_MAPS_API_KEY = "AIzaSyB4wwjaaE2gCMFpsVYErvg1kh-LxE-4v3o";
const source = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB4wwjaaE2gCMFpsVYErvg1kh-LxE-4v3o&libraries=places`;

const GooglePlacesScript = () => {
  return (
    <Script type="text/javascript" src={source} strategy="beforeInteractive" />
  );
};

export default GooglePlacesScript;