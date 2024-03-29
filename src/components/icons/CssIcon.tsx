import { iconHoverColor, bgColor } from "../../data/Data";

const CssIcon = () => {
  return (
    <svg
      className="css icon"
      // width="800px"
      // height="800px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CSS 3 logo"
    >
      <title>CSS 3</title>
      <path
        className="fill-accent"
        d="M6 28L4 3H28L26 28L16 31L6 28Z"
        // fill="#1172B8"
        fill={iconHoverColor}
      />
      <path
        className="fill-accent"
        d="M26 5H16V29.5L24 27L26 5Z"
        // fill="#33AADD"
        fill={iconHoverColor}
      />
      <path
        className="fill-bg"
        d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
        // fill="white"
        fill={bgColor}
      />
    </svg>
  );
};

export default CssIcon;
