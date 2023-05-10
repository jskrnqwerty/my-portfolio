import { iconHoverColor } from "../../data/Data";

const AccesibilityIcon = () => {
  return (
    <svg
      // width="800px"
      // height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="accessibilityHumanIconTitle"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      // fill="none"
      color="#000000"
      className="accessibility icon"
      aria-label="Accessibility icon"
    >
      <title>Accessibility</title>
      <circle
        className="stroke-accent"
        stroke={iconHoverColor}
        cx="12"
        cy="3"
        r="1"
      />
      <path
        className="stroke-accent"
        stroke={iconHoverColor}
        d="M16 21L12 13M12 13V7M12 13L8 21M12 7L18 9M12 7L6 9"
      />{" "}
    </svg>
  );
};

export default AccesibilityIcon;
