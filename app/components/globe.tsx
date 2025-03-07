'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import type { GlobeMethods } from 'react-globe.gl';
import { debounce } from 'lodash';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

type CountryFeature = {
  properties: {
    name: string;
  };
};

export default function SpinningGlobe() {
  const globeRef = useRef<GlobeMethods>();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [countries, setCountries] = useState<CountryFeature[]>([]);

  const debouncedHover = debounce((country) => {
    console.log("Hovered country:", country?.properties.name);
    setHoveredCountry(country ? country.properties.name : null);
  }, 100);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
      .then(res => res.json())
      .then(data => setCountries(data.features as CountryFeature[]));
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.5;
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative">
      <Globe
        ref={globeRef}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        polygonsData={countries}
        polygonAltitude={0.01}
        polygonCapColor={() => 'rgb(255, 255, 255)'}
        polygonSideColor={() => 'rgba(255, 255, 255, 0.2)'}
        polygonStrokeColor={() => '#111'}
        onPolygonHover={(country) => debouncedHover(country)}
      />
      {hoveredCountry && (
        <div className="globe-text absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded shadow-lg">
          {hoveredCountry}
        </div>
      )}
    </div>
  );
}
