import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
  className="pizza-block"
    speed={2}
    width={280}
    height={495}
    viewBox="0 0 280 495"
    backgroundColor="#f2f2f2"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="132" r="125" />
    <rect x="129" y="519" rx="5" ry="5" width="125" height="30" />
    <rect x="0" y="339" rx="5" ry="5" width="280" height="88" />
    <rect x="0" y="281" rx="5" ry="5" width="280" height="35" />
    <rect x="0" y="456" rx="10" ry="10" width="90" height="27" />
    <rect x="126" y="447" rx="10" ry="10" width="151" height="48" />
    <circle cx="186" cy="142" r="4" />
    <circle cx="178" cy="144" r="9" />
  </ContentLoader>
);

export default Sceleton;
