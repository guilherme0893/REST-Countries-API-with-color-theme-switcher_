// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const Map = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDD7U_mppztsdlKF8Ap3gj87mhGHQFcMTU"
//   })     

//   return (
//     <div className="flex" style={{ height: '50vh' }}>
//       <div>
//         {
//           isLoaded ? (
//             <GoogleMap
//               mapContainerStyle={{ width: '50%', height: '100%'}}
//               center={{
//                 lat: -22.89305382147234, 
//                 lng:-43.29359369175587
//               }}
//               zoom={15}
//             >
//             </GoogleMap>
//           ) : (
//           <></>
//           )
//         }
//       </div>
//     </div>
//   ) 
// }

// export default Map;

import React, { useRef, useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Initialize and add the map
export default function initMap(): void {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: uluru,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

// const Map: React.FC<{}> = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [map, setMap] = useState<google.maps.Map>();

//   useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);
//   return (
//     <div ref={ref} />
//   );
// }

// const = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: ""
//   })     

//   return (
//     <div className="flex" style={{ height: '50vh' }}>
//       <div>
//         {
//           isLoaded ? (
//             <GoogleMap
//               mapContainerStyle={{ width: '50%', height: '100%'}}
//               center={{
//                 lat: -22.89305382147234, 
//                 lng:-43.29359369175587
//               }}
//               zoom={15}
//             >
//             </GoogleMap>
//           ) : (
//           <></>
//           )
//         }
//       </div>
//     </div>
//   ) 
// }

// export default Map;

