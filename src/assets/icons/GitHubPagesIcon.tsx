import { IconType } from "../../types/Types";

const GitHubPagesIcon = ({ fillColor }: IconType) => {
  return (
    <svg
      className="github-pages icon"
      aria-label="Github Pages icon"
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      // xml:space="preserve"
    >
      <g>
        <path
          className="fill-accent"
          fill={fillColor}
          d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.508,21.492,48,48,48h416c26.508,0,48-21.492,48-48V48
        C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19
        S434.172,35,444.664,35z M374.164,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S363.672,35,374.164,35z
        M303.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S293.172,35,303.664,35z M472,464
        c0,4.406-3.586,8-8,8H48c-4.414,0-8-3.594-8-8V104h432V464z"
        />
        <rect
          className="fill-accent"
          fill={fillColor}
          x="96"
          y="192"
          width="152"
          height="32"
        />
        <rect
          className="fill-accent"
          fill={fillColor}
          x="96"
          y="352"
          width="328"
          height="32"
        />
        <rect
          className="fill-accent"
          fill={fillColor}
          x="304"
          y="192"
          width="120"
          height="120"
        />
        <polygon
          className="fill-accent"
          fill={fillColor}
          points="229.042,304 248,304 248,272 96,272 96,304 213.042,304 	"
        />
      </g>
    </svg>
  );
};

export default GitHubPagesIcon;
