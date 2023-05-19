import { iconHoverColor } from "../../data/Data";

const ReactIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      aria-label="React logo"
      className="react icon"
    >
      <title>React.js</title>
      <circle
        className="fill-accent stroke-accent"
        cx="0"
        cy="0"
        r="2.05"
        fill={iconHoverColor}
        stroke={iconHoverColor}
      />
      <g
        className="stroke-accent"
        fill="none"
        strokeWidth="1"
        // stroke="#61dafb"
        stroke={iconHoverColor}
      >
        <ellipse
          rx="11"
          ry="4.2"
        />
        <ellipse
          rx="11"
          ry="4.2"
          transform="rotate(60)"
        />
        <ellipse
          rx="11"
          ry="4.2"
          transform="rotate(120)"
        />
      </g>
    </svg>
  );
};

export default ReactIcon;
