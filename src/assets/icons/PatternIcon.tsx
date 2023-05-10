import { iconHoverColor } from "../../data/Data";

const PatternIcon = () => {
  return (
    <svg
      className="pattern icon"
      aria-label="Pattern Recognition icon"
      // width="800px"
      // height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill="none"
          d="M0 0h24v24H0z"
        />
        <path
          className="fill-accent-soft-skill"
          fill={iconHoverColor}
          d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"
        />
      </g>
    </svg>
  );
};

export default PatternIcon;
