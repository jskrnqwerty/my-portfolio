import { iconHoverColor } from "../../data/Data";

const GoogleAdsIcon = () => {
  return (
    <svg
      className="google-ads icon"
      fill="none"
      // width="800px"
      // height="800px"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      aria-label="Google Ads"
    >
      <title>Google Ads</title>
      <g>
        <path
          // className="fill-accent"
          // fill={iconHoverColor}
          // fill="#FBBC04"
          d="M5.888,166.405103 L90.88,20.9 C101.676138,27.2558621 156.115862,57.3844138 164.908138,63.1135172 L79.9161379,208.627448 C70.6206897,220.906621 -5.888,185.040138 5.888,166.396276 L5.888,166.405103 Z"
        ></path>
        <path
          className="fill-accent"
          fill={iconHoverColor}
          // fill="#4285F4"
          d="M250.084224,166.401789 L165.092224,20.9055131 C153.210293,1.13172 127.619121,-6.05393517 106.600638,5.62496138 C85.582155,17.3038579 79.182155,42.4624786 91.0640861,63.1190303 L176.056086,208.632961 C187.938017,228.397927 213.52919,235.583582 234.547672,223.904686 C254.648086,212.225789 261.966155,186.175582 250.084224,166.419444 L250.084224,166.401789 Z"
        ></path>
        <ellipse
          className="fill-accent"
          fill={iconHoverColor}
          // fill="#34A853"
          cx="42.6637241"
          cy="187.924414"
          rx="42.6637241"
          ry="41.6044138"
        ></ellipse>
      </g>
    </svg>
  );
};

export default GoogleAdsIcon;
