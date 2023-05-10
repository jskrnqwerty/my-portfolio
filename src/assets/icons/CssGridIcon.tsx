import { iconHoverColor } from "../../data/Data";

const CSSGridIcon = () => {
  return (
    <svg
      className="css-grid icon"
      aria-label="CSS Grid icon"
      // width="800px"
      // height="800px"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CSS Grid</title>
      <path
        className="fill-accent"
        fill={iconHoverColor}
        d="M1.5 0C0.671573 0 0 0.671573 0 1.5V5.5C0 6.32843 0.671573 7 1.5 7H5.5C6.32843 7 7 6.32843 7 5.5V1.5C7 0.671573 6.32843 0 5.5 0H1.5Z"
        // fill="#000000"
      />
      <path
        className="fill-accent"
        fill={iconHoverColor}
        d="M9.5 0C8.67157 0 8 0.671573 8 1.5V5.5C8 6.32843 8.67157 7 9.5 7H13.5C14.3284 7 15 6.32843 15 5.5V1.5C15 0.671573 14.3284 0 13.5 0H9.5Z"
        // fill="#000000"
      />
      <path
        className="fill-accent"
        fill={iconHoverColor}
        d="M1.5 8C0.671573 8 0 8.67157 0 9.5V13.5C0 14.3284 0.671573 15 1.5 15H5.5C6.32843 15 7 14.3284 7 13.5V9.5C7 8.67157 6.32843 8 5.5 8H1.5Z"
        // fill="#000000"
      />
      <path
        className="fill-accent"
        fill={iconHoverColor}
        d="M9.5 8C8.67157 8 8 8.67157 8 9.5V13.5C8 14.3284 8.67157 15 9.5 15H13.5C14.3284 15 15 14.3284 15 13.5V9.5C15 8.67157 14.3284 8 13.5 8H9.5Z"
        // fill="#000000"
      />
    </svg>
  );
};

export default CSSGridIcon;
