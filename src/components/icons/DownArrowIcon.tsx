import { iconHoverColor } from "../../data/Data";

const DownArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
      className="down-arrow icon"
    >
      <path
        className="fill-accent"
        d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"
        fill={iconHoverColor}
      />
    </svg>
  );
};

export default DownArrowIcon;
