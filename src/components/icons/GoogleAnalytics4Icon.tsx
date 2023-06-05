import { iconHoverColor } from "../../data/Data";

const GoogleAnalytics4Icon = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      // width="192px"
      // height="192px"
      viewBox="0 0 192 192"
      enable-background="new 0 0 192 192"
      // xml:space="preserve"
      className="google-analytics icon"
      aria-label="Google Analytics"
    >
      <rect
        x="0"
        y="0"
        fill="none"
        // width="192"
        // height="192"
      />
      <g>
        <g>
          <path
            className="fill-accent"
            fill={iconHoverColor}
            // fill="#F9AB00"
            d="M130,29v132c0,14.77,10.19,23,21,23c10,0,21-7,21-23V30c0-13.54-10-22-21-22S130,17.33,130,29z"
          />
        </g>
        <g>
          <path
            className="fill-accent"
            fill={iconHoverColor}
            // fill="#E37400"
            d="M75,96v65c0,14.77,10.19,23,21,23c10,0,21-7,21-23V97c0-13.54-10-22-21-22S75,84.33,75,96z"
          />
        </g>
        <g>
          <circle
            className="fill-accent"
            fill={iconHoverColor}
            // fill="#E37400"
            cx="41"
            cy="163"
            r="21"
          />
        </g>
      </g>
    </svg>
  );
};

export default GoogleAnalytics4Icon;
