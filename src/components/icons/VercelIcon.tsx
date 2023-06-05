import { iconHoverColor } from "../../data/Data";

const VercelIcon = () => {
  return (
    <svg
      // width="76"
      // height="65"
      viewBox="0 0 76 65"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="vercel icon"
      aria-label="Vercel"
    >
      <title>Vercel - Web Hosting</title>
      <path
        className="fill-accent"
        d="M37.5274 0L75.0548 65H0L37.5274 0Z"
        // fill="#000000"
        fill={iconHoverColor}
        // fill="red"
      />
    </svg>
  );
};

export default VercelIcon;
