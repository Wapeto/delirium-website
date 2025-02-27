"use client";
import React, { FC } from "react";
import Script from "next/script";
import DefaultBtn from "./DefaultBtn";
import { IoIosPin } from "react-icons/io";

const Map: FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const lat = 48.584693908691406;
  const lng = 7.742454528808594;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=console.debug&libraries=maps,marker&v=beta`}
        async
      />

      <div className="flex flex-col items-center h-auto w-full bg-beige mt-16 shadow-[inset_0_12px_14px_-9px_rgba(0,0,0,0.9)] py-10">
        {/* Container with map */}
        <div className="w-72 h-72 rounded overflow-hidden shadow-[0px_6px_8px_3px_rgba(0,0,0,0.25)]">
          <gmp-map
        center={`${lat},${lng}`}
        zoom="16"
        map-id="DELIRIUM_MAP_ID"
        class="w-full h-full"
          >
        <gmp-advanced-marker
          position={`${lat},${lng}`}
          title="My location"
        ></gmp-advanced-marker>
          </gmp-map>
        </div>

        <DefaultBtn
          text="Itinéraire"
          icon={<IoIosPin className="w-8 h-8 p-[2.25px] flex justify-center items-center"/>}
          onClickEvent={() => window.open(directionsUrl, "_blank")}
          className="w-[159px] overflow-hidden mt-8"
          textStyles="font-semibold"
        />
      </div>
    </>
  );
};

export default Map;
