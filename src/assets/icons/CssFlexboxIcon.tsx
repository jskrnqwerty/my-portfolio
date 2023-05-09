import { IconType } from "../../types/Types";

const CSSFlexBoxIcon = ({ strokeColor }: IconType) => {
  return (
    <svg
      className="css-flexbox icon"
      aria-label="CSS Flexbox icon"
      // width="800px"
      // height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <title>CSS Flexbox</title> */}
      <path
        className="stroke-accent"
        stroke={strokeColor}
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        // stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="stroke-accent"
        stroke={strokeColor}
        // opacity="0.4"
        d="M12 2V22"
        // stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CSSFlexBoxIcon;
